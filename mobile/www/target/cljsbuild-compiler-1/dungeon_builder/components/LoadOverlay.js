// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.components.LoadOverlay');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.scripts.persistence');
dungeon_builder.components.LoadOverlay.load_current_maps = (function dungeon_builder$components$LoadOverlay$load_current_maps(mapState){
return dungeon_builder.scripts.persistence.load_maps.call(null).then((function (value){
return cljs.core.reset_BANG_.call(null,mapState,cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}));
});
dungeon_builder.components.LoadOverlay.handle_load_map = (function dungeon_builder$components$LoadOverlay$handle_load_map(map,loaded_map_atom,hide_home_view){
cljs.core.reset_BANG_.call(null,loaded_map_atom,map);

return hide_home_view.call(null);
});
dungeon_builder.components.LoadOverlay.LoadOverlay = (function dungeon_builder$components$LoadOverlay$LoadOverlay(active,loaded_map_atom,hide_home_view){
var name = reagent.core.atom.call(null,"");
var currentMaps = reagent.core.atom.call(null,null);
dungeon_builder.components.LoadOverlay.load_current_maps.call(null,currentMaps);

return ((function (name,currentMaps){
return (function (active__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.LoadOverlay","div.LoadOverlay",1305041974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,active__$1))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.LoadOverlay__close","p.LoadOverlay__close",-506592493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,currentMaps){
return (function (){
return cljs.core.reset_BANG_.call(null,active__$1,false);
});})(name,currentMaps))
], null),"close X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Maps"], null),(function (){var iter__4523__auto__ = ((function (name,currentMaps){
return (function dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22212(s__22213){
return (new cljs.core.LazySeq(null,((function (name,currentMaps){
return (function (){
var s__22213__$1 = s__22213;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22213__$1);
if(temp__5720__auto__){
var s__22213__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22213__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22213__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22215 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22214 = (0);
while(true){
if((i__22214 < size__4522__auto__)){
var map = cljs.core._nth.call(null,c__4521__auto__,i__22214);
cljs.core.chunk_append.call(null,b__22215,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButton","p.MapButton",1826634522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22214,map,c__4521__auto__,size__4522__auto__,b__22215,s__22213__$2,temp__5720__auto__,name,currentMaps){
return (function (){
return dungeon_builder.components.LoadOverlay.handle_load_map.call(null,map,loaded_map_atom,hide_home_view);
});})(i__22214,map,c__4521__auto__,size__4522__auto__,b__22215,s__22213__$2,temp__5720__auto__,name,currentMaps))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null));

var G__22216 = (i__22214 + (1));
i__22214 = G__22216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22215),dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22212.call(null,cljs.core.chunk_rest.call(null,s__22213__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22215),null);
}
} else {
var map = cljs.core.first.call(null,s__22213__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButton","p.MapButton",1826634522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map,s__22213__$2,temp__5720__auto__,name,currentMaps){
return (function (){
return dungeon_builder.components.LoadOverlay.handle_load_map.call(null,map,loaded_map_atom,hide_home_view);
});})(map,s__22213__$2,temp__5720__auto__,name,currentMaps))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null),dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22212.call(null,cljs.core.rest.call(null,s__22213__$2)));
}
} else {
return null;
}
break;
}
});})(name,currentMaps))
,null,null));
});})(name,currentMaps))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,currentMaps));
})()], null);
});
;})(name,currentMaps))
});

//# sourceMappingURL=LoadOverlay.js.map
