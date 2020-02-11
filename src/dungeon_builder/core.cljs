(ns dungeon_builder.core
    (:require [reagent.core :as reagent :refer [atom]]
              [dungeon_builder.views.Home :refer [Home]]
              [dungeon_builder.views.Stage :refer [Stage]]
              [dungeon_builder.services.state.global :refer [app-state]]
              [dungeon_builder.services.state.dispatcher :refer [handle-state-change]]
              [dungeon_builder.scripts.persistence :as persistence]))

(enable-console-print!)

; (.initializeTouchEvents js/React true)

(def view-state (atom "home"))
(def loaded-map-atom (atom nil)) ; we use this to load a map and then force it down to the Stage
(def currentMaps (atom nil)) ; we use this to hold the maps a user has saved, we need it here so we can update it on save and pass it down to the load overlay

(.then (persistence/load-maps) (fn [value]
  (reset! currentMaps (js->clj value :keywordize-keys true))))

(defn core []
  [:div.Main
    [Home  loaded-map-atom view-state currentMaps]
    [Stage loaded-map-atom view-state currentMaps]])

(reagent/render-component [core]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
