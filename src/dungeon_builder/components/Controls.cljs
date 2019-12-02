(ns dungeon-builder.components.Controls)

(defn update-current-tile [props name]
  (swap! props conj {:currentTile name}))

(defn Controls [canvas-properties]
  [:div.Controls
    [:img {:src "../tile.jpg" :on-click #(update-current-tile canvas-properties "tile")}]
    [:img {:src "../wall_tile.jpg" :on-click #(update-current-tile canvas-properties "wall_tile")}]
    ])