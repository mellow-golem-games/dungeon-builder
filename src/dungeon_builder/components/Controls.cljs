(ns dungeon-builder.components.Controls
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.components.Walls :refer [Walls]]))

(defn pause-zoom [props]
  (swap! props conj {:paint-mode true})
  (.pause (:panRef @props)))

(defn resume-zoom [props]
  (swap! props conj {:paint-mode false :currentTile "pan"})
  (.resume (:panRef @props)))

(defn update-current-tile [props name type]
  (pause-zoom props)
  (swap! props conj {:currentTile name :tileType type}))

(defn toggle-walls [control-settings bool]
  (swap! control-settings conj {:walls bool}))

(defn Controls [canvas-properties]
  (let [control-settings (atom {:walls false})]
    (fn []
      [:div.Controls
        [Walls update-current-tile canvas-properties control-settings toggle-walls]
        [:img {:class (if (:paint-mode @canvas-properties) "active")
               :src "../tiles/basic/tile.jpg" :on-click #(toggle-walls control-settings true)}]
        [:img {:class (if (= (:currentTile @canvas-properties) "pan") "active")
               :style {:width "50px" :height "50px"}
               :src "../dragon.jpg" :on-click #(resume-zoom canvas-properties)}]]))) ; dope placeholder