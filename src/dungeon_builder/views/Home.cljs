(ns dungeon-builder.views.Home
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.components.LoadOverlay :refer [LoadOverlay]]))

(defn new-map [view-state]
  (reset! view-state "stage"))

(defn hide-home-view [show-load-overlay view-state]
  (reset! view-state false)
  (reset! show-load-overlay false))

(defn Home [view-state loaded-map-atom]

  (let [showLoadOverlay (atom false)]
    (fn []
      [:div.Home {:class (if (= "home" @view-state) "active" "")}
        [:div {:style {:width "100%"}}
          [:h1 "Big 'Ol Title Text"]
        [:div
          [:button {:on-click #(new-map view-state)} "New Map"]
          [:button {:on-click #(reset! showLoadOverlay true)} "Load Map"]]]
        [LoadOverlay @showLoadOverlay loaded-map-atom (partial hide-home-view showLoadOverlay view-state)]])))