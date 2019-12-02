(ns dungeon-builder.views.Canvas
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]
            [dungeon-builder.components.Controls :refer [Controls]]
            ["panzoom" :as panzoom]))

(def current-paint (atom [{:name "tile" :x "41px" :y "41px"}
                          {:name "wall_tile" :x "91px" :y "91px"}]))


; (let )
;  var img=new Image();
;     img.src=url;

(def canvas-properties (atom {:panRef nil
                              :fillColor "black"
                              :zoom 0.5
                              :paint false
                              :currentTile "tile"}))

(defn handle-on-mouseDown []
  (swap! canvas-properties conj {:paint true}))

(defn handle-on-mouseUp []
  (swap! canvas-properties conj {:paint false}))

(defn render-canvas []
  (def zoomElem (.querySelector js/document "#Canvas"))
  (if zoomElem
    (do
      (def panHandler (panzoom zoomElem (clj->js {:maxZoom 1 :minZoom 0.25
                                              :minScale 1
                                              :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                              :transformOrigin {:x 0.5 :y 0.5}
                                              :bounds true})))

    ; (.zoomAbs panHandler -1500 -1500 0.5)
    (swap! canvas-properties conj {:panRef panHandler}) ; save ref to instance so we can pause later
    (.zoomAbs panHandler 0 0 0.5) ; TODO remove after testing
    (.on panHandler "transform" (fn [e] ; we need to pull the zoom in order to adjust the onclick coords
      (swap! canvas-properties conj {:zoom (.-scale (.getTransform e))}))))))

(defn get-tile-position [pos offset] ; offset is always the negitive amount moved
  (let [actual-pos (/ (+ pos (* -1 offset)) (:zoom @canvas-properties))]
    (cond
      (< actual-pos 41) 0
      (< actual-pos 91) 41
      :else (+ 41 (* (quot (- actual-pos 41) 50) 50)))))

(defn handle-canvas-click [event]
  ; NOTE the -75 for each of these is based on the header height - if we change that this needs to change as well
  ; should probably define that as a var somewhere to make it easier
  (if (and (not= (.-nodeName (.-target event)) "IMG") (:paint @canvas-properties)) ; only on canvas clicks - we can handle images different if the src changes
    (let [xEvent (get-tile-position (.-clientX event) (.-x (.getBoundingClientRect (.-target event))))
          yEvent (get-tile-position (- (.-clientY event) 75) (- (.-y (.getBoundingClientRect (.-target event))) 75))]
          (swap! current-paint conj {:name "tile" :x (str xEvent "px") :y (str yEvent "px")}))
    ;TODO we can handle img src changes or dom removal here
  ))

(defn Canvas-Component [active]
  (reagent/create-class                 ;; <-- expects a map of functions
    {:display-name  "canvas"      ;; for more helpful warnings & errors

      :component-did-mount               ;; the name of a lifecycle function
        (fn [this]
          (render-canvas)
          (println "component-did-mount")) ;; your implementation

       :component-did-update              ;; the name of a lifecycle function
        (fn [this old-argv]                ;; reagent provides you the entire "argv", not just the "props"
          )

        ;; other lifecycle funcs can go in here
        :reagent-render        ;; Note:  is not :render
         (fn [active]           ;; remember to repeat parameters
          [:div.Canvas
            [Controls canvas-properties]
            [:div.CanvasParent
              [:div#Canvas {:on-mouseMove #(handle-canvas-click (-> % ))
                            :on-mouseDown #(handle-on-mouseDown)
                            :on-mouseUp #(handle-on-mouseUp)}
                (for [image @current-paint]
                  [:img {:src (str "../"(:name image) ".jpg") :key (rand-int 1000000) :style {:position "absolute" :left (:x image) :top (:y image) :width "50px" :height "50px"}}])
                ]]
            ])}))

; TODO we can probably just work with the abpve canvas - remove this and import the component
(defn Canvas [active]
   [Canvas-Component active])