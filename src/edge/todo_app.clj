;; Copyright © 2016, JUXT LTD.

;; Our phonebook but as a single page application (SPA)

(ns edge.todo-app
  (:require
   [yada.yada :as yada]
   [selmer.parser :as selmer]))

(defn todo-app-routes [db {:keys [port]}]
  ["/todo-app"
   (yada/resource
    {:id :edge.resources/todo-app
     :methods
     {:get
      {:produces "text/html"
       :response
       (fn [ctx] (selmer/render-file
                  "todo-app.html"
                  {:title "Edge Todo App"
                   :ctx ctx
                   }))}}})])
