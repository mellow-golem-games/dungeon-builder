(ns dungeon-builder.views.Home
  (:require [reagent.core :as reagent :refer [atom]]))


(defn Home [state]
  [:div.Home
    [:button "New Map"]
    [:button "Load Map"]])