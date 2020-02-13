// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.components.LoadOverlay');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.components.Confirmation');
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
dungeon_builder.components.LoadOverlay.delete_map = (function dungeon_builder$components$LoadOverlay$delete_map(name,currentMaps){
return dungeon_builder.scripts.persistence.delete_by_name.call(null,name,currentMaps);
});
dungeon_builder.components.LoadOverlay.handle_on_confirm = (function dungeon_builder$components$LoadOverlay$handle_on_confirm(mapName,currentMaps){
return dungeon_builder.components.LoadOverlay.delete_map.call(null,mapName,currentMaps);
});
dungeon_builder.components.LoadOverlay.handle_on_reject = (function dungeon_builder$components$LoadOverlay$handle_on_reject(){
return null;
});
dungeon_builder.components.LoadOverlay.LoadOverlay = (function dungeon_builder$components$LoadOverlay$LoadOverlay(active,loaded_map_atom,hide_home_view,currentMaps){
var mapName = reagent.core.atom.call(null,"");
var showConfirmation = reagent.core.atom.call(null,false);
return ((function (mapName,showConfirmation){
return (function (active__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.LoadOverlay","div.LoadOverlay",1305041974),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,active__$1))?"active":"")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.components.Confirmation.Confirmation,showConfirmation,cljs.core.partial.call(null,dungeon_builder.components.LoadOverlay.handle_on_confirm,cljs.core.deref.call(null,mapName),currentMaps),dungeon_builder.components.LoadOverlay.handle_on_reject], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.LoadOverlay__close","p.LoadOverlay__close",-506592493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mapName,showConfirmation){
return (function (){
return cljs.core.reset_BANG_.call(null,active__$1,false);
});})(mapName,showConfirmation))
], null),"close X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Maps"], null),(function (){var iter__4523__auto__ = ((function (mapName,showConfirmation){
return (function dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22179(s__22180){
return (new cljs.core.LazySeq(null,((function (mapName,showConfirmation){
return (function (){
var s__22180__$1 = s__22180;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22180__$1);
if(temp__5720__auto__){
var s__22180__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22180__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22180__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22182 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22181 = (0);
while(true){
if((i__22181 < size__4522__auto__)){
var map = cljs.core._nth.call(null,c__4521__auto__,i__22181);
cljs.core.chunk_append.call(null,b__22182,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.MapLoadWrapper","div.MapLoadWrapper",-2030195095),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButtonDelete","p.MapButtonDelete",1689485347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22181,map,c__4521__auto__,size__4522__auto__,b__22182,s__22180__$2,temp__5720__auto__,mapName,showConfirmation){
return (function (){
return cljs.core.comp.call(null,cljs.core.reset_BANG_.call(null,mapName,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)),cljs.core.reset_BANG_.call(null,showConfirmation,true));
});})(i__22181,map,c__4521__auto__,size__4522__auto__,b__22182,s__22180__$2,temp__5720__auto__,mapName,showConfirmation))
], null),"x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButton","p.MapButton",1826634522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22181,map,c__4521__auto__,size__4522__auto__,b__22182,s__22180__$2,temp__5720__auto__,mapName,showConfirmation){
return (function (){
return dungeon_builder.components.LoadOverlay.handle_load_map.call(null,map,loaded_map_atom,hide_home_view);
});})(i__22181,map,c__4521__auto__,size__4522__auto__,b__22182,s__22180__$2,temp__5720__auto__,mapName,showConfirmation))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null)], null));

var G__22183 = (i__22181 + (1));
i__22181 = G__22183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22182),dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22179.call(null,cljs.core.chunk_rest.call(null,s__22180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22182),null);
}
} else {
var map = cljs.core.first.call(null,s__22180__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.MapLoadWrapper","div.MapLoadWrapper",-2030195095),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButtonDelete","p.MapButtonDelete",1689485347),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map,s__22180__$2,temp__5720__auto__,mapName,showConfirmation){
return (function (){
return cljs.core.comp.call(null,cljs.core.reset_BANG_.call(null,mapName,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)),cljs.core.reset_BANG_.call(null,showConfirmation,true));
});})(map,s__22180__$2,temp__5720__auto__,mapName,showConfirmation))
], null),"x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.MapButton","p.MapButton",1826634522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map,s__22180__$2,temp__5720__auto__,mapName,showConfirmation){
return (function (){
return dungeon_builder.components.LoadOverlay.handle_load_map.call(null,map,loaded_map_atom,hide_home_view);
});})(map,s__22180__$2,temp__5720__auto__,mapName,showConfirmation))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map)], null)], null),dungeon_builder$components$LoadOverlay$LoadOverlay_$_iter__22179.call(null,cljs.core.rest.call(null,s__22180__$2)));
}
} else {
return null;
}
break;
}
});})(mapName,showConfirmation))
,null,null));
});})(mapName,showConfirmation))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,currentMaps));
})()], null);
});
;})(mapName,showConfirmation))
});

//# sourceMappingURL=LoadOverlay.js.map
