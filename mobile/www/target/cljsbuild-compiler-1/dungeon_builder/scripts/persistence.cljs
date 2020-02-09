(ns dungeon_builder.scripts.persistence)
; Handles saving and loading of the files

(defrecord map-rep [name tile-state terrain-state])

(defn get-current-state []
  (.getItem (.-localforage js/window) "mgg-dungeonbuilder-maps"))


(defn is-name-unique [name current]
  (let [count-of (count
    (filter (fn [map]
      (if (= (:name map) name)
        true
        false)) current))]
    (if (= count-of 0)
      true
      false)))

; TODO we need to make the terrain state unique either here or on population
(defn save-map [name tile-state terrain-state]
  "Takes our map name state and saves it localstorage/SqlLite"
  (.then (get-current-state) (fn [value]
    (let [currentValue (js->clj value :keywordize-keys true)]
      (if (is-name-unique name currentValue)
        (.then (.setItem (.-localforage js/window) "mgg-dungeonbuilder-maps"
                           (clj->js (conj currentValue {:name name :tile-state @tile-state :terrain-state @terrain-state}))
           (fn [result]
             ; TODO cleanup
             (print result))))
        (js/alert "Name Not Unique"))))))

(defn load-maps []
  "Loads a given map by name"
  (get-current-state))
