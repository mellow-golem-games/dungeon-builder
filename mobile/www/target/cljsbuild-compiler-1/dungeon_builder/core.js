// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.views.Home');
goog.require('dungeon_builder.views.Stage');
goog.require('dungeon_builder.services.state.global');
goog.require('dungeon_builder.services.state.dispatcher');
goog.require('dungeon_builder.scripts.persistence');
cljs.core.enable_console_print_BANG_.call(null);
dungeon_builder.core.view_state = reagent.core.atom.call(null,"home");
dungeon_builder.core.loaded_map_atom = reagent.core.atom.call(null,null);
dungeon_builder.core.currentMaps = reagent.core.atom.call(null,null);
dungeon_builder.scripts.persistence.load_maps.call(null).then((function (value){
return cljs.core.reset_BANG_.call(null,dungeon_builder.core.currentMaps,cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
dungeon_builder.core.core = (function dungeon_builder$core$core(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main","div.Main",874536792),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.views.Home.Home,dungeon_builder.core.loaded_map_atom,dungeon_builder.core.view_state,dungeon_builder.core.currentMaps], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.views.Stage.Stage,dungeon_builder.core.loaded_map_atom,dungeon_builder.core.view_state,dungeon_builder.core.currentMaps], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.core.core], null),document.getElementById("app"));
dungeon_builder.core.on_js_reload = (function dungeon_builder$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map
