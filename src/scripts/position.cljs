(ns dungeon_builder.scripts.position)



; these two functions are needed as desktop has .-x while mobile has .x
; this discrepenecy is accounted for here, we'll figure out which one and return
; it to the draw function so it doesn't have to worry about that.
(defn get-x-position [event]
  (if (.-clientX event)
    (.-clientX event)
    (aget (aget (.-touches event) 0) "pageX")))


(defn get-y-position [event]
  (if (.-clientY event)
    (.-clientY event)
    (aget (aget (.-touches event) 0) "pageY")))