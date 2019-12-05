(ns dungeon-builder.components.Controls)

(defn pause-zoom [props]
  (swap! props conj {:paint-mode true})
  (.pause (:panRef @props)))

(defn resume-zoom [props]
  (swap! props conj {:paint-mode false})
  (.resume (:panRef @props)))

(defn update-current-tile [props name]
  (pause-zoom props)
  (swap! props conj {:currentTile name}))

(defn Controls [canvas-properties]
  [:div.Controls
    [:img {:src "../tile.jpg" :on-click #(update-current-tile canvas-properties "tile")}]
    [:img {:src "../wall_tile.jpg" :on-click #(update-current-tile canvas-properties "wall_tile")}]
    [:p {:on-click #(resume-zoom canvas-properties)} "Pan/zoom mode"]
    ])