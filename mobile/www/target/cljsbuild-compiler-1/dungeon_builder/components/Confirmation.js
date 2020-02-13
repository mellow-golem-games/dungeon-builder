// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.components.Confirmation');
goog.require('cljs.core');
dungeon_builder.components.Confirmation.hide_confirmation = (function dungeon_builder$components$Confirmation$hide_confirmation(state){
return cljs.core.reset_BANG_.call(null,state,false);
});
dungeon_builder.components.Confirmation.Confirmation = (function dungeon_builder$components$Confirmation$Confirmation(show,on_confirm,on_reject){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Confirmation","div.Confirmation",-700754518),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,show))?"active":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ConfirmationInnerWrapper","div.ConfirmationInnerWrapper",-1206492010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Are You Sure You Want To Delete This Map?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CofirmationButtonWrapper","div.CofirmationButtonWrapper",-309155065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.success","button.success",692159507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.comp.call(null,dungeon_builder.components.Confirmation.hide_confirmation.call(null,show),on_confirm.call(null));
})], null),"Yes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.warning","button.warning",-1812425145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.comp.call(null,dungeon_builder.components.Confirmation.hide_confirmation.call(null,show),on_reject.call(null));
})], null),"No"], null)], null)], null)], null);
});

//# sourceMappingURL=Confirmation.js.map
