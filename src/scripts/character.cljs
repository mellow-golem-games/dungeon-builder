(ns dungeon_builder.scripts.character
  (:require [clojure.string :as str]
            [dungeon_builder.scripts.position :refer [get-x-position get-y-position]]))
; functions for drawing characters objects on the canvas

(defn draw-character [ctx event imgObj canvas-properties update-canvas-rep]
  ; TODO we need to change the position based on which door we have

  (aset imgObj "src" (str "./tiles/characters/"(:currentTile canvas-properties)".png"))
  (aset imgObj "onload" (fn []
                         (.drawImage ctx imgObj
                                     (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom canvas-properties)) 50))
                                     (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom canvas-properties)) 50)))
                         (update-canvas-rep
                           (* 50 (quot (/ (+ (* -1 (.-x (.getBoundingClientRect (.-target event)))) (get-x-position event)) (:zoom canvas-properties)) 50))
                           (* 50 (quot (/ (+ (* -1 (.-y (.getBoundingClientRect (.-target event)))) (get-y-position event)) (:zoom canvas-properties)) 50))))))
