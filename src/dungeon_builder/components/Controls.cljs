(ns dungeon-builder.components.Controls)

(defn pause-zoom [prop]
  (.pause (:panRef @prop)))

(defn resume-zoom [prop]
  (.resume (:panRef @prop)))

(defn update-current-tile [props name]
  (pause-zoom props)
  (swap! props conj {:currentTile name}))

(defn Controls [canvas-properties]
  [:div.Controls
    [:img {:src "../tile.jpg" :on-click #(update-current-tile canvas-properties "tile")}]
    [:img {:src "../wall_tile.jpg" :on-click #(update-current-tile canvas-properties "wall_tile")}]
    [:p {:on-click #(resume-zoom canvas-properties)} "Pan/zoom mode"]
    ])