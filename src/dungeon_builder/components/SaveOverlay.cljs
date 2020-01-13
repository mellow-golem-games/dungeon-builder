(ns dungeon-builder.components.SaveOverlay
  (:require [dungeon-builder.scripts.persistence :as persistence]))

(defn check-name [name]
  "Checks that the name exists and is unique")

(defn handle-save [name tile-state terrain-state]
  "TODO probably some UI cleanup here so we make it separate from the actual save"
  (persistence/save-map name tile-state terrain-state))

(defn SaveOverlay [active tile-state terrain-state]
  (let [name (atom "")] ; TODO Think we can safely remove
    (fn []
      [:div.saveOverlay {:class (if active "active" "")}
        [:input {:placeholder "Map Name" :on-change #(reset! name (-> % .-target .-value))}]
        [:button {:on-click #(handle-save @name tile-state terrain-state)} "Save"]])))