(ns edge.todo
  (:require
    [yada.yada :as yada]
    [yada.swagger :as swagger]
    [bidi.bidi :as bidi]
    [selmer.parser :as selmer]))

(def todos (atom {100 {:label "Taste JavaScript" :completed false}
                  101 {:label "Buy Unicorn" :completed false}}))

(defn add-todo [todo-entry]
  (let [max-id (apply max (cons 99 (keys @todos)))
        new-id (inc max-id)]
    (swap! todos assoc new-id {:label     (:label todo-entry)
                               :completed (:completed todo-entry)})))

(defn create-todo-resource
  [db]
  (yada/resource
    {:id          :edge.resources/todo-index
     :description "Todo Items"
     :produces    [{:media-type
                             #{"application/edn;q=0.9"}
                    :charset "UTF-8"}]
     :methods
                  {:get    {:response (fn [context]
                                        @todos)}
                   :post   {:consumes #{"application/edn;q=0.9"}
                            :response (fn [context]
                                        (let [entry (:body context)]
                                          (add-todo {:label     (:label entry)
                                                     :completed (:completed entry)})))}
                   :put    {:consumes #{"application/edn;q=0.9"}
                            :response (fn [context]
                                        (let [entries (:body context)]
                                          (swap! todos merge entries)))}
                   :delete {:consumes #{"application/edn;q=0.9"}
                            :response (fn [context]
                                        (let [ids (:body context)]
                                          (swap! todos (partial apply dissoc) ids)))}}}))

(defn lookup-todo-resource
  [db]
  (yada/resource
    {:id          :edge.resources/todo-entry
     :description "Todo Item"
     :produces    [{:media-type
                    #{"application/edn;q=0.9" "application/json;q=0.8" "application/transit+json;q=0.7"} :charset "UTF-8"}]
     :parameters  {:path {:id Long}}
     :methods     {:get
                           {:produces #{"application/edn;q=0.9"}
                            :response (fn [context]
                                        (let [id (get-in context [:parameters :path :id])]
                                          (str "<h1>Looked up todo with id" id "</h1>")))}
                   :put    {
                            :consumes #{"application/edn;q=0.9"}
                            :response (fn [context]
                                        (let [id (get-in context [:parameters :path :id])]
                                          (swap! todos merge {id (:body context)})))}
                   :delete {:response (fn [context]
                                        (let [id (get-in context [:parameters :path :id])]
                                          (let [entries (:body context)]
                                            (swap! todos dissoc id))))}}}))

(defn todo-routes
  [db {:keys [port]}]
  (let [routes ["/todo"
                [
                 ["" (create-todo-resource db)]
                 [["/" :id] (lookup-todo-resource db)]]]]
    [""
     [
      routes ["/todo-api/swagger.json"
              (bidi/tag
                (yada/handler
                  (swagger/swagger-spec-resource
                    (swagger/swagger-spec
                      routes
                      {:info     {:title       "Todo"
                                  :version     "1.0"
                                  :description "Example todo application built on Edge template"}
                       :host     (format "localhost:%d" port)
                       :schemes  ["http"]
                       :tags     [{:name        "getters"
                                   :description "All paths that support GET"}]
                       :basePath ""})))
                :edge.resources/todo-swagger)]]]))