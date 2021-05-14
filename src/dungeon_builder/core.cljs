(ns dungeon_builder.core
    (:require [reagent.core :as reagent :refer [atom]]
              [dungeon_builder.components.preview.new2 :refer [New2]]
              [dungeon_builder.views.Home :refer [Home]]
              [dungeon_builder.views.Stage :refer [Stage]]
              [dungeon_builder.services.state.global :refer [app-state]]
              [dungeon_builder.services.state.dispatcher :refer [handle-state-change]]
              [dungeon_builder.scripts.persistence :as persistence]))

(def CURRENT_PREVIEW_VALUE "true2")

(enable-console-print!)

; we'll likely have to modify this if we add more of these
(defn update-preview [previews-show]
  (reset! previews-show CURRENT_PREVIEW_VALUE)
  (persistence/set-preview CURRENT_PREVIEW_VALUE))


; (.initializeTouchEvents js/React true)

(def view-state (atom "home"))
(def loaded-map-atom (atom nil)) ; we use this to load a map and then force it down to the Stage
(def currentMaps (atom nil)) ; we use this to hold the maps a user has saved, we need it here so we can update it on save and pass it down to the load overlay
(def previews-shown (atom nil))

(.then (persistence/load-previews) (fn [value]
                                     (reset! previews-shown (js->clj value :keywordize-keys true))))

(.then (persistence/load-maps) (fn [value]
                                (if (not value)
                                  (update-preview previews-shown))
                                (reset! currentMaps (js->clj value :keywordize-keys true))))

(defn check-preview-value [preview-value]
  (or (not preview-value) (not (= preview-value CURRENT_PREVIEW_VALUE))))



(defn core []
  [:div.Main
    ; [New2 (if (and (check-preview-value @previews-shown) @currentMaps) true false) update-preview previews-shown] ; only existing users probably care here
    [Home  loaded-map-atom view-state currentMaps]
    [Stage loaded-map-atom view-state currentMaps]])

(reagent/render-component [core]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

