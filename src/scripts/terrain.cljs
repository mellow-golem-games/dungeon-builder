(ns dungeon-builder.scripts.terrain
  (:require [clojure.string :as str]))
; functions for drawing terrain objects on the canvas




(defn draw-door [ctx event imgObj canvas-properties]
  ; TODO we need to change the position based on which door we have

  (aset imgObj "src" (str "../tiles/terrain/"(:currentTile canvas-properties)".png"))
  (aset imgObj "onload" (fn []
      (if (str/includes? (:currentTile canvas-properties) "door_tall")
        (.drawImage ctx imgObj
                    (- (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50)) 5)
                    (+ (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50)) 12))
        (.drawImage ctx imgObj
                    (+ (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50)) 12)
                    (- (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50)) 5)))
  )))