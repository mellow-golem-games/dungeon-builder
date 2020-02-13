(ns dungeon_builder.components.Confirmation)

(defn hide-confirmation [state]
  (reset! state false))

(defn Confirmation [show on-confirm on-reject]
  [:div.Confirmation {:class (if @show "active" "")}
    [:div.ConfirmationInnerWrapper
      [:h3 "Are You Sure You Want To Delete This Map?"]
      [:div.CofirmationButtonWrapper
        [:button.success {:on-click #(comp (hide-confirmation show) (on-confirm))} "Yes"]
        [:button.warning {:on-click #(comp (hide-confirmation show) (on-reject))} "No"]]]])