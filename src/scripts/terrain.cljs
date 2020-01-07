(ns dungeon-builder.scripts.terrain
  (:require [clojure.string :as str]))
; functions for drawing terrain objects on the canvas


(defn get-terrain-value [type]
  "returns a numerical representation of the wall/terrain type to save to atom rep for load/save"
  (cond
    (= type "small_wall")      1
    (= type "small_wall_side") 2
    (= type "door_tall")       3
    (= type "door_long")       4))


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


(defn draw-terrain-wall [ctx event imgObj canvas-properties]
  "draws the walls onto existing tiles - treated as terrain for re-draw purposes"
  (print "test")

  (aset imgObj "src" (str "../tiles/terrain/"(:currentTile canvas-properties)".jpg"))

  (aset imgObj "onload" (fn []
    (.drawImage ctx imgObj
      (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50))
      (- (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50)) 2))
  )))