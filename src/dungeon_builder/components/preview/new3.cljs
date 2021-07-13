(ns dungeon_builder.components.preview.new3)



(defn New3 [active onClick state]
  [:div.Preview.Page {:class (if active "active" "")}
   [:div.PreviewInner
    [:h2 "What's New?"]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/water/tile-0.jpg" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Water Tile"]
      [:p "We've added a new water tile to help build even more map types!"]]]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/terrain/chest.png" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Barrel Object"]
      [:p "There's a new barrel object that can be added to your maps!"]]]
    [:div.PreviewRow.buttonWrapper
     [:button {:on-click #(onClick state)} "Let's Go!"]]]])
