(ns dungeon-builder.components.Controls)

(defn pause-zoom [props]
  (swap! props conj {:paint-mode true})
  (.pause (:panRef @props)))

(defn resume-zoom [props]
  (swap! props conj {:paint-mode false :currentTile "pan"})
  (.resume (:panRef @props)))

(defn update-current-tile [props name]
  (pause-zoom props)
  (swap! props conj {:currentTile name}))

(defn Controls [canvas-properties]
  [:div.Controls
    [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
           :src "../tile.jpg" :on-click #(update-current-tile canvas-properties "tile")}]
    [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile") "active")
           :src "../wall_tile.jpg" :on-click #(update-current-tile canvas-properties "wall_tile")}]
    [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_corner") "active")
           :src "../wall_tile_corner.jpg" :on-click #(update-current-tile canvas-properties "wall_tile_corner")}]
    [:img {:class (if (= (:currentTile @canvas-properties) "pan") "active")
           :style {:width "50px" :height "50px"}
           :src "../dragon.jpg" :on-click #(resume-zoom canvas-properties)}]]) ; dope placeholder