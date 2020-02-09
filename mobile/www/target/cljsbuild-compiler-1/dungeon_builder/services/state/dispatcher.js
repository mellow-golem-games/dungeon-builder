// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.services.state.dispatcher');
goog.require('cljs.core');
goog.require('dungeon_builder.services.state.global');
goog.require('dungeon_builder.services.state.textstate');
if((typeof dungeon_builder !== 'undefined') && (typeof dungeon_builder.services !== 'undefined') && (typeof dungeon_builder.services.state !== 'undefined') && (typeof dungeon_builder.services.state.dispatcher !== 'undefined') && (typeof dungeon_builder.services.state.dispatcher.handle_state_change !== 'undefined')){
} else {
dungeon_builder.services.state.dispatcher.handle_state_change = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dungeon_builder.services.state.dispatcher","handle-state-change"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (action){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,dungeon_builder.services.state.dispatcher.handle_state_change,"update-active-view",(function (action){
return dungeon_builder.services.state.global.update_active_view.call(null,dungeon_builder.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));
cljs.core._add_method.call(null,dungeon_builder.services.state.dispatcher.handle_state_change,"update-state-text",(function (action){
return dungeon_builder.services.state.textstate.update_state_text.call(null,dungeon_builder.services.state.global.app_state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(action));
}));

//# sourceMappingURL=dispatcher.js.map
