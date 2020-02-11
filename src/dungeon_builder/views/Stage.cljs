(ns dungeon_builder.views.Stage
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon_builder.components.Controls :refer [Controls]]
            [dungeon_builder.components.SaveOverlay :refer [SaveOverlay]]
            [dungeon_builder.services.state.dispatcher :refer [handle-state-change]]
            [dungeon_builder.scripts.walls :as walls]
            [dungeon_builder.scripts.terrain :as terrain]
            [dungeon_builder.scripts.position :refer [get-x-position get-y-position]]
            [clojure.string :as str]
            ["panzoom" :as panzoom]))

(def canvas-properties
  (atom {:panRef nil
         :painting false
         :paint-mode true
         :erase-mode false
         :tileType "floor"
         :currentTile "tile"
         :tileset "basic" ; we'll use this later to all users to switch between tile types
         :loaded-map-name nil ; used to allow overrides
         :show-save-overlay false}))

; we pass a type as the terrain and tile maps are different
(defn generate-canvas-rep [type]
  "generates a representation of the canvas - we can use this to track which squares have been
  filled in so that we can modify which wall tile to place accotdingly"
  (loop [x 50
         canvas-build []]
    (let [canvas-row-values
      (loop [y 50
            canvas-build-inner []]
        (if (> y 3000)
          canvas-build-inner
          (recur (+ y 50) (conj canvas-build-inner (if (= type "terrain") [] {})))))]
    (if (> x 3000)
      canvas-build
      (recur (+ x 50) (conj canvas-build canvas-row-values))))))

(def canvas-rep (atom (generate-canvas-rep "tile")))
(def canvas-terrain-rep (atom (generate-canvas-rep "terrain"))) ; this holds our state for walls/doors/other terrain

(defn start-paint []
  (if (or (:paint-mode @canvas-properties) (:erase-mode @canvas-properties))
    (swap! canvas-properties conj {:painting true})))

(defn end-paint []
  (swap! canvas-properties conj {:painting false}))

(defn get-tile-value []
  (cond
    (= (:tileType @canvas-properties) "floor") 1
    (= (:tileType @canvas-properties) "wall") 2)) ; return 1 for a floor tile

(defn get-tile-value-terrain []
  (cond
    (= (:currentTile @canvas-properties) "small_wall")      1
    (= (:currentTile @canvas-properties) "small_wall_side") 2
    (= (:currentTile @canvas-properties) "door_tall")       3
    (= (:currentTile @canvas-properties) "door_long")       4))

(defn get-tile-value-terrain-load [val]
  (cond
    (= val 1) "small_wall"
    (= val 2) "small_wall_side"
    (= val 3) "door_tall"
    (= val 4) "door_long"))

(defn handle-wall-orientation [y x] ; y first as locicallit it's -> y down x
  (if (= (:tileType @canvas-properties) "wall")
    (let [wallMap {:left   (walls/check-left y x @canvas-rep ) ; creates a map of the direction the floor tiles are
                   :right  (walls/check-right y x @canvas-rep)
                   :top    (walls/check-top y x @canvas-rep )
                   :bottom (walls/check-bottom y x @canvas-rep )
                   :tright (walls/check-tright-corner y x @canvas-rep)
                   :bright (walls/check-bright-corner y x @canvas-rep)
                   :tleft  (walls/check-tleft-corner y x @canvas-rep)
                   :bleft  (walls/check-bleft-corner y x @canvas-rep)}]
      (cond
        (:left wallMap) "wall_tile_right"
        (:right wallMap) "wall_tile_left"
        (:top wallMap) "wall_tile_bottom"
        (:bottom wallMap) "wall_tile_top"
        (:tright wallMap) "wall_tile_corner_tright"
        (:bright wallMap) "wall_tile_corner_bright"
        (:tleft wallMap) "wall_tile_corner_tleft"
        (:bleft wallMap) "wall_tile_corner_bleft"))
      (:currentTile @canvas-properties))) ; end of if - we are just placing floors

(defn generate-tile-rep [imgSrc]
  {:type (get-tile-value) :tileset (:tileset @canvas-properties) :tile-name imgSrc})

; it might makes sense to make this one function but i think breaking them aparat is okay since
; we may want to add additional stuff to terrain later, not sure but this gives flexibility at
; very little maintence cost
(defn update-canvas-rep [x y imgSrc]
  ; e.x object {:type (or 1 0)  :tileset "basic" :tile-name  tile-1.jpg (this is the random part)}
  (swap! canvas-rep update-in [(/ y 50) (/ x 50)] conj (generate-tile-rep imgSrc)))

(defn update-cavas-terrain-rep [x y]
  ; we conj into the vector so a tile can have multiple pieces of terrain like a door and a wall!
  (swap! canvas-terrain-rep update-in [(/ y 50) (/ x 50)] conj (get-tile-value-terrain)))

(defn get-random-tile [current-tile]
  (if (= current-tile "tile")
    (str current-tile "-" (rand-int 3))
    current-tile))

