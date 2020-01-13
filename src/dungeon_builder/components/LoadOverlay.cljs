(ns dungeon-builder.components.LoadOverlay
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.scripts.persistence :as persistence]))

(defn load-current-maps [mapState]
  (.then (persistence/load-maps) (fn [value]
    (reset! mapState (js->clj value :keywordize-keys true)))))

(defn LoadOverlay [active]
  (let [name (atom "")
        currentMaps (atom nil)] ; TODO Think we can safely remove
    (load-current-maps currentMaps)
    (fn [active]
      [:div.LoadOverlay {:class (if active "active" "")}
        [:h2 "Your Maps"]
          (for [map @currentMaps]
            [:p {:key (:name map)} (:name map)])])))