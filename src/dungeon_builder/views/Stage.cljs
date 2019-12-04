(ns dungeon-builder.views.Stage
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.components.Controls :refer [Controls]]
            [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]))

(def scale 1)
(def canvas-properties
  (atom {:painting false
         :panning false
         :last-panX nil
         :last-panY nil
         :current-xPan 0
         :current-yPan 0
         :zoom 1}))

; END SETUP VARIABLES

(defn handle-zoom [event]
  (let [currentZoom (:zoom @canvas-properties)]
    (if ( > (.-deltaY event) 0)
      (swap! canvas-properties conj {:zoom (+ currentZoom 0.1)})
      (swap! canvas-properties conj {:zoom (- currentZoom 0.1)}))))


; END CANVAS MOVEMENT FUNCTIONS


(defn start-pan []
  (swap! canvas-properties conj {:panning true}))

(defn end-pan []
  (swap! canvas-properties conj {:panning false}))

(defn paint-to-canvas [event]
  (def canvas (.getElementById js/document "Canvas"))
  (def ctx (.getContext canvas "2d"))

  (let [imgObj (js/Image.)]
    (aset imgObj "src" "../tile.jpg")
    (aset imgObj "onload" (fn []
      (.drawImage ctx imgObj (* scale (.-clientX event)) (* scale (.-clientY event)))))))


(defn pan-canvas [event]
  (js/console.log (.-clientX event))
  (print "panning")
  (if (:last-pan @canvas-properties)
    (do
     ; update our translate with difference
     (swap! canvas-properties conj {:current-xPan (+ (:last-panX @canvas-properties) (.-clientX event))})
     (swap! canvas-properties conj {:current-yPan (+ (:last-panY @canvas-properties) (.-clientY event))})
     (swap! canvas-properties conj {:last-panX (.-clientX event) :last-panY (.-clientY event)}))
    (swap! canvas-properties conj {:last-panX (.-clientX event) :last-panY (.-clientY event)})) ; this is our initial pan
)

(defn handle-canvas-draw [event]
  ; TODO we should set these up in an atom or something on init
  (.persist event)
  (if (:painting @canvas-properties)
    (paint-to-canvas event)
    (if (:panning @canvas-properties)
      (pan-canvas event))))

(defn Stage []
  [:div.Stage

    [:canvas#Canvas {:width "3000px" :height "3000px"
                     :style {:zoom (:zoom @canvas-properties) :transform (str "translate("(:current-xPan @canvas-properties)","(:current-yPan @canvas-properties)")")}
                     :on-wheel #(handle-zoom (-> %))
                     :on-mouseDown #(start-pan)
                     :on-mouseUp #(end-pan)
                     :on-mouseMove #(handle-canvas-draw (-> %))}]])
