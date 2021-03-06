(ns dungeon_builder.views.Home
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon_builder.components.LoadOverlay :refer [LoadOverlay]]))

(defn new-map [view-state]
  (reset! view-state "stage"))

(defn hide-home-view [show-load-overlay view-state]
  (reset! view-state false)
  (reset! show-load-overlay false))

(defn Home [loaded-map-atom view-state currentMaps]

  (let [showLoadOverlay (atom false)]
    (fn []
      [:div.Home {:class (if (= "home" @view-state) "active" "")}
        [:div.Home-content-wrapper
          [:h1 "Dungeon Maker"]
        [:div.Home-button-wrapper
          [:button {:on-click #(new-map view-state)} "New Map"]
          [:button {:on-click #(reset! showLoadOverlay true)} "Load Map"]]]
        [LoadOverlay showLoadOverlay loaded-map-atom (partial hide-home-view showLoadOverlay view-state) currentMaps]])))