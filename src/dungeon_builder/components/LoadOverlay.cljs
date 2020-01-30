(ns dungeon-builder.components.LoadOverlay
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.scripts.persistence :as persistence]))

(defn load-current-maps [mapState]
  (.then (persistence/load-maps) (fn [value]
    (reset! mapState (js->clj value :keywordize-keys true)))))

(defn handle-load-map [map loaded-map-atom hide-home-view]
  (reset! loaded-map-atom map)
  (hide-home-view))

(defn LoadOverlay [active loaded-map-atom hide-home-view]
  (let [name (atom "")
        currentMaps (atom nil)]
    (load-current-maps currentMaps)
    (fn [active]
      [:div.LoadOverlay {:class (if active "active" "")}
        [:h2 "Your Maps"]
          (for [map @currentMaps]
            [:p {:key (:name map) :on-click #(handle-load-map map loaded-map-atom hide-home-view)} (:name map)])])))