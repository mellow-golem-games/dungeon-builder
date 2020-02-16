// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.components.SaveOverlay');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.scripts.persistence');
dungeon_builder.components.SaveOverlay.handle_save = (function dungeon_builder$components$SaveOverlay$handle_save(name,tile_state,terrain_state,loaded_map_name,currentMaps,onSave){

dungeon_builder.scripts.persistence.save_map.call(null,name,tile_state,terrain_state,loaded_map_name,currentMaps);

return onSave.call(null,name);
});
dungeon_builder.components.SaveOverlay.get_placeholder = (function dungeon_builder$components$SaveOverlay$get_placeholder(loaded_map_name){
if(cljs.core.truth_(loaded_map_name)){
return loaded_map_name;
} else {
return "Map Name";
}
});
dungeon_builder.components.SaveOverlay.SaveOverlay = (function dungeon_builder$components$SaveOverlay$SaveOverlay(active,tile_state,terrain_state,loaded_map_name,currentMaps,onSave){
return (function (active__$1,tile_state__$1,terrain_state__$1,loaded_map_name__$1){
var name = reagent.core.atom.call(null,loaded_map_name__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.saveOverlay","div.saveOverlay",394009146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active__$1)?"active":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),dungeon_builder.components.SaveOverlay.get_placeholder.call(null,loaded_map_name__$1),new cljs.core.Keyword(null,"default-value","default-value",232220170),loaded_map_name__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (name){
return (function (p1__22172_SHARP_){
return cljs.core.reset_BANG_.call(null,name,p1__22172_SHARP_.target.value);
});})(name))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name){
return (function (){
return dungeon_builder.components.SaveOverlay.handle_save.call(null,cljs.core.deref.call(null,name),tile_state__$1,terrain_state__$1,loaded_map_name__$1,currentMaps,onSave);
});})(name))
], null),"Save"], null)], null);
});
});

//# sourceMappingURL=SaveOverlay.js.map
