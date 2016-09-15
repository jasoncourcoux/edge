// Compiled by ClojureScript 1.9.14 {:static-fns true, :optimize-constants true}
goog.provide('edge.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('edge.phonebook_app');
edge.main.init = (function edge$main$init(){
cljs.core.enable_console_print_BANG_();

var temp__4657__auto___13134 = document.getElementById("phonebook");
if(cljs.core.truth_(temp__4657__auto___13134)){
var section_13135 = temp__4657__auto___13134;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Phonebook"], 0));

edge.phonebook_app.init(section_13135);
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Congratulations - your environment seems to be working"], 0));
});
