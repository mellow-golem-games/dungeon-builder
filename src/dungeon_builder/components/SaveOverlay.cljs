(ns dungeon_builder.components.SaveOverlay
  (:require  [reagent.core :as reagent :refer [atom]]
             [dungeon_builder.scripts.persistence :as persistence]))

(defn handle-save [name tile-state terrain-state loaded-map-name currentMaps onSave]
  "TODO probably some UI cleanup here so we make it separate from the actual save"
  (.then (persistence/save-map name tile-state terrain-state loaded-map-name currentMaps)
    (fn [value]
      (if value
        (onSave name)))))


(defn get-placeholder [loaded-map-name]
  (if loaded-map-name
    loaded-map-name
    "Map Name"))

(defn SaveOverlay [active tile-state terrain-state loaded-map-name currentMaps onSave]
    (fn [active tile-state terrain-state loaded-map-name]
      (let [name (atom loaded-map-name)]
        [:div.saveOverlay {:class (if active "active" "")}
          [:input {:placeholder (get-placeholder loaded-map-name) :default-value loaded-map-name :on-change #(reset! name (-> % .-target .-value))}]
          [:button {:on-click #(handle-save @name tile-state terrain-state loaded-map-name currentMaps onSave)} "Save"]])))