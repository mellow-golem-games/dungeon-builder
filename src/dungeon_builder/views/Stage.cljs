(ns dungeon-builder.views.Stage
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.components.Controls :refer [Controls]]
            [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]
            ["panzoom" :as panzoom]))

(def canvas-properties
  (atom {:panRef nil
         :painting false
         :paint-mode true
         :currentTile "pan"}))

(defn start-paint []
  (if (:paint-mode @canvas-properties)
    (swap! canvas-properties conj {:painting true})))

(defn end-paint []
  (swap! canvas-properties conj {:painting false}))

(defn paint-to-canvas [event]
  (if (:painting @canvas-properties)
  (do
    (.persist event)
    (def canvas (.getElementById js/document "Canvas")) ; TODO we should probably save a ref to these in the atom
    (def ctx (.getContext canvas "2d"))
    (let [imgObj (js/Image.)]
      (aset imgObj "src" (str "../"(:currentTile @canvas-properties)".jpg"))
      (aset imgObj "onload" (fn []
        (.drawImage ctx imgObj
                               (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom @canvas-properties)) 50))
                               (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom @canvas-properties)) 50)))))))))


(defn render-canvas []
  (let [zoomElem (.querySelector js/document "#Canvas")
        ctx (.getContext zoomElem "2d")]
    (def panHandler (panzoom zoomElem (clj->js {:maxZoom 1 :minZoom 0.3
                                            :minScale 1
                                            :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                            :transformOrigin {:x 0.5 :y 0.5}
                                            :bounds true})))
    (swap! canvas-properties conj {:panRef panHandler})
    (.zoomAbs panHandler -1500 -1500 0.75)

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


(defn Stage []
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
         (fn []           ;; remember to repeat parameters
          [:div.Stage
            [Controls canvas-properties]
            [:div.canvasParent
              [:canvas#Canvas {:width "3000px" :height "3000px"
                               :on-mouseDown #((do (start-paint) (paint-to-canvas (-> %)))) ; needed so a single click still works
                               :on-mouseUp #(end-paint)
                               :on-mouseMove #(paint-to-canvas (-> %))}]]])}))


