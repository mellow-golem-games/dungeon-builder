(ns dungeon_builder.components.LoadOverlay
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon_builder.scripts.persistence :as persistence]))

(defn load-current-maps [mapState]
  (.then (persistence/load-maps) (fn [value]
    (reset! mapState (js->clj value :keywordize-keys true)))))

(defn handle-load-map [map loaded-map-atom hide-home-view]
  (reset! loaded-map-atom map)
  (hide-home-view))

(defn delete-map [name]
  (persistence/delete-by-name name))

(defn LoadOverlay [active loaded-map-atom hide-home-view]
  (let [name (atom "")
        currentMaps (atom nil)]
    (load-current-maps currentMaps)
    (fn [active]
      [:div.LoadOverlay {:class (if @active "active" "")}
        [:p.LoadOverlay__close {:on-click #(reset! active false)}"close X"]
        [:h2 "Your Maps"]
          (for [map @currentMaps]
            [:div.MapLoadWrapper {:key (:name map)}
              [:p.MapButtonDelete {:on-click #(delete-map (:name map))} "x"]
              [:p.MapButton {:on-click #(handle-load-map map loaded-map-atom hide-home-view)} (:name map)]])])))