(defn get-img-src [event]
  ; first we should determine the orientation of the wall
  ; then we should determine if it is a small wall or a big wall
  ; last we should randomize the number if the selection is a tile
    (get-random-tile (handle-wall-orientation (/ (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom @canvas-properties)) 50)) 50) (/ (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom @canvas-properties)) 50)) 50)))
  )

(defn draw-img-to-canvas [ctx imgObj event]
    (.drawImage ctx imgObj
      (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom @canvas-properties)) 50))
      (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom @canvas-properties)) 50))))

(defn draw-terrain-img-to-canvas [event]
  (let [imgObj (js/Image.)
        imgSrc (get-img-src event)
        canvas (.getElementById js/document "Canvas")
        ctx (.getContext canvas "2d")]

    ; TODO turn this into a cond for now we only have 2 terrain types though
    (if (str/includes? (:currentTile @canvas-properties) "door")
      (terrain/draw-door ctx event imgObj @canvas-properties update-cavas-terrain-rep)
      (terrain/draw-terrain-wall ctx event imgObj @canvas-properties update-cavas-terrain-rep))))

(defn paint-to-canvas [event]
  (.persist event)
  (if (and (:painting @canvas-properties) (:paint-mode @canvas-properties))
    (if (= (:tileType @canvas-properties) "terrain")
      (draw-terrain-img-to-canvas event)
      (do
        (def canvas (.getElementById js/document "Canvas")) ; TODO we should probably save a ref to these in the atom
        (def ctx (.getContext canvas "2d"))
        (let [imgObj (js/Image.)
              tileset (:tileset @canvas-properties)
              ; create a new get tile src functioin
              imgSrc (get-img-src event)]
          (aset imgObj "src" (str "./tiles/"tileset"/"imgSrc".jpg"))
          (aset imgObj "onload" (fn []
            (update-canvas-rep (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom @canvas-properties)) 50))
                               (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom @canvas-properties)) 50))
                               imgSrc)
            (draw-img-to-canvas ctx imgObj event))))))
   (if (and (:painting @canvas-properties) (:erase-mode @canvas-properties))
    (let [x (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom @canvas-properties)) 50))
          y (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom @canvas-properties)) 50))]
      (.clearRect ctx x y 50 50) ; clears our rectangle of the current Image

      ; since we clear the whole rectangle we need to then redraw the line or they'll be missing afterwards
      (.beginPath ctx)
      (.moveTo ctx x y)
      (.lineTo ctx (+ 50 x) y)
      (.lineTo ctx (+ 50 x) (+ 50 y))
      (.lineTo ctx x (+ 50 y))
      (.lineTo ctx x y)
      (.stroke ctx)))))


(defn draw-canvas-lines []
  (let [zoomElem (.querySelector js/document "#Canvas")
        ctx (.getContext zoomElem "2d")]
    (loop [x 50]
      (if (> x 3000)
        true
        (do
          (.beginPath ctx)
          (.moveTo ctx 0 x)
          (.lineTo ctx 3000 x)
          (.stroke ctx)

          (.beginPath ctx)
          (.moveTo ctx x 0)
          (.lineTo ctx x 3000)
          (.stroke ctx)
          (recur (+ x 50)))))))


(defn render-canvas []
  (let [zoomElem (.querySelector js/document "#Canvas")
        ctx (.getContext zoomElem "2d")]
    (def panHandler (panzoom zoomElem (clj->js {:maxZoom 1 :minZoom 0.3
                                            :minScale 1
                                            :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                            :bounds true})))
    (swap! canvas-properties conj {:panRef panHandler})
    (.zoomAbs panHandler -1500 -1500 0.75)
    (.pause panHandler)
    (.on panHandler "transform" (fn [e] ; we need to pull the zoom in order to adjust the onclick coords
      (swap! canvas-properties conj {:zoom (.-scale (.getTransform e))})))
    (loop [x 50]
      (if (> x 3000)
        true
        (do
          (.beginPath ctx)
          (.moveTo ctx 0 x)
          (.lineTo ctx 3000 x)
          (.stroke ctx)

          (.beginPath ctx)
          (.moveTo ctx x 0)
          (.lineTo ctx x 3000)
          (.stroke ctx)
          (recur (+ x 50)))))))


;TODO let's move these to a script to keep them all together and not make this file too Big
; This is another place where we could probably combine but ill leave apart for future additions and it's
; easier - im lazy!

; TODO might want to look and see if we can remove some of these 'do's
; they made it a bit easier to developer with prints but make the code overall
; a bit less readable
(defn map-load-paint-tiles [tile-map]
  "paints map tiles to the canvas"
  (loop [rowIndex 0
         tiles tile-map]
    (if (> (count tiles) 0)
      (do
        (loop [innerRowIndex 0
               tileRow (nth tiles 0)]
          (if (> (count tileRow) 0)
            (do
              (if (or (= 1 (:type (nth tileRow 0))) (= 2 (:type (nth tileRow 0))))
                (do
                  (def canvas (.getElementById js/document "Canvas")) ; TODO we should probably save a ref to these in the atom
                  (def ctx (.getContext canvas "2d"))
                  (let [imgObj (js/Image.)]
                    (aset imgObj "src" (str "./tiles/"(:tileset (nth tileRow 0))"/" (:tile-name (nth tileRow 0)) ".jpg"))
                    (aset imgObj "onload" (fn []
                      (.drawImage ctx imgObj
                        (* 50 innerRowIndex)
                        (* 50 rowIndex)))))))
              (recur (+ 1 innerRowIndex) (drop 1 tileRow)))))
        (recur (+ 1 rowIndex) (drop 1 tiles))))))

;TODO clean up some of the do blocks here is also probably a good idea
(defn map-load-paint-terrain [terrain-map]
  "paints terrain like doors to the canvas"
  (loop [rowIndex 0
         tiles terrain-map]
    (if (> (count tiles) 0)
      (do
        (loop [innerRowIndex 0
               tileRow (nth tiles 0)]
          (if (> (count tileRow) 0)
            (do
              (if (> (count (distinct (nth tileRow 0))) 0)
                (loop [terrainObj (distinct (nth tileRow 0))]
                  (if (> (count terrainObj) 0)
                    (do
                      (let [imgObj (js/Image.)
                            imgSrc (get-tile-value-terrain-load (nth terrainObj 0))
                            canvas (.getElementById js/document "Canvas")
                            ctx (.getContext canvas "2d")]
                        (if (str/includes? imgSrc "door")
                          (do
                            (aset imgObj "src" (str "./tiles/terrain/"imgSrc".png"))
                            (aset imgObj "onload" (fn []
                              (if (str/includes? imgSrc "door_tall")
                                (.drawImage ctx imgObj
                                            (- (* 50 innerRowIndex) 5)
                                            (+ (* 50 rowIndex) 12))
                                (.drawImage ctx imgObj
                                            (+ (* 50 innerRowIndex) 12)
                                            (- (* 50 rowIndex) 5))))))
                          (do
                            (aset imgObj "src" (str "./tiles/terrain/"imgSrc".jpg"))
                            (aset imgObj "onload" (fn []
                              (.drawImage ctx imgObj
                                (* 50 innerRowIndex)
                                (- (* 50 rowIndex) 2)))))))
                      (recur (drop 1 terrainObj))))))
              (recur (+ 1 innerRowIndex) (drop 1 tileRow)))))
      (recur (+ 1 rowIndex) (drop 1 tiles))))))

(defn clear-canvas []
  "clears, redraws lines, and resets our  state atoms"
  (let [canvas (.getElementById js/document "Canvas")
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 3000 3000))
  (draw-canvas-lines)
  (reset! canvas-rep (generate-canvas-rep "tile"))
  (reset! canvas-terrain-rep (generate-canvas-rep "terrain"))
  (swap! canvas-properties conj {:loaded-map-name nil}))


(defn handle-on-map-load [loaded-map]
  "handles painting the loaded map to the canvas"
  ; TODO we also need to reset and re-draw the map lines or it holds over
  (clear-canvas)
  (map-load-paint-tiles (:tile-state loaded-map))
  (map-load-paint-terrain (:terrain-state loaded-map))
  (reset! canvas-rep (:tile-state loaded-map))
  (reset! canvas-terrain-rep (:terrain-state loaded-map))
  (swap! canvas-properties conj {:loaded-map-name (:name loaded-map)}))


(defn Stage [loaded-map view-state]
  (reagent/create-class                 ;; <-- expects a map of functions
    {:display-name  "canvas"      ;; for more helpful warnings & errors

      :component-did-mount               ;; the name of a lifecycle function
        (fn [this]
          (render-canvas))

       :component-did-update              ;; the name of a lifecycle function
        (fn [this old-argv]                ;; reagent provides you the entire "argv", not just the "props"
        )

        ;; other lifecycle funcs can go in here
        :reagent-render        ;; Note:  is not :render
         (fn [loaded-map view-state]           ;; remember to repeat parameters
          [:div.Stage
            (if @loaded-map
              (do
                (handle-on-map-load @loaded-map)
                (reset! loaded-map nil)))
            [Controls canvas-properties view-state clear-canvas]
            [SaveOverlay (:show-save-overlay @canvas-properties) canvas-rep canvas-terrain-rep (:loaded-map-name @canvas-properties)]
            [:div.canvasParent
              [:canvas#Canvas {:width "3000px" :height "3000px"
                               :on-mouseDown #((do (start-paint) (paint-to-canvas (-> %)))) ; needed so a single click still works
                               :on-mouseUp #(end-paint)
                               :on-mouseMove #(paint-to-canvas (-> %))
                               :on-touch-start #((do (start-paint) (paint-to-canvas (-> %))))
                               :on-touch-end  #(end-paint)
                               :on-touch-move #(paint-to-canvas (-> %))}]]])}))
