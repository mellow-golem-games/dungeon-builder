(ns dungeon_builder.components.preview.new2)



(defn New2 [active onClick state]
  [:div.Preview.Page {:class (if active "active" "")}
   [:div.PreviewInner
    [:h2 "What's New?"]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/grass/tile-0.jpg" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Grass Tile"]
      [:p "We've added a new grass tile to help build even more map types!"]]]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/sand/tile-0.jpg" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Sand Tile"]
      [:p "Another new tile, we've added sand tiles to further increase your ability to create maps"]]]
    [:div.PreviewRow
      [:div
       [:img {:src "./tiles/terrain/chest.png" :width "40px"}]]
      [:div
       [:h3 "Chest Icon"]
       [:p "The first of many, we've added a chest icon and plan to add the ability to add more details to flesh out your maps."]]]
    [:div.PreviewRow.buttonWrapper
     [:button {:on-click #(onClick state)} "Let's Go!"]]]])
