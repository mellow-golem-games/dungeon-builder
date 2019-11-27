(ns dungeon-builder.views.Canvas
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]
            [dungeon-builder.components.Controls :refer [Controls]]
            ["panzoom" :as panzoom]))

(def current-paint (atom [{:name "tile" :x "42px" :y "42px"}
                          {:name "wall_tile" :x "92px" :y "92px"}
]))
(def canvas-properties (atom {:ctx nil
                              :fillColor "black"
                              :zoom 0.5}))

; we make a panzoom elemnt that is the size we want
; by default it has drag to off, this can be changed by using the drag tool
; turns off when selecting a tile type
; should store all of this in a big array as we need to be able to adjust the tile based on neighbors - edge tiles are different from interior tiles


;TODO We need to figure out why it zooms weird
; TRY playing with the sizing of the grid - probably do something


(defn render-canvas []
  (def zoomElem (.querySelector js/document "#Canvas"))
  (if zoomElem
    (do
      (def panHandler (.zoomAbs (panzoom zoomElem (clj->js {:maxZoom 1 :minZoom 0.25
                                              :minScale 1
                                              :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                              :transformOrigin {:x 0.5 :y 0.5}
                                              :bounds true})) -1500 -1500 0.5))


    ; (.on panHandler "transform" (fn [e] (print e)))
    ; (.on panHandler "zoomed" (fn [e] ; we need to pull the zoom in order to adjust the onclick coords
    ;   (js/console.log e)))


      ; (def panHandler (panzoom zoomElem (clj->js {:maxZoom 1 :minZoom 0.1
      ;                                         :minScale 1
      ;                                         :boundsPadding 1 ; it multiplies by this is in the code for panzoom
      ;                                         ; :transformOrigin {:x 0.5 :y 0.5}
      ;                                         :bounds true})))
      ; (.moveTo panHandler -1500, -1500)
)))

(defn get-x-position [x offset]
  (print x)
  (print offset)
  (let [actual-x (+ x offset)]
    (print actual-x)
    (cond
      (< actual-x 42) 0
      (< actual-x 92) 42
      :else (+ 42 (* (mod (- actual-x 42) 50) 50)))
  )
    ; 3 cases to watch for

    ; under 42 then its 0
    ; over 42 < 142 then it's 42
    ; greater than 92 = total - 42 % 50 * 50 + 42
  )

(defn handle-canvas-click [event]
  ; (js/console.log (.-target js/event))
  (get-x-position (.-clientX event) (.-x (.getBoundingClientRect (.-target event))))
  ; (js/console.log (.getBoundingClientRect (.-target event)))
)

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
            [Controls]
            [:div.CanvasParent
              [:div#Canvas {:on-click #(handle-canvas-click (-> % ))}
                (for [image @current-paint]
                  [:img {:src (str "../"(:name image) ".jpg") :style {:position "absolute" :left (:x image) :top (:y image) :width "50px" :height "50px"}}])
                ]]
            ])}))

; TODO we can probably just work with the abpve canvas - remove this and import the component
(defn Canvas [active]
   [Canvas-Component active])


; this.bgctx.rect(x,y,20,20);
; this.bgctx.stroke();
; this.ctx = canvas.getContext("2d");