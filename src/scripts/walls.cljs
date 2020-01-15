(ns dungeon-builder.scripts.walls)
; functions that handle the wall tile we're going to place
; determines where floors our and returns bools based on their current positiions

(defn check-left [y x canvas-rep ]
  (if (and
        (>= (- x 1) 0)
        (= (:type (nth (nth canvas-rep y) (- x 1))) 1))
          true
          false))

(defn check-right [y x canvas-rep ]
  (if (and
        (< (+ x 1) 60)
        (= (:type (nth (nth canvas-rep y) (+ x 1))) 1))
          true
          false))

(defn check-top [y x canvas-rep ]
  (if (and
        (>= (- y 1) 0)
        (= (:type (nth (nth canvas-rep (- y 1)) x)) 1))
          true
          false))

(defn check-bottom [y x canvas-rep ]
  (if (and
        (< (+ y 1) 60)
        (= (:type (nth (nth canvas-rep (+ y 1)) x)) 1))
          true
          false))


(defn check-tright-corner [y x canvas-rep]
  (if (and
        (< (+ y 1) 60)
        (>= (- x 1) 0)
        (= (:type (nth (nth canvas-rep (+ y 1)) (- x 1))) 1))
    true
    false))

(defn check-bright-corner[y x canvas-rep]
  (if (and
        (>= (- y 1) 0)
        (>= (- x 1) 0)
        (= (:type (nth (nth canvas-rep (- y 1)) (- x 1))) 1))
    true
    false))

(defn check-tleft-corner [y x canvas-rep]
  (if (and
        (< (+ y 1) 60)
        (< (+ x 1) 60)
        (= (:type (nth (nth canvas-rep (+ y 1)) (+ x 1))) 1))
    true
    false))

(defn check-bleft-corner [y x canvas-rep]
  (if (and
        (>= (- y 1) 0)
        (< (+ x 1) 60)
        (= (:type (nth (nth canvas-rep (- y 1)) (+ x 1))) 1))
    true
    false))