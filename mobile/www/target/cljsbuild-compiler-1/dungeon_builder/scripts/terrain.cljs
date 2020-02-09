(ns dungeon_builder.scripts.terrain
  (:require [clojure.string :as str]
            [dungeon_builder.scripts.position :refer [get-x-position get-y-position]]))
; functions for drawing terrain objects on the canvas



(defn draw-door [ctx event imgObj canvas-properties update-canvas-rep]
  ; TODO we need to change the position based on which door we have

  (aset imgObj "src" (str "./tiles/terrain/"(:currentTile canvas-properties)".png"))
  (aset imgObj "onload" (fn []
      (if (str/includes? (:currentTile canvas-properties) "door_tall")
        (.drawImage ctx imgObj
                    (- (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom canvas-properties)) 50)) 5)
                    (+ (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom canvas-properties)) 50)) 12))
        (.drawImage ctx imgObj
                    (+ (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom canvas-properties)) 50)) 12)
                    (- (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom canvas-properties)) 50)) 5)))
        (update-canvas-rep
          (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom canvas-properties)) 50))
          (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom canvas-properties)) 50))))))


(defn draw-terrain-wall [ctx event imgObj canvas-properties update-canvas-rep]
  "draws the walls onto existing tiles - treated as terrain for re-draw purposes"

  (aset imgObj "src" (str "./tiles/terrain/"(:currentTile canvas-properties)".jpg"))

  (aset imgObj "onload" (fn []
    (.drawImage ctx imgObj
      (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50))
      (- (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50)) 2))
    (update-canvas-rep
      (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50))
      (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50))))))