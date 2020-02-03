(ns dungeon-builder.components.Walls)

; TODO on This
; 1. Make the background work with the walls? not sure since hte tiles are white
; 2. make the contaienrs for each the same size so the text lines up
; think that might be it

(defn Walls [on-wall-select canvas-properties control-settings toggle-walls]
  [:div.Walls.Control_overlay {:class (if (:walls @control-settings) "active")}
    [:p {:on-click #(toggle-walls control-settings false)} "close"]


    [:h2 "Tilesets"]
    [:div.tileGroup
      [:h3 "Basic"]
      [:h3 "Dark"]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
               :src "../tiles/basic/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
        [:p "Floor"]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
               :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]
        [:p "Floor W/ Wall"]]

        [:div.tileGroup__group
          [:img {:class (if (= (:currentTile @canvas-properties) "tile") "active")
                :src "../tiles/basic/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor")}]
          [:p "Floor"]]

        [:div.tileGroup__group
          [:img {:class (if (= (:currentTile @canvas-properties) "wall_tile_left") "active")
                :src "../tiles/basic/wall_tile_left.jpg" :on-click #(on-wall-select canvas-properties "wall_tile_left" "wall")}]
          [:p "Floor W/ Wall"]]]

    [:h2 "Terrain"]
    [:div.tileGroup
      [:h3 "Walls"]
      [:h3 "Doors"]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "small_wall") "active")}
        [:img {:src "../tiles/terrain/small_wall.jpg" :on-click #(on-wall-select canvas-properties "small_wall" "terrain")}]
        [:p "Small Wall"]]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "small_wall_side") "active")}
        [:img {:src "../tiles/terrain/small_wall_side.jpg" :on-click #(on-wall-select canvas-properties "small_wall_side" "terrain")}]
        [:p "Small Wall Side"]]

      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "door_long") "active") }
        [:img {:style {:height "9px"}
               :src "../tiles/terrain/door_long.png" :on-click #(on-wall-select canvas-properties "door_long" "terrain")}]]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "door_tall") "active")}
        [:img {:src "../tiles/terrain/door_tall.png" :on-click #(on-wall-select canvas-properties "door_tall" "terrain")}]]]
])
