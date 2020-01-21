(ns dungeon-builder.components.Controls
  (:require [reagent.core :as reagent :refer [atom]]
            [dungeon-builder.components.Walls :refer [Walls]]))

(defn pause-zoom [props]
  (swap! props conj {:paint-mode true :currentTile ""})
  (.pause (:panRef @props)))

(defn resume-zoom [props]
  (swap! props conj {:paint-mode false :erase-mode false :currentTile "pan"})
  (.resume (:panRef @props)))

(defn update-current-tile [props name type]
  (pause-zoom props)
  (swap! props conj {:currentTile name :tileType type :erase-mode false}))

(defn toggle-walls [control-settings bool]
  (swap! control-settings conj {:walls bool}))

(defn set-erase [props]
  (pause-zoom props)
  (swap! props conj {:erase-mode true :paint-mode false}))

(defn handle-home [view-state]
  (print @view-state)
  (reset! view-state "home")
  (print @view-state))

(defn Controls [canvas-properties view-state]
  (let [control-settings (atom {:walls false})]
    (fn []
      [:div.Controls
        [:div.Controls__inner
          [Walls update-current-tile canvas-properties control-settings toggle-walls]
          [:div.ControlItem
            [:img {:class (if (:paint-mode @canvas-properties) "active")
                   :style {:width "40px" :height "40px"}
                   :src "../tiles/basic/tile.jpg" :on-click #(toggle-walls control-settings true)}]
            [:p "Tiles"]]
          [:div.ControlItem
            [:svg {:viewBox "0 0 448 512" :class (if (= (:currentTile @canvas-properties) "pan") "active") :on-click #(resume-zoom canvas-properties)}
              [:path {:fill "white" :d "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"}]]
            [:p "Pan/Zoom"]]
          [:div.ControlItem
            [:svg {:viewBox "0 0 448 512" :class (if (:erase-mode @canvas-properties) "active") :on-click #(set-erase canvas-properties)}
              [:path {:fill "white" :d "M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"}]]
             [:p "Erase"]]
          [:div.ControlItem
            [:svg {:viewBox "0 0 448 512"}
              [:path {:fill "white" :d "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}]]
             [:p "Save"]]
          [:div.ControlItem
            [:svg {:viewBox "0 0 448 512"}
              [:path {:fill "white" :d "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}]]
             [:p "Download"]]
          [:div.ControlItem
            [:svg {:viewBox "0 0 448 512" :on-click #(handle-home view-state)}
              [:path {:fill "white" :d "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}]]
             [:p "Home"]]]




]))) ; dope placeholder