(ns dungeon_builder.components.Walls)

; TODO on This
; 1. Make the background work with the walls? not sure since hte tiles are white
; 2. make the contaienrs for each the same size so the text lines up
; think that might be it

(defn Walls [on-wall-select canvas-properties control-settings toggle-walls]
  [:div.Walls.Control_overlay {:class (if (:walls @control-settings) "active")}
    [:p.Control_overlay_close {:on-click #(toggle-walls control-settings false)} "close X"]


    [:h2 "Tilesets"]
    [:div.tileGroup
      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "basic")) "active")
               :src "./tiles/basic/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "basic")}]
        [:p "Baic Floor"]]

      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "dark")) "active")
               :src "./tiles/dark/tile-1.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "dark")}]
        [:p "Dark Floor"]]


      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "wood")) "active")
               :src "./tiles/wood/tile-0.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "wood")}]
        [:p "Wood"]]

      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "stone")) "active")
               :src "./tiles/stone/tile-0.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "stone")}]
        [:p "Stone"]]

      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "grass")) "active")
               :src "./tiles/grass/tile-0.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "grass")}]
        [:p "Grass"]]

      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "sand")) "active")
               :src "./tiles/sand/tile-0.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "sand")}]
        [:p "Sand"]]

      [:div.tileGroup__group
        [:img {:class (if (and (= (:currentTile @canvas-properties) "tile") (= (:tileset @canvas-properties) "water")) "active")
               :src "./tiles/water/tile-0.jpg" :on-click #(on-wall-select canvas-properties "tile" "floor" "water")}]
        [:p "Water"]]]

    [:h2 "Terrain"]
    [:div.tileGroup
      [:h3 "Walls"]
      [:h3 "Doors"]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "small_wall") "active") :style {:height "120px"}}
        [:img {:src "./tiles/terrain/small_wall.jpg" :on-click #(on-wall-select canvas-properties "small_wall" "terrain" nil)}]
        [:p "Small Wall"]]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "small_wall_side") "active") :style {:height "180px"}}
        [:img {:src "./tiles/terrain/small_wall_side.jpg" :on-click #(on-wall-select canvas-properties "small_wall_side" "terrain" nil)}]
        [:p "Small Wall Side"]]

      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "door_long") "active") :style {:height "60px"}}
        [:img {:style {:height "9px"}
               :src "./tiles/terrain/door_long.png" :on-click #(on-wall-select canvas-properties "door_long" "terrain" nil)}]]
      [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "door_tall") "active") :style {:height "60px"}}
        [:img {:src "./tiles/terrain/door_tall.png" :on-click #(on-wall-select canvas-properties "door_tall" "terrain" nil)}]]
      [:div.tileGroup__group {:style {:height "57px" :background "rgba(255,255,255,.35)"}}
        [:img {:class (if (= (:currentTile @canvas-properties) "trap") "active") :src "./tiles/terrain/trap.png" :on-click #(on-wall-select canvas-properties "trap" "terrain" nil)}]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "chest") "active") :src "./tiles/terrain/chest.png" :on-click #(on-wall-select canvas-properties "chest" "terrain" nil)}]]
      [:div.tileGroup__group
        [:img {:class (if (= (:currentTile @canvas-properties) "barrel") "active") :src "./tiles/terrain/barrel.png" :on-click #(on-wall-select canvas-properties "barrel" "terrain" nil)}]]]

    [:h2 "Characters"]
    [:div.tileGroup
     [:div.tileGroup__group {:class (if (= (:currentTile @canvas-properties) "goblin") "active") :style {:height "120px"}}
       [:img {:src "./tiles/characters/goblin.png" :on-click #(on-wall-select canvas-properties "goblin" "terrain" nil)}]
       [:p "Goblin"]]]])
