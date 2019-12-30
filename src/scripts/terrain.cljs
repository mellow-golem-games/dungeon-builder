(ns dungeon-builder.scripts.terrain)
; functions for drawing terrain objects on the canvas


(defn draw-door [ctx event imgObj canvas-properties]

  (aset imgObj "src" (str "../tiles/terrain/"(:currentTile canvas-properties)".png"))
  (aset imgObj "onload" (fn []
    (.drawImage ctx imgObj
                (- (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (.-clientX event)) (:zoom canvas-properties)) 50)) 5)
                (+ (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (.-clientY event)) (:zoom canvas-properties)) 50)) 12))
  ))
)