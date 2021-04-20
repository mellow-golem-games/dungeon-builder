(ns dungeon_builder.components.LoadOverlay
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon_builder.components.Confirmation :refer [Confirmation]]
            [dungeon_builder.scripts.persistence :as persistence]))

(defn load-current-maps [mapState]
  (.then (persistence/load-maps) (fn [value]
                                  (reset! mapState (js->clj value :keywordize-keys true)))))

(defn handle-load-map [map loaded-map-atom hide-home-view]
  (reset! loaded-map-atom map)
  (hide-home-view))

(defn delete-map [name currentMaps] ; pass current maps so the handler can update the ui
  (persistence/delete-by-name name currentMaps))

(defn handle-on-confirm [mapName currentMaps]
  (delete-map mapName currentMaps))

(defn handle-on-reject [])

(defn LoadOverlay [active loaded-map-atom hide-home-view currentMaps]
  (let [mapName (atom "")
        showConfirmation (atom false)]
    (fn [active]
      [:div.LoadOverlay {:class (if @active "active" "")}
        [Confirmation showConfirmation (partial handle-on-confirm @mapName currentMaps) handle-on-reject]
        [:p.LoadOverlay__close {:on-click #(reset! active false)}"close X"]
        [:h2 "Your Maps"]
        (for [map @currentMaps]
          [:div.MapLoadWrapper {:key (:name map)}
            [:p.MapButtonDelete {:on-click #(comp (reset! mapName (:name map))(reset! showConfirmation true))} "x"]
            [:p.MapButton {:on-click #(handle-load-map map loaded-map-atom hide-home-view)} (:name map)]])])))