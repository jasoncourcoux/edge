// Compiled by ClojureScript 1.9.14 {:static-fns true, :optimize-constants true}
goog.provide('edge.phonebook_app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
edge.phonebook_app.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
edge.phonebook_app.get_phonebook_data = (function edge$phonebook_app$get_phonebook_data(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading phonebook data"], 0));

var G__13059 = (new XMLHttpRequest());
G__13059.open("GET","/phonebook");

G__13059.setRequestHeader("Accept","application/edn");

G__13059.addEventListener("load",((function (G__13059){
return (function (evt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edge.phonebook_app.app_state,cljs.core.assoc,cljs.core.cst$kw$phonebook,cljs.reader.read_string(evt.currentTarget.responseText));
});})(G__13059))
);

G__13059.send();

return G__13059;
});
edge.phonebook_app.save_entry = (function edge$phonebook_app$save_entry(state){
var vec__13062 = cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Saving entry:",id,entry], 0));

var G__13063 = (new XMLHttpRequest());
G__13063.open("PUT",[cljs.core.str("/phonebook/"),cljs.core.str(id)].join(''));

G__13063.setRequestHeader("Content-Type","application/edn");

G__13063.addEventListener("load",((function (G__13063,vec__13062,id,entry){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target.status,(200))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(edge.phonebook_app.app_state,cljs.core.update,cljs.core.cst$kw$phonebook,cljs.core.conj,cljs.core.array_seq([cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state)], 0));
} else {
return null;
}
});})(G__13063,vec__13062,id,entry))
);

G__13063.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([entry], 0)));

return G__13063;
});
edge.phonebook_app.delete_entry = (function edge$phonebook_app$delete_entry(state){
var vec__13066 = cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13066,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13066,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Deleting entry:",id,entry], 0));

var G__13067 = (new XMLHttpRequest());
G__13067.open("DELETE",[cljs.core.str("/phonebook/"),cljs.core.str(id)].join(''));

G__13067.addEventListener("load",((function (G__13067,vec__13066,id,entry){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target.status,(200))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(edge.phonebook_app.app_state,cljs.core.update,cljs.core.cst$kw$phonebook,cljs.core.dissoc,cljs.core.array_seq([id], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(edge.phonebook_app.app_state,cljs.core.dissoc,cljs.core.cst$kw$current);
} else {
return null;
}
});})(G__13067,vec__13066,id,entry))
);

G__13067.send();

return G__13067;
});
edge.phonebook_app.needs_saving_QMARK_ = (function edge$phonebook_app$needs_saving_QMARK_(state){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phonebook.cljs$core$IFn$_invoke$arity$1(state),cljs.core.first(cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(temp__4657__auto__)){
var db_entry = temp__4657__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state)),db_entry);
} else {
return null;
}
});
edge.phonebook_app.changer = (function edge$phonebook_app$changer(path){
return (function (ev){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edge.phonebook_app.app_state,cljs.core.assoc_in,path,ev.target.value);
});
});
edge.phonebook_app.phonebook = (function edge$phonebook_app$phonebook(){
return (function (){
var state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(edge.phonebook_app.app_state) : cljs.core.deref.call(null,edge.phonebook_app.app_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Select any of the entries in this table to reveal a form below."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (state){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(edge.phonebook_app.app_state,cljs.core.dissoc,cljs.core.cst$kw$current);
});})(state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Firstname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Surname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Phone"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__7327__auto__ = ((function (state){
return (function edge$phonebook_app$phonebook_$_iter__13097(s__13098){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__13098__$1 = s__13098;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13098__$1);
if(temp__4657__auto__){
var s__13098__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13098__$2)){
var c__7325__auto__ = cljs.core.chunk_first(s__13098__$2);
var size__7326__auto__ = cljs.core.count(c__7325__auto__);
var b__13100 = cljs.core.chunk_buffer(size__7326__auto__);
if((function (){var i__13099 = (0);
while(true){
if((i__13099 < size__7326__auto__)){
var vec__13109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7325__auto__,i__13099);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var map__13110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
var map__13110__$1 = ((((!((map__13110 == null)))?((((map__13110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13110):map__13110);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$firstname);
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$surname);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,cljs.core.cst$kw$phone);
cljs.core.chunk_append(b__13100,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__13099,vec__13109,id,map__13110,map__13110__$1,firstname,surname,phone,c__7325__auto__,size__7326__auto__,b__13100,s__13098__$2,temp__4657__auto__,state){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edge.phonebook_app.app_state,cljs.core.assoc,cljs.core.cst$kw$current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phonebook.cljs$core$IFn$_invoke$arity$1(state),id)], null));
});})(i__13099,vec__13109,id,map__13110,map__13110__$1,firstname,surname,phone,c__7325__auto__,size__7326__auto__,b__13100,s__13098__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state))))?"selected":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,firstname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,surname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,phone], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("index",id)], null)));

var G__13126 = (i__13099 + (1));
i__13099 = G__13126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13100),edge$phonebook_app$phonebook_$_iter__13097(cljs.core.chunk_rest(s__13098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13100),null);
}
} else {
var vec__13112 = cljs.core.first(s__13098__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(0),null);
var map__13113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13112,(1),null);
var map__13113__$1 = ((((!((map__13113 == null)))?((((map__13113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13113):map__13113);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13113__$1,cljs.core.cst$kw$firstname);
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13113__$1,cljs.core.cst$kw$surname);
var phone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13113__$1,cljs.core.cst$kw$phone);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (vec__13112,id,map__13113,map__13113__$1,firstname,surname,phone,s__13098__$2,temp__4657__auto__,state){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edge.phonebook_app.app_state,cljs.core.assoc,cljs.core.cst$kw$current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phonebook.cljs$core$IFn$_invoke$arity$1(state),id)], null));
});})(vec__13112,id,map__13113,map__13113__$1,firstname,surname,phone,s__13098__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state))))?"selected":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,firstname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,surname], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,phone], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("index",id)], null)),edge$phonebook_app$phonebook_$_iter__13097(cljs.core.rest(s__13098__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7327__auto__(cljs.core.cst$kw$phonebook.cljs$core$IFn$_invoke$arity$1(state));
})()], null)], null),(function (){var temp__4657__auto__ = cljs.core.cst$kw$current.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__13115 = temp__4657__auto__;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.cst$kw$firstname.cljs$core$IFn$_invoke$arity$1(entry)," ",cljs.core.cst$kw$surname.cljs$core$IFn$_invoke$arity$1(entry)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (vec__13115,id,entry,temp__4657__auto__,state){
return (function (ev){
return ev.preventDefault();
});})(vec__13115,id,entry,temp__4657__auto__,state))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$disabled,true,cljs.core.cst$kw$value,id], null)], null)], null),(function (){var iter__7327__auto__ = ((function (vec__13115,id,entry,temp__4657__auto__,state){
return (function edge$phonebook_app$phonebook_$_iter__13116(s__13117){
return (new cljs.core.LazySeq(null,((function (vec__13115,id,entry,temp__4657__auto__,state){
return (function (){
var s__13117__$1 = s__13117;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13117__$1);
if(temp__4657__auto____$1){
var s__13117__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13117__$2)){
var c__7325__auto__ = cljs.core.chunk_first(s__13117__$2);
var size__7326__auto__ = cljs.core.count(c__7325__auto__);
var b__13119 = cljs.core.chunk_buffer(size__7326__auto__);
if((function (){var i__13118 = (0);
while(true){
if((i__13118 < size__7326__auto__)){
var vec__13124 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7325__auto__,i__13118);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(1),null);
cljs.core.chunk_append(b__13119,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(entry,k),cljs.core.cst$kw$on_DASH_change,edge.phonebook_app.changer(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current,(1),k], null))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("field",k)], null)));

var G__13127 = (i__13118 + (1));
i__13118 = G__13127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13119),edge$phonebook_app$phonebook_$_iter__13116(cljs.core.chunk_rest(s__13117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13119),null);
}
} else {
var vec__13125 = cljs.core.first(s__13117__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(entry,k),cljs.core.cst$kw$on_DASH_change,edge.phonebook_app.changer(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current,(1),k], null))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("field",k)], null)),edge$phonebook_app$phonebook_$_iter__13116(cljs.core.rest(s__13117__$2)));
}
} else {
return null;
}
break;
}
});})(vec__13115,id,entry,temp__4657__auto__,state))
,null,null));
});})(vec__13115,id,entry,temp__4657__auto__,state))
;
return iter__7327__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$firstname,"Firstname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$surname,"Surname"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phone,"Phone"], null)], null));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$disabled,cljs.core.not(edge.phonebook_app.needs_saving_QMARK_(state)),cljs.core.cst$kw$on_DASH_click,((function (vec__13115,id,entry,temp__4657__auto__,state){
return (function (ev){
return edge.phonebook_app.save_entry(state);
});})(vec__13115,id,entry,temp__4657__auto__,state))
], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__13115,id,entry,temp__4657__auto__,state){
return (function (ev){
return edge.phonebook_app.delete_entry(state);
});})(vec__13115,id,entry,temp__4657__auto__,state))
], null),"Delete"], null)], null)], null);
} else {
return null;
}
})()], null);
});
});
edge.phonebook_app.init = (function edge$phonebook_app$init(section){
edge.phonebook_app.get_phonebook_data();

var G__13130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edge.phonebook_app.phonebook], null);
var G__13131 = section;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13130,G__13131) : reagent.core.render_component.call(null,G__13130,G__13131));
});
