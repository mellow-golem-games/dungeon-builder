(ns dungeon-builder.components.Walls)

(defn Walls [on-wall-select canvas-properties control-settings toggle-walls]
  [:div.Walls.Control_overlay {:class (if (:walls @control-settings) "active")}
    [:p {:on-click #(toggle-walls control-settings false)} "close"]

    [:div.tileGroup
      [:h3 "Basic"]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
               :src "../tiles/basic/tile.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
        [:p "Floor"]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "small_wall") "active")
               :src "../tiles/basic/small_wall.jpg" :on-click #(on-wall-select canvas-properties "small_wall" "tile")}]
        [:p "wall"]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
               :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]
        [:p "wall"]]]

    [:div.tileGroup
      [:h3 "Dark"]
      [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
             :src "../tiles/basic/tile.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
      [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
             :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]]])
