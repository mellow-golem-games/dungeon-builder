(ns dungeon_builder.components.preview.new4)



(defn New4 [active onClick state]
  [:div.Preview.Page {:class (if active "active" "")}
   [:div.PreviewInner
    [:h2 "What's New?"]
    [:div.PreviewRow
     [:div
      [:img {:src "./tiles/characters/goblin.png" :width "40px" :height "40px"}]]
     [:div
      [:h3 "New Character Tiles"]
      [:p "Starting with the goblin, we'll be releasing new character tiles. Scroll down in the tile picker and stay tuned for more!"]]]
    [:div.PreviewRow.buttonWrapper
     [:button {:on-click #(onClick state)} "Let's Go!"]]]])
