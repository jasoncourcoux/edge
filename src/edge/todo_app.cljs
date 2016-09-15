(ns edge.todo-app
  (:require
    [reagent.core :as r]
    [cljs.reader :refer [read-string]]))

(def app-state (r/atom {}))

(defn get-todo-data []
  (doto
    (new js/XMLHttpRequest)
    (.open "GET" "/todo")
    (.setRequestHeader "Accept" "application/edn")
    (.addEventListener
      "load"
      (fn [evt]
        (swap! app-state
               assoc :todo
               (read-string evt.currentTarget.responseText))))
    (.send)))

(defn create-todo [todo]
  (doto
    (new js/XMLHttpRequest)
    (.open "POST" "/todo")
    (.setRequestHeader "Content-Type" "application/edn")
    (.addEventListener
      "load"
      (fn [evt]
        (swap! app-state
               assoc :todo
               (read-string evt.currentTarget.responseText))))
    (.send todo)))

(defn update-todo [id]
  (println @app-state)
  (doto
    (new js/XMLHttpRequest)
    (.open "PUT" (str "/todo/" id))
    (.setRequestHeader "Content-Type" "application/edn")
    (.addEventListener
      "load"
      (fn [evt]
        (swap! app-state
               assoc :todo
               (read-string evt.currentTarget.responseText))))
    (.send (get-in @app-state [:todo id]))))

(defn toggle-complete [id complete]
  (do
    (swap! app-state assoc-in [:todo id :completed] complete)
    (update-todo id)))

(defn delete-todo [id]
  (doto
    (new js/XMLHttpRequest)
    (.open "DELETE" (str "/todo/" id))
    (.setRequestHeader "Content-Type" "application/edn")
    (.addEventListener
      "load"
      (fn [evt]
        (swap! app-state
               assoc :todo
               (read-string evt.currentTarget.responseText))))
    (.send)))

(defn delete-todos [ids]
  (doto
    (new js/XMLHttpRequest)
    (.open "DELETE" "/todo")
    (.setRequestHeader "Content-Type" "application/edn")
    (.addEventListener
      "load"
      (fn [evt]
        (swap! app-state
               assoc :todo
               (read-string evt.currentTarget.responseText))))
    (.send ids)))


(defn toggle-all-complete [completed]
  (let [ks (keys (:todo @app-state))
        vs (vals (:todo @app-state))
        modified (into {} (map (fn [k v] [k v]) ks (map #(assoc % :completed completed) vs)))]
    (doto
      (new js/XMLHttpRequest)
      (.open "PUT" "/todo")
      (.setRequestHeader "Content-Type" "application/edn")
      (.addEventListener
        "load"
        (fn [evt]
          (swap! app-state
                 assoc :todo
                 (read-string evt.currentTarget.responseText))))
      (.send modified))))

(defn todos []
  (fn []
    (let [state @app-state]
      [:section {:className "todoapp"}
       [:header {:className "header"}
        [:h1 "todos"]
        [:input {:className   "new-todo"
                 :placeholder "What needs to be done?"
                 :autoFocus   true
                 :onKeyDown   (fn [event]
                                (if (= 13 (.-keyCode event))
                                  (do (create-todo {:label     (.-value (.-target event))
                                                    :completed false})
                                      (aset (.-target event) "value" ""))))}]]
       [:section {:className (str "main " (if (empty? (:todo state)) "hidden"))}
        [:input {:className "toggle-all"
                 :type      "checkbox"
                 :checked   (every? #(-> %
                                         second
                                         :completed) (:todo state))
                 :on-change (fn [event]
                              (toggle-all-complete (.-checked (.-target event))))}]
        [:label {:for "toggle-all"} "Mark all as complete"]
        [:ul {:className "todo-list"}
         (map (fn [t]
                [:li {:className     (if (:completed (second t)) "completed" "")
                      :onDoubleClick (fn [event]
                                       (do (.add (.-classList (.-currentTarget event)) "editing")
                                           (.focus (.querySelector (.-currentTarget event) ".edit"))))}
                 [:div {:className "view"}
                  [:input {:className "toggle"
                           :type      "checkbox"
                           :checked   (-> t second :completed)
                           :on-change (fn [event]
                                        (do
                                          (.stopPropagation event)
                                          (toggle-complete (first t)
                                                           (.-checked (.-target event)))))}]
                  [:label (:label (second t))]
                  [:button {:className "destroy"
                            :on-click  (fn [event]
                                         (delete-todo (first t)))}]]
                 [:input {:className "edit"
                          :value     (:label (second t))
                          :onKeyDown (fn [event]
                                       (if (= 13 (.-keyCode event))
                                         (.blur (.-currentTarget event))))
                          :on-change (fn [event]
                                       (swap! app-state assoc-in [:todo (first t) :label] (.-value (.-currentTarget event))))
                          :on-blur   (fn [event]
                                       (do (update-todo (first t))
                                           (.remove (.-classList
                                                      (.-parentNode (.-currentTarget event))) "editing")))}]]) (:todo state))]]
       [:footer {:className (str "footer " (if (empty? (:todo state)) "hidden"))}
        [:span {:className "todo-count"}
         [:strong (let [items-left (count (filter (comp not :completed second) (:todo state)))]
                    (if (= 1 items-left) (str items-left " item left")
                                         (str items-left " items left")))]]
        [:button {:className "clear-completed"
                  :on-click  (fn [event]
                               (let [ids (keys (filter (comp :completed second) (:todo state)))]
                                 (delete-todos ids)))} "Clear completed"]]])))

(defn init [section]
  (get-todo-data)
  (r/render-component [todos] section))
