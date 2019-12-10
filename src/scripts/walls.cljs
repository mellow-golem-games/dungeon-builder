(ns dungeon-builder.scripts.walls)


(defn check-left [y x canvas-rep ]
  (if (and
        (>= (- x 1) 0)
        (= (nth (nth canvas-rep y) (- x 1)) 1))
          true
          false))

(defn check-right [y x canvas-rep ]
  (if (and
        (< (+ x 1) 60)
        (= (nth (nth canvas-rep y) (+ x 1)) 1))
          true
          false))

(defn check-top [y x canvas-rep ]
  (if (and
        (>= (- y 1) 0)
        (= (nth (nth canvas-rep (- y 1)) x) 1))
          true
          false))

(defn check-bottom [y x canvas-rep ]
  (if (and
        (< (+ y 1) 60)
        (= (nth (nth canvas-rep (+ y 1)) x) 1))
          true
          false))


(defn check-tright-corner [y x canvas-rep]
  (if (and
        (< (+ y 1) 60)
        (>= (- x 1) 0)
        (= (nth (nth canvas-rep (+ y 1)) (- x 1)) 1))
    true
    false))

(defn check-bright-corner[y x canvas-rep]
  (if (and
        (>= (- y 1) 0)
        (>= (- x 1) 0)
        (= (nth (nth canvas-rep (- y 1)) (- x 1)) 1))
    true
    false))

(defn check-tleft-corner [y x canvas-rep]
  (if (and
        (< (+ y 1) 60)
        (< (+ x 1) 60)
        (= (nth (nth canvas-rep (+ y 1)) (+ x 1)) 1))
    true
    false))

(defn check-bleft-corner [y x canvas-rep]
  (if (and
        (>= (- y 1) 0)
        (< (+ x 1) 60)
        (= (nth (nth canvas-rep (- y 1)) (+ x 1)) 1))
    true
    false))