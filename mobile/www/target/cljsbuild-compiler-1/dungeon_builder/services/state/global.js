// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.services.state.global');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof dungeon_builder !== 'undefined') && (typeof dungeon_builder.services !== 'undefined') && (typeof dungeon_builder.services.state !== 'undefined') && (typeof dungeon_builder.services.state.global !== 'undefined') && (typeof dungeon_builder.services.state.global.app_state !== 'undefined')){
} else {
dungeon_builder.services.state.global.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"example-page","example-page",1944873874),false], null)], null));
}
dungeon_builder.services.state.global.update_scroll_position = (function dungeon_builder$services$state$global$update_scroll_position(val,scroll){

if(cljs.core.truth_(scroll)){
window.scrollTo((0),new cljs.core.Keyword(null,"scrollOffset","scrollOffset",-136986511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.services.state.global.app_state)));
} else {
}

return cljs.core.swap_BANG_.call(null,dungeon_builder.services.state.global.app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollOffset","scrollOffset",-136986511),val], null));
});
dungeon_builder.services.state.global.handle_scroll_func = (function dungeon_builder$services$state$global$handle_scroll_func(payload){

if(cljs.core._EQ_.call(null,payload,"")){
document.body.classList.remove("hide-scroll");

return dungeon_builder.services.state.global.update_scroll_position.call(null,(0),true);
} else {
dungeon_builder.services.state.global.update_scroll_position.call(null,window.pageYOffset,false);

return setTimeout((function (){
return document.body.classList.add("hide-scroll");
}),(100));
}
});
dungeon_builder.services.state.global.update_active_view = (function dungeon_builder$services$state$global$update_active_view(app_state,payload){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-page","active-page",370357330),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,payload),"active"])], null));

return dungeon_builder.services.state.global.handle_scroll_func.call(null,payload);
});

//# sourceMappingURL=global.js.map
