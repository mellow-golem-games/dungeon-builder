// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.scripts.persistence');
goog.require('cljs.core');
goog.require('dungeon_builder.components.toast');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dungeon_builder.scripts.persistence.map_rep = (function (name,tile_state,terrain_state,__meta,__extmap,__hash){
this.name = name;
this.tile_state = tile_state;
this.terrain_state = terrain_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22156,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22160 = k22156;
var G__22160__$1 = (((G__22160 instanceof cljs.core.Keyword))?G__22160.fqn:null);
switch (G__22160__$1) {
case "name":
return self__.name;

break;
case "tile-state":
return self__.tile_state;

break;
case "terrain-state":
return self__.terrain_state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22156,else__4388__auto__);

}
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22161){
var vec__22162 = p__22161;
var k__4408__auto__ = cljs.core.nth.call(null,vec__22162,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__22162,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#dungeon_builder.scripts.persistence.map-rep{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),self__.tile_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945),self__.terrain_state],null))], null),self__.__extmap));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22155){
var self__ = this;
var G__22155__$1 = this;
return (new cljs.core.RecordIter((0),G__22155__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,self__.tile_state,self__.terrain_state,self__.__meta,self__.__extmap,self__.__hash));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-718361349 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22157,other22158){
var self__ = this;
var this22157__$1 = this;
return (((!((other22158 == null)))) && ((this22157__$1.constructor === other22158.constructor)) && (cljs.core._EQ_.call(null,this22157__$1.name,other22158.name)) && (cljs.core._EQ_.call(null,this22157__$1.tile_state,other22158.tile_state)) && (cljs.core._EQ_.call(null,this22157__$1.terrain_state,other22158.terrain_state)) && (cljs.core._EQ_.call(null,this22157__$1.__extmap,other22158.__extmap)));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),null,new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,self__.tile_state,self__.terrain_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22155){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22165 = cljs.core.keyword_identical_QMARK_;
var expr__22166 = k__4393__auto__;
if(cljs.core.truth_(pred__22165.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22166))){
return (new dungeon_builder.scripts.persistence.map_rep(G__22155,self__.tile_state,self__.terrain_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22165.call(null,new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),expr__22166))){
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,G__22155,self__.terrain_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22165.call(null,new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945),expr__22166))){
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,self__.tile_state,G__22155,self__.__meta,self__.__extmap,null));
} else {
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,self__.tile_state,self__.terrain_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__22155),null));
}
}
}
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),self__.tile_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945),self__.terrain_state,null))], null),self__.__extmap));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22155){
var self__ = this;
var this__4384__auto____$1 = this;
return (new dungeon_builder.scripts.persistence.map_rep(self__.name,self__.tile_state,self__.terrain_state,G__22155,self__.__extmap,self__.__hash));
});

dungeon_builder.scripts.persistence.map_rep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

dungeon_builder.scripts.persistence.map_rep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"tile-state","tile-state",-1381786451,null),new cljs.core.Symbol(null,"terrain-state","terrain-state",-392370418,null)], null);
});

dungeon_builder.scripts.persistence.map_rep.cljs$lang$type = true;

dungeon_builder.scripts.persistence.map_rep.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"dungeon_builder.scripts.persistence/map-rep",null,(1),null));
});

dungeon_builder.scripts.persistence.map_rep.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"dungeon_builder.scripts.persistence/map-rep");
});

/**
 * Positional factory function for dungeon_builder.scripts.persistence/map-rep.
 */
dungeon_builder.scripts.persistence.__GT_map_rep = (function dungeon_builder$scripts$persistence$__GT_map_rep(name,tile_state,terrain_state){
return (new dungeon_builder.scripts.persistence.map_rep(name,tile_state,terrain_state,null,null,null));
});

/**
 * Factory function for dungeon_builder.scripts.persistence/map-rep, taking a map of keywords to field values.
 */
dungeon_builder.scripts.persistence.map__GT_map_rep = (function dungeon_builder$scripts$persistence$map__GT_map_rep(G__22159){
var extmap__4424__auto__ = (function (){var G__22168 = cljs.core.dissoc.call(null,G__22159,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945));
if(cljs.core.record_QMARK_.call(null,G__22159)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22168);
} else {
return G__22168;
}
})();
return (new dungeon_builder.scripts.persistence.map_rep(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22159),new cljs.core.Keyword(null,"tile-state","tile-state",1272649318).cljs$core$IFn$_invoke$arity$1(G__22159),new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945).cljs$core$IFn$_invoke$arity$1(G__22159),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

dungeon_builder.scripts.persistence.get_current_state = (function dungeon_builder$scripts$persistence$get_current_state(){
return window.localforage.getItem("mgg-dungeonbuilder-maps");
});
dungeon_builder.scripts.persistence.is_name_unique = (function dungeon_builder$scripts$persistence$is_name_unique(name,current){
var count_of = cljs.core.count.call(null,cljs.core.filter.call(null,(function (map){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map),name)){
return true;
} else {
return false;
}
}),current));
if(cljs.core._EQ_.call(null,count_of,(0))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.persistence.remove_item_to_update = (function dungeon_builder$scripts$persistence$remove_item_to_update(current,name){

return cljs.core.filter.call(null,(function (map){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(map),name)){
return false;
} else {
return true;
}
}),current);
});
dungeon_builder.scripts.persistence.delete_by_name = (function dungeon_builder$scripts$persistence$delete_by_name(name,local_maps){
return dungeon_builder.scripts.persistence.get_current_state.call(null).then((function (value){
var currentValue = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return window.localforage.setItem("mgg-dungeonbuilder-maps",cljs.core.clj__GT_js.call(null,dungeon_builder.scripts.persistence.remove_item_to_update.call(null,currentValue,name)),((function (currentValue){
return (function (result){
return dungeon_builder.scripts.persistence.get_current_state.call(null).then(((function (currentValue){
return (function (value__$1){
return cljs.core.reset_BANG_.call(null,local_maps,cljs.core.js__GT_clj.call(null,value__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(currentValue))
);
});})(currentValue))
).then();
}));
});
dungeon_builder.scripts.persistence.save_map = (function dungeon_builder$scripts$persistence$save_map(name,tile_state,terrain_state,loaded_map_name,currentMaps){

return dungeon_builder.scripts.persistence.get_current_state.call(null).then((function (value){
var currentValue = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(((dungeon_builder.scripts.persistence.is_name_unique.call(null,name,currentValue)) || (cljs.core._EQ_.call(null,name,loaded_map_name)))){
return window.localforage.setItem("mgg-dungeonbuilder-maps",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,dungeon_builder.scripts.persistence.remove_item_to_update.call(null,currentValue,name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"tile-state","tile-state",1272649318),cljs.core.deref.call(null,tile_state),new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945),cljs.core.deref.call(null,terrain_state)], null))),((function (currentValue){
return (function (result){
return dungeon_builder.scripts.persistence.get_current_state.call(null).then(((function (currentValue){
return (function (value__$1){
cljs.core.reset_BANG_.call(null,currentMaps,cljs.core.js__GT_clj.call(null,value__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));

return dungeon_builder.components.toast.fancy_alert.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Map Saved",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),true,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#4aa651;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4aa651;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"white;"], null)], null));
});})(currentValue))
);
});})(currentValue))
).then();
} else {
return dungeon_builder.components.toast.fancy_alert.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Name Not Unique",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),true,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#cc4a56;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #cc4a56;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"white;"], null)], null));
}
}));
});
dungeon_builder.scripts.persistence.load_maps = (function dungeon_builder$scripts$persistence$load_maps(){

return dungeon_builder.scripts.persistence.get_current_state.call(null);
});

//# sourceMappingURL=persistence.js.map
