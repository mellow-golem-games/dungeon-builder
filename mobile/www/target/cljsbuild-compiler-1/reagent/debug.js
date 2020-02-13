// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21608__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21609__i = 0, G__21609__a = new Array(arguments.length -  0);
while (G__21609__i < G__21609__a.length) {G__21609__a[G__21609__i] = arguments[G__21609__i + 0]; ++G__21609__i;}
  args = new cljs.core.IndexedSeq(G__21609__a,0,null);
} 
return G__21608__delegate.call(this,args);};
G__21608.cljs$lang$maxFixedArity = 0;
G__21608.cljs$lang$applyTo = (function (arglist__21610){
var args = cljs.core.seq(arglist__21610);
return G__21608__delegate(args);
});
G__21608.cljs$core$IFn$_invoke$arity$variadic = G__21608__delegate;
return G__21608;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21611__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21612__i = 0, G__21612__a = new Array(arguments.length -  0);
while (G__21612__i < G__21612__a.length) {G__21612__a[G__21612__i] = arguments[G__21612__i + 0]; ++G__21612__i;}
  args = new cljs.core.IndexedSeq(G__21612__a,0,null);
} 
return G__21611__delegate.call(this,args);};
G__21611.cljs$lang$maxFixedArity = 0;
G__21611.cljs$lang$applyTo = (function (arglist__21613){
var args = cljs.core.seq(arglist__21613);
return G__21611__delegate(args);
});
G__21611.cljs$core$IFn$_invoke$arity$variadic = G__21611__delegate;
return G__21611;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
