(ns dungeon-builder.core
    (:require [reagent.core :as reagent :refer [atom]]
              [dungeon-builder.views.page :as page]
              [dungeon-builder.views.Canvas :refer [Canvas]]
              [dungeon-builder.services.state.global :refer [app-state]]
              [dungeon-builder.services.state.dispatcher :refer [handle-state-change]]))

(enable-console-print!)

(defn core []
  [:div.Main
    [Canvas]])

(reagent/render-component [core]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
