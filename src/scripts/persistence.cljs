(ns dungeon_builder.scripts.persistence
  (:require [dungeon_builder.components.toast :as fancy-alert]))
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

(defn remove-item-to-update[current name]
  "user to remove the item that is being updated in the save"
  (filter (fn [map]
    (if (= (:name map) name)
      false
      true)) current))

(defn delete-by-name [name local-maps]
  (.then (get-current-state) (fn [value]
    (let [currentValue (js->clj value :keywordize-keys true)]
      (.then (.setItem (.-localforage js/window) "mgg-dungeonbuilder-maps"
                         (clj->js (remove-item-to-update currentValue name))
           (fn [result]
            (.then (get-current-state) (fn [value]
              (reset! local-maps (js->clj value :keywordize-keys true)))))))))))

; TODO we need to make the terrain state unique either here or on population
(defn save-map [name tile-state terrain-state loaded-map-name currentMaps]
  "Takes our map name state and saves it localstorage/SqlLite"
  (.then (get-current-state) (fn [value]
    (let [currentValue (js->clj value :keywordize-keys true)]
      (if (or (is-name-unique name currentValue) (= name loaded-map-name)) ; if loaded map is the same we can still edit it
        (.then (.setItem (.-localforage js/window) "mgg-dungeonbuilder-maps"
                           (clj->js (conj (remove-item-to-update currentValue name) {:name name :tile-state @tile-state :terrain-state @terrain-state}))
           (fn [result]
             ; TODO cleanup
             (.then (get-current-state) (fn [value]
               (reset! currentMaps (js->clj value :keywordize-keys true))
               (fancy-alert/fancy-alert
                 {:text "Map Saved" :hideAfterN true
                  :styles {:background "#4aa651;" :border "1px solid #4aa651;" :z-index "999;" :color "white;"}}))))) true)
        (do
         (fancy-alert/fancy-alert
          {:text "Name Not Unique" :hideAfterN true
           :styles {:background "#cc4a56;" :border "1px solid #cc4a56;" :z-index "999;" :color "white;"}})
          false))))))

(defn load-maps []
  "Loads a given map by name"
  (get-current-state))


(defn set-preview [value]
  (.setItem (.-localforage js/window) "mgg-dungeonbuilder-previews" value))


(defn load-previews []
  (.getItem (.-localforage js/window) "mgg-dungeonbuilder-previews"))

