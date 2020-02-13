// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.views.Home');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.components.LoadOverlay');
dungeon_builder.views.Home.new_map = (function dungeon_builder$views$Home$new_map(view_state){
return cljs.core.reset_BANG_.call(null,view_state,"stage");
});
dungeon_builder.views.Home.hide_home_view = (function dungeon_builder$views$Home$hide_home_view(show_load_overlay,view_state){
cljs.core.reset_BANG_.call(null,view_state,false);

return cljs.core.reset_BANG_.call(null,show_load_overlay,false);
});
dungeon_builder.views.Home.Home = (function dungeon_builder$views$Home$Home(loaded_map_atom,view_state,currentMaps){
var showLoadOverlay = reagent.core.atom.call(null,false);
return ((function (showLoadOverlay){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home","div.Home",-1882975240),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,"home",cljs.core.deref.call(null,view_state)))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-content-wrapper","div.Home-content-wrapper",1515055975),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Dungeon Maker"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-button-wrapper","div.Home-button-wrapper",147322096),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (showLoadOverlay){
return (function (){
return dungeon_builder.views.Home.new_map.call(null,view_state);
});})(showLoadOverlay))
], null),"New Map"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (showLoadOverlay){
return (function (){
return cljs.core.reset_BANG_.call(null,showLoadOverlay,true);
});})(showLoadOverlay))
], null),"Load Map"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.components.LoadOverlay.LoadOverlay,showLoadOverlay,loaded_map_atom,cljs.core.partial.call(null,dungeon_builder.views.Home.hide_home_view,showLoadOverlay,view_state),currentMaps], null)], null);
});
;})(showLoadOverlay))
});

//# sourceMappingURL=Home.js.map
