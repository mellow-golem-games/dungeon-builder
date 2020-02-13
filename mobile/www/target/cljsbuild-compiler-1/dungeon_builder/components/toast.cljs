(ns dungeon_builder.components.toast)

; This is bad practice as it puts this in the global scope, but we need something to hook back
; and close the alert on the dynamically generated button click - TODO find a better way
(set! js/fancyalerthandleclose (fn []
  (.remove (.getElementById js/document "fancy-alert"))))

(defonce defaultSettings {
  :text "example" ; Text for the alert
  :timeout 2000 ; Time before it closes itself
  :hideAfterN true ; toggle close self functionality
  :showButton false ; show a close button - defaults to true if hideAfterN is false
  :buttonProperties { ; addition button properties
    :buttonText "close" ; close button text
  }})

(defonce defaultStyles {
  :position "fixed;"
  :box-sizing "border-box;"
  :width "100%;"
  :height "50px;"
  :border "1px solid #ddd;"
  :padding "8px;"
  :text-align "center;"
  :background "white;"
  :display "flex;"
  :flex-direction "column;"
  :justify-content "center;"
  :top "0;"
  :left "0;"})

(defn generate-alert-css [mergedStyles]
  "simple helper to add the stles to the domElement"
  (str "style=\""(clojure.string/join " "  (map (fn [[key val]] (str (name key) ": " val)) mergedStyles))"\""))

(defn handle-close []
  "Handles the deletion of a fancy-box alert"
  (.remove (.getElementById js/document "fancy-alert")))

(defn generate-button-html [options]
  "Handles displaying the button when true or when hideAfterN is false"
  (if (or (:showButton options) (not (:hideAfterN options)))
    (str "<button onClick=\"fancyalerthandleclose()\">"(get-in options [:buttonProperties :buttonText])"</button>")))

(defn generate-html [options mergedStyles]
  "Generates the html give the provided options"
  (str "<div id=\"fancy-alert\" "(generate-alert-css mergedStyles)">
          <div class=\"fancy-alert__inner\">
            <p>"(:text options)"</p>"(generate-button-html options)"
          </div>
        </div>"))

(defn set-up-timeout [timeout]
  "Sets a timeout to destroy the component after n ms"
  (js/setTimeout #(handle-close) timeout))

(defn fancy-alert [options]
  "Entry to the fancy-alert component - Call this to show the alert"
  (let [bodyElem (.-body js/document)
        mergedOptions (merge defaultSettings options)
        mergedStyles (merge defaultStyles (:styles options))]
    (.insertAdjacentHTML bodyElem "afterbegin" (generate-html mergedOptions mergedStyles))
      (if (:hideAfterN mergedOptions)
        (set-up-timeout (:timeout mergedOptions)))))
