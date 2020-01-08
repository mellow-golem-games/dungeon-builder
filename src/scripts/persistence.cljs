(ns dungeon-builder.scripts.persistence
  (:require ["localforage" :as localforage]))
; Handles saving and loading of the files


(defn save-map [name tile-state terrain-state]
  "Takes our map name state and saves it localstorage/SqlLite")

(defn load-map [name]
  "Loads a given map by name")