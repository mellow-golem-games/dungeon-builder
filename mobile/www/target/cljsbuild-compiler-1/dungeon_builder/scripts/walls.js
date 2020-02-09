// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.scripts.walls');
goog.require('cljs.core');
dungeon_builder.scripts.walls.check_left = (function dungeon_builder$scripts$walls$check_left(y,x,canvas_rep){
if(((((x - (1)) >= (0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,y),(x - (1)))),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_right = (function dungeon_builder$scripts$walls$check_right(y,x,canvas_rep){
if(((((x + (1)) < (60))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,y),(x + (1)))),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_top = (function dungeon_builder$scripts$walls$check_top(y,x,canvas_rep){
if(((((y - (1)) >= (0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y - (1))),x)),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_bottom = (function dungeon_builder$scripts$walls$check_bottom(y,x,canvas_rep){
if(((((y + (1)) < (60))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y + (1))),x)),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_tright_corner = (function dungeon_builder$scripts$walls$check_tright_corner(y,x,canvas_rep){
if(((((y + (1)) < (60))) && (((x - (1)) >= (0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y + (1))),(x - (1)))),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_bright_corner = (function dungeon_builder$scripts$walls$check_bright_corner(y,x,canvas_rep){
if(((((y - (1)) >= (0))) && (((x - (1)) >= (0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y - (1))),(x - (1)))),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_tleft_corner = (function dungeon_builder$scripts$walls$check_tleft_corner(y,x,canvas_rep){
if(((((y + (1)) < (60))) && (((x + (1)) < (60))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y + (1))),(x + (1)))),(1))))){
return true;
} else {
return false;
}
});
dungeon_builder.scripts.walls.check_bleft_corner = (function dungeon_builder$scripts$walls$check_bleft_corner(y,x,canvas_rep){
if(((((y - (1)) >= (0))) && (((x + (1)) < (60))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.nth.call(null,canvas_rep,(y - (1))),(x + (1)))),(1))))){
return true;
} else {
return false;
}
});

//# sourceMappingURL=walls.js.map
