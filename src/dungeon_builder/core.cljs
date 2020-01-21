(ns dungeon-builder.core
    (:require [reagent.core :as reagent :refer [atom]]
              [dungeon-builder.views.Home :refer [Home]]
              [dungeon-builder.views.Stage :refer [Stage]]
              [dungeon-builder.services.state.global :refer [app-state]]
              [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]))

(enable-console-print!)

(def view-state (atom "home"))
(def loaded-map-atom (atom nil)) ; we use this to load a map and then force it down to the Stage

(defn core []
  [:div.Main
    [Home view-state loaded-map-atom]
    [Stage loaded-map-atom view-state]])

(reagent/render-component [core]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
