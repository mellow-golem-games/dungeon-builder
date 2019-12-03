(ns dungeon-builder.views.Stage
  (:require [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]))

(def canvas-properties (atom {:painting false}))

(defn set-draw-mode [value]
  (swap! canvas-properties conj {:painting value}))

(defn handle-canvas-draw [event]
  ; TODO we should set these up in an atom or something on init

  (if (:painting @canvas-properties)
    (do
      (.persist event)
      (def canvas (.getElementById js/document "Canvas"))
      (def ctx (.getContext canvas "2d"))

      (let [imgObj (js/Image.)]
        (aset imgObj "src" "../tile.jpg")
        (aset imgObj "onload" (fn []
          (.drawImage ctx imgObj (* 2 (.-clientX event)) (* 2 (.-clientY event)))))))))

(defn Stage []
  [:div.Stage
    [:canvas#Canvas {:width "1200px" :height "800px"
                     :on-click #(set-draw-mode true)
                     :on-mouseMove #(handle-canvas-draw (-> %))}]])
