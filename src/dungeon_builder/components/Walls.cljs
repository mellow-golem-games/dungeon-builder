(ns dungeon-builder.components.Walls)

(defn Walls [on-wall-select canvas-properties control-settings toggle-walls]
  [:div.Walls.Control_overlay {:class (if (:walls @control-settings) "active")}
    [:p {:on-click #(toggle-walls control-settings false)} "close"]

    [:div.tileGroup
      [:h3 "Basic"]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
               :src "../tiles/basic/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
        [:p "Floor Tile"]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
               :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]
        [:p "Tilw With Wall"]]]

    [:div.tileGroup
      [:h3 "Walls"]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "small_wall") "active")
               :src "../tiles/terrain/small_wall.jpg" :on-click #(on-wall-select canvas-properties "small_wall" "terrain")}]
        [:p "Small Wall"]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "small_wall_side") "active")
               :src "../tiles/terrain/small_wall_side.jpg" :on-click #(on-wall-select canvas-properties "small_wall_side" "terrain")}]
        [:p "Small Wall Side"]]]

    [:div.tileGroup
      [:h3 "Doors"]
      [:img {:class (if (= (:currentTile @canvas-properties) "terrain") "active") :style {:height "9px"}
             :src "../tiles/terrain/door_long.png" :on-click #(on-wall-select canvas-properties "door_long" "terrain")}]
      [:img {:class (if (= (:currentTile @canvas-properties) "terrain") "active")
             :src "../tiles/terrain/door_tall.png" :on-click #(on-wall-select canvas-properties "door_tall" "terrain")}]]

    [:div.tileGroup
      [:h3 "Dark"]
      [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
             :src "../tiles/basic/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
      [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
             :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]]
])
