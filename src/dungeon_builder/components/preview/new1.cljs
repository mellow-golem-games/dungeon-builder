(ns dungeon_builder.components.preview.new1)



(defn New1 [active onClick state]
  [:div.Preview.Page {:class (if active "active" "")}
   [:div.PreviewInner
    [:h2 "What's New?"]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/basic/wall_tile_corner_tright.jpg" :width "40px" :height "40px"}]]
     [:div
      [:h3 "Removed Wall + Floor Tile"]
      [:p "After lots of feedback we removed the wall+floor tiles. Many users
           were confused by this tile, so we took it out. Any maps using it will still work"]]]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/stone/tile-0.jpg" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Stone Tile"]
      [:p "The first of many, we've added a new stone tile option. We're looking to add lots of
          new tiles in the next few weeks!"]]]
    [:div.PreviewRow
      [:div {:style {:width "120px"}}]
      [:div
       [:h3 "Bug Fixes"]
       [:p "We've also looked a number of bugs reported by our users. The app should be better than ever."]]]
    [:div.PreviewRow.buttonWrapper
     [:button {:on-click #(onClick state)} "Let's Go!"]]]])
