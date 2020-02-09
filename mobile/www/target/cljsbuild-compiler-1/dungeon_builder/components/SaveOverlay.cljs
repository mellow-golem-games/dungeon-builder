(ns dungeon_builder.components.SaveOverlay
  (:require  [reagent.core :as reagent :refer [atom]]
             [dungeon_builder.scripts.persistence :as persistence]))

(defn handle-save [name tile-state terrain-state]
  "TODO probably some UI cleanup here so we make it separate from the actual save"
  (persistence/save-map name tile-state terrain-state))

(defn SaveOverlay [active tile-state terrain-state]
  (let [name (atom "")]
    (fn [active tile-state terrain-state]
      [:div.saveOverlay {:class (if active "active" "")}
        [:input {:placeholder "Map Name" :on-change #(reset! name (-> % .-target .-value))}]
        [:button {:on-click #(handle-save @name tile-state terrain-state)} "Save"]])))