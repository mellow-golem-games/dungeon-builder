(ns dungeon-builder.services.state.textstate)

(defn update-state-text [app-state payload]
  "example of updating the state based on the payload"
  (swap! app-state conj {:text payload}))