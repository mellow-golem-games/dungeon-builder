(ns dungeon-builder.components.Controls)

(defn pause-zoom [props]
  (swap! props conj {:paint-mode true})
  (.pause (:panRef @props)))

(defn resume-zoom [props]
  (swap! props conj {:paint-mode false :currentTile "pan"})
  (.resume (:panRef @props)))

(defn update-current-tile [props name type]
  (pause-zoom props)
  (swap! props conj {:currentTile name :tileType type}))

(defn Controls [canvas-properties]
  [:div.Controls
    [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
           :src "../tile.jpg" :on-click #(update-current-tile canvas-properties "tile" "floor")}]
    [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
           :src "../wall_tile_left.jpg" :on-click #(update-current-tile canvas-properties "wall_tile_left" "wall")}]
    [:img {:class (if (= (:currentTile @canvas-properties) "pan") "active")
           :style {:width "50px" :height "50px"}
           :src "../dragon.jpg" :on-click #(resume-zoom canvas-properties)}]]) ; dope placeholder