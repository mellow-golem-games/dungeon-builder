// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.views.Stage');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.components.Controls');
goog.require('dungeon_builder.components.SaveOverlay');
goog.require('dungeon_builder.services.state.dispatcher');
goog.require('dungeon_builder.scripts.walls');
goog.require('dungeon_builder.scripts.terrain');
goog.require('dungeon_builder.scripts.position');
goog.require('clojure.string');
goog.require('module$Applications$server$dungeon_builder$node_modules$panzoom$index');
dungeon_builder.views.Stage.canvas_properties = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"panRef","panRef",992350203),null,new cljs.core.Keyword(null,"painting","painting",-1565142194),false,new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258),true,new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335),false,new cljs.core.Keyword(null,"tileType","tileType",472636133),"floor",new cljs.core.Keyword(null,"currentTile","currentTile",1481755860),"tile",new cljs.core.Keyword(null,"tileset","tileset",-1285577730),"basic",new cljs.core.Keyword(null,"show-save-overlay","show-save-overlay",-1833325629),false], null));
dungeon_builder.views.Stage.generate_canvas_rep = (function dungeon_builder$views$Stage$generate_canvas_rep(type){

var x = (50);
var canvas_build = cljs.core.PersistentVector.EMPTY;
while(true){
var canvas_row_values = (function (){var y = (50);
var canvas_build_inner = cljs.core.PersistentVector.EMPTY;
while(true){
if((y > (3000))){
return canvas_build_inner;
} else {
var G__22181 = (y + (50));
var G__22182 = cljs.core.conj.call(null,canvas_build_inner,((cljs.core._EQ_.call(null,type,"terrain"))?cljs.core.PersistentVector.EMPTY:cljs.core.PersistentArrayMap.EMPTY));
y = G__22181;
canvas_build_inner = G__22182;
continue;
}
break;
}
})();
if((x > (3000))){
return canvas_build;
} else {
var G__22183 = (x + (50));
var G__22184 = cljs.core.conj.call(null,canvas_build,canvas_row_values);
x = G__22183;
canvas_build = G__22184;
continue;
}
break;
}
});
dungeon_builder.views.Stage.canvas_rep = reagent.core.atom.call(null,dungeon_builder.views.Stage.generate_canvas_rep.call(null,"tile"));
dungeon_builder.views.Stage.canvas_terrain_rep = reagent.core.atom.call(null,dungeon_builder.views.Stage.generate_canvas_rep.call(null,"terrain"));
dungeon_builder.views.Stage.start_paint = (function dungeon_builder$views$Stage$start_paint(){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
}
})())){
return cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"painting","painting",-1565142194),true], null));
} else {
return null;
}
});
dungeon_builder.views.Stage.end_paint = (function dungeon_builder$views$Stage$end_paint(){
return cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"painting","painting",-1565142194),false], null));
});
dungeon_builder.views.Stage.get_tile_value = (function dungeon_builder$views$Stage$get_tile_value(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tileType","tileType",472636133).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"floor")){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tileType","tileType",472636133).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"wall")){
return (2);
} else {
return null;
}
}
});
dungeon_builder.views.Stage.get_tile_value_terrain = (function dungeon_builder$views$Stage$get_tile_value_terrain(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"small_wall")){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"small_wall_side")){
return (2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"door_tall")){
return (3);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"door_long")){
return (4);
} else {
return null;
}
}
}
}
});
dungeon_builder.views.Stage.get_tile_value_terrain_load = (function dungeon_builder$views$Stage$get_tile_value_terrain_load(val){
if(cljs.core._EQ_.call(null,val,(1))){
return "small_wall";
} else {
if(cljs.core._EQ_.call(null,val,(2))){
return "small_wall_side";
} else {
if(cljs.core._EQ_.call(null,val,(3))){
return "door_tall";
} else {
if(cljs.core._EQ_.call(null,val,(4))){
return "door_long";
} else {
return null;
}
}
}
}
});
dungeon_builder.views.Stage.handle_wall_orientation = (function dungeon_builder$views$Stage$handle_wall_orientation(y,x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tileType","tileType",472636133).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"wall")){
var wallMap = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"left","left",-399115937),dungeon_builder.scripts.walls.check_left.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"right","right",-452581833),dungeon_builder.scripts.walls.check_right.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"top","top",-1856271961),dungeon_builder.scripts.walls.check_top.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),dungeon_builder.scripts.walls.check_bottom.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"tright","tright",-513915502),dungeon_builder.scripts.walls.check_tright_corner.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"bright","bright",-1876684577),dungeon_builder.scripts.walls.check_bright_corner.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"tleft","tleft",-8475377),dungeon_builder.scripts.walls.check_tleft_corner.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep)),new cljs.core.Keyword(null,"bleft","bleft",1884770390),dungeon_builder.scripts.walls.check_bleft_corner.call(null,y,x,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_rep))], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_right";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_left";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_bottom";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_top";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"tright","tright",-513915502).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_corner_tright";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"bright","bright",-1876684577).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_corner_bright";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"tleft","tleft",-8475377).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_corner_tleft";
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"bleft","bleft",1884770390).cljs$core$IFn$_invoke$arity$1(wallMap))){
return "wall_tile_corner_bleft";
} else {
return null;
}
}
}
}
}
}
}
}
} else {
return new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
}
});
dungeon_builder.views.Stage.generate_tile_rep = (function dungeon_builder$views$Stage$generate_tile_rep(imgSrc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),dungeon_builder.views.Stage.get_tile_value.call(null),new cljs.core.Keyword(null,"tileset","tileset",-1285577730),new cljs.core.Keyword(null,"tileset","tileset",-1285577730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),new cljs.core.Keyword(null,"tile-name","tile-name",901350034),imgSrc], null);
});
dungeon_builder.views.Stage.update_canvas_rep = (function dungeon_builder$views$Stage$update_canvas_rep(x,y,imgSrc){
return cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_rep,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y / (50)),(x / (50))], null),cljs.core.conj,dungeon_builder.views.Stage.generate_tile_rep.call(null,imgSrc));
});
dungeon_builder.views.Stage.update_cavas_terrain_rep = (function dungeon_builder$views$Stage$update_cavas_terrain_rep(x,y){
return cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_terrain_rep,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y / (50)),(x / (50))], null),cljs.core.conj,dungeon_builder.views.Stage.get_tile_value_terrain.call(null));
});
dungeon_builder.views.Stage.get_random_tile = (function dungeon_builder$views$Stage$get_random_tile(current_tile){
if(cljs.core._EQ_.call(null,current_tile,"tile")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_tile),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(3)))].join('');
} else {
return current_tile;
}
});
dungeon_builder.views.Stage.get_img_src = (function dungeon_builder$views$Stage$get_img_src(event){
return dungeon_builder.views.Stage.get_random_tile.call(null,dungeon_builder.views.Stage.handle_wall_orientation.call(null,(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + event.clientY) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))) / (50)),(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + event.clientX) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))) / (50))));
});
dungeon_builder.views.Stage.draw_img_to_canvas = (function dungeon_builder$views$Stage$draw_img_to_canvas(ctx,imgObj,event){
return ctx.drawImage(imgObj,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))));
});
dungeon_builder.views.Stage.draw_terrain_img_to_canvas = (function dungeon_builder$views$Stage$draw_terrain_img_to_canvas(event){
var imgObj = (new Image());
var imgSrc = dungeon_builder.views.Stage.get_img_src.call(null,event);
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
if(clojure.string.includes_QMARK_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"door")){
return dungeon_builder.scripts.terrain.draw_door.call(null,ctx,event,imgObj,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties),dungeon_builder.views.Stage.update_cavas_terrain_rep);
} else {
return dungeon_builder.scripts.terrain.draw_terrain_wall.call(null,ctx,event,imgObj,cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties),dungeon_builder.views.Stage.update_cavas_terrain_rep);
}
});
dungeon_builder.views.Stage.paint_to_canvas = (function dungeon_builder$views$Stage$paint_to_canvas(event){
event.persist();

if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"painting","painting",-1565142194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tileType","tileType",472636133).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),"terrain")){
return dungeon_builder.views.Stage.draw_terrain_img_to_canvas.call(null,event);
} else {
dungeon_builder.views.Stage.canvas = document.getElementById("Canvas");

dungeon_builder.views.Stage.ctx = dungeon_builder.views.Stage.canvas.getContext("2d");

var imgObj = (new Image());
var tileset = new cljs.core.Keyword(null,"tileset","tileset",-1285577730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
var imgSrc = dungeon_builder.views.Stage.get_img_src.call(null,event);
(imgObj["src"] = ["./tiles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tileset),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(imgSrc),".jpg"].join(''));

return (imgObj["onload"] = ((function (imgObj,tileset,imgSrc){
return (function (){
dungeon_builder.views.Stage.update_canvas_rep.call(null,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50))),imgSrc);

return dungeon_builder.views.Stage.draw_img_to_canvas.call(null,dungeon_builder.views.Stage.ctx,imgObj,event);
});})(imgObj,tileset,imgSrc))
);
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"painting","painting",-1565142194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties));
} else {
return and__4120__auto__;
}
})())){
var x = ((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50)));
var y = ((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties))),(50)));
dungeon_builder.views.Stage.ctx.clearRect(x,y,(50),(50));

dungeon_builder.views.Stage.ctx.beginPath();

dungeon_builder.views.Stage.ctx.moveTo(x,y);

dungeon_builder.views.Stage.ctx.lineTo(((50) + x),y);

dungeon_builder.views.Stage.ctx.lineTo(((50) + x),((50) + y));

dungeon_builder.views.Stage.ctx.lineTo(x,((50) + y));

dungeon_builder.views.Stage.ctx.lineTo(x,y);

return dungeon_builder.views.Stage.ctx.stroke();
} else {
return null;
}
}
});
dungeon_builder.views.Stage.draw_canvas_lines = (function dungeon_builder$views$Stage$draw_canvas_lines(){
var zoomElem = document.querySelector("#Canvas");
var ctx = zoomElem.getContext("2d");
var x = (50);
while(true){
if((x > (3000))){
return true;
} else {
ctx.beginPath();

ctx.moveTo((0),x);

ctx.lineTo((3000),x);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(x,(0));

ctx.lineTo(x,(3000));

ctx.stroke();

var G__22185 = (x + (50));
x = G__22185;
continue;
}
break;
}
});
dungeon_builder.views.Stage.render_canvas = (function dungeon_builder$views$Stage$render_canvas(){
var zoomElem = document.querySelector("#Canvas");
var ctx = zoomElem.getContext("2d");
dungeon_builder.views.Stage.panHandler = module$Applications$server$dungeon_builder$node_modules$panzoom$index["default"](zoomElem,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(1),new cljs.core.Keyword(null,"minZoom","minZoom",1002989305),0.3,new cljs.core.Keyword(null,"minScale","minScale",1093857194),(1),new cljs.core.Keyword(null,"boundsPadding","boundsPadding",-909561009),(1),new cljs.core.Keyword(null,"transformOrigin","transformOrigin",975277927),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),0.5,new cljs.core.Keyword(null,"y","y",-1757859776),0.5], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455),true], null)));

cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panRef","panRef",992350203),dungeon_builder.views.Stage.panHandler], null));

dungeon_builder.views.Stage.panHandler.zoomAbs((-1500),(-1500),0.75);

dungeon_builder.views.Stage.panHandler.pause();

dungeon_builder.views.Stage.panHandler.on("transform",((function (zoomElem,ctx){
return (function (e){
return cljs.core.swap_BANG_.call(null,dungeon_builder.views.Stage.canvas_properties,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),e.getTransform().scale], null));
});})(zoomElem,ctx))
);

var x = (50);
while(true){
if((x > (3000))){
return true;
} else {
ctx.beginPath();

ctx.moveTo((0),x);

ctx.lineTo((3000),x);

ctx.stroke();

ctx.beginPath();

ctx.moveTo(x,(0));

ctx.lineTo(x,(3000));

ctx.stroke();

var G__22186 = (x + (50));
x = G__22186;
continue;
}
break;
}
});
dungeon_builder.views.Stage.map_load_paint_tiles = (function dungeon_builder$views$Stage$map_load_paint_tiles(tile_map){

var rowIndex = (0);
var tiles = tile_map;
while(true){
if((cljs.core.count.call(null,tiles) > (0))){
var innerRowIndex_22187 = (0);
var tileRow_22188 = cljs.core.nth.call(null,tiles,(0));
while(true){
if((cljs.core.count.call(null,tileRow_22188) > (0))){
if(((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tileRow_22188,(0))))) || (cljs.core._EQ_.call(null,(2),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tileRow_22188,(0))))))){
dungeon_builder.views.Stage.canvas = document.getElementById("Canvas");

dungeon_builder.views.Stage.ctx = dungeon_builder.views.Stage.canvas.getContext("2d");

var imgObj_22189 = (new Image());
(imgObj_22189["src"] = ["./tiles/basic/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tile-name","tile-name",901350034).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,tileRow_22188,(0)))),".jpg"].join(''));

(imgObj_22189["onload"] = ((function (innerRowIndex_22187,tileRow_22188,rowIndex,tiles,imgObj_22189){
return (function (){
return dungeon_builder.views.Stage.ctx.drawImage(imgObj_22189,((50) * innerRowIndex_22187),((50) * rowIndex));
});})(innerRowIndex_22187,tileRow_22188,rowIndex,tiles,imgObj_22189))
);
} else {
}

var G__22190 = ((1) + innerRowIndex_22187);
var G__22191 = cljs.core.drop.call(null,(1),tileRow_22188);
innerRowIndex_22187 = G__22190;
tileRow_22188 = G__22191;
continue;
} else {
}
break;
}

var G__22192 = ((1) + rowIndex);
var G__22193 = cljs.core.drop.call(null,(1),tiles);
rowIndex = G__22192;
tiles = G__22193;
continue;
} else {
return null;
}
break;
}
});
dungeon_builder.views.Stage.map_load_paint_terrain = (function dungeon_builder$views$Stage$map_load_paint_terrain(terrain_map){

var rowIndex = (0);
var tiles = terrain_map;
while(true){
if((cljs.core.count.call(null,tiles) > (0))){
var innerRowIndex_22194 = (0);
var tileRow_22195 = cljs.core.nth.call(null,tiles,(0));
while(true){
if((cljs.core.count.call(null,tileRow_22195) > (0))){
if((cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.nth.call(null,tileRow_22195,(0)))) > (0))){
var terrainObj_22196 = cljs.core.distinct.call(null,cljs.core.nth.call(null,tileRow_22195,(0)));
while(true){
if((cljs.core.count.call(null,terrainObj_22196) > (0))){
var imgObj_22197 = (new Image());
var imgSrc_22198 = dungeon_builder.views.Stage.get_tile_value_terrain_load.call(null,cljs.core.nth.call(null,terrainObj_22196,(0)));
var canvas_22199 = document.getElementById("Canvas");
var ctx_22200 = canvas_22199.getContext("2d");
if(clojure.string.includes_QMARK_.call(null,imgSrc_22198,"door")){
(imgObj_22197["src"] = ["./tiles/terrain/",imgSrc_22198,".png"].join(''));

(imgObj_22197["onload"] = ((function (terrainObj_22196,innerRowIndex_22194,tileRow_22195,rowIndex,tiles,imgObj_22197,imgSrc_22198,canvas_22199,ctx_22200){
return (function (){
if(clojure.string.includes_QMARK_.call(null,imgSrc_22198,"door_tall")){
return ctx_22200.drawImage(imgObj_22197,(((50) * innerRowIndex_22194) - (5)),(((50) * rowIndex) + (12)));
} else {
return ctx_22200.drawImage(imgObj_22197,(((50) * innerRowIndex_22194) + (12)),(((50) * rowIndex) - (5)));
}
});})(terrainObj_22196,innerRowIndex_22194,tileRow_22195,rowIndex,tiles,imgObj_22197,imgSrc_22198,canvas_22199,ctx_22200))
);
} else {
(imgObj_22197["src"] = ["./tiles/terrain/",imgSrc_22198,".jpg"].join(''));

(imgObj_22197["onload"] = ((function (terrainObj_22196,innerRowIndex_22194,tileRow_22195,rowIndex,tiles,imgObj_22197,imgSrc_22198,canvas_22199,ctx_22200){
return (function (){
return ctx_22200.drawImage(imgObj_22197,((50) * innerRowIndex_22194),(((50) * rowIndex) - (2)));
});})(terrainObj_22196,innerRowIndex_22194,tileRow_22195,rowIndex,tiles,imgObj_22197,imgSrc_22198,canvas_22199,ctx_22200))
);
}

var G__22201 = cljs.core.drop.call(null,(1),terrainObj_22196);
terrainObj_22196 = G__22201;
continue;
} else {
}
break;
}
} else {
}

var G__22202 = ((1) + innerRowIndex_22194);
var G__22203 = cljs.core.drop.call(null,(1),tileRow_22195);
innerRowIndex_22194 = G__22202;
tileRow_22195 = G__22203;
continue;
} else {
}
break;
}

var G__22204 = ((1) + rowIndex);
var G__22205 = cljs.core.drop.call(null,(1),tiles);
rowIndex = G__22204;
tiles = G__22205;
continue;
} else {
return null;
}
break;
}
});
dungeon_builder.views.Stage.clear_canvas = (function dungeon_builder$views$Stage$clear_canvas(){
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
return ctx.clearRect((0),(0),(3000),(3000));
});
dungeon_builder.views.Stage.handle_on_map_load = (function dungeon_builder$views$Stage$handle_on_map_load(loaded_map){

dungeon_builder.views.Stage.clear_canvas.call(null);

dungeon_builder.views.Stage.draw_canvas_lines.call(null);

dungeon_builder.views.Stage.map_load_paint_tiles.call(null,new cljs.core.Keyword(null,"tile-state","tile-state",1272649318).cljs$core$IFn$_invoke$arity$1(loaded_map));

return dungeon_builder.views.Stage.map_load_paint_terrain.call(null,new cljs.core.Keyword(null,"terrain-state","terrain-state",-2032901945).cljs$core$IFn$_invoke$arity$1(loaded_map));
});
dungeon_builder.views.Stage.Stage = (function dungeon_builder$views$Stage$Stage(loaded_map,view_state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"canvas",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
dungeon_builder.views.Stage.render_canvas.call(null);

return cljs.core.println.call(null,"component-did-mount");
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
return null;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (loaded_map__$1,view_state__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Stage","div.Stage",1787088774),(cljs.core.truth_(cljs.core.deref.call(null,loaded_map__$1))?dungeon_builder.views.Stage.handle_on_map_load.call(null,cljs.core.deref.call(null,loaded_map__$1)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.components.Controls.Controls,dungeon_builder.views.Stage.canvas_properties,view_state__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.components.SaveOverlay.SaveOverlay,new cljs.core.Keyword(null,"show-save-overlay","show-save-overlay",-1833325629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dungeon_builder.views.Stage.canvas_properties)),dungeon_builder.views.Stage.canvas_rep,dungeon_builder.views.Stage.canvas_terrain_rep], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvasParent","div.canvasParent",19441828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#Canvas","canvas#Canvas",-607603372),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"3000px",new cljs.core.Keyword(null,"height","height",1025178622),"3000px",new cljs.core.Keyword(null,"on-mouseDown","on-mouseDown",1911204320),(function (p1__22206_SHARP_){
return (function (){
dungeon_builder.views.Stage.start_paint.call(null);

return dungeon_builder.views.Stage.paint_to_canvas.call(null,p1__22206_SHARP_);
})()
.call(null);
}),new cljs.core.Keyword(null,"on-mouseUp","on-mouseUp",-1829072178),(function (){
return dungeon_builder.views.Stage.end_paint.call(null);
}),new cljs.core.Keyword(null,"on-mouseMove","on-mouseMove",-78941277),(function (p1__22207_SHARP_){
return dungeon_builder.views.Stage.paint_to_canvas.call(null,p1__22207_SHARP_);
}),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (p1__22208_SHARP_){
return (function (){
dungeon_builder.views.Stage.start_paint.call(null);

return dungeon_builder.views.Stage.paint_to_canvas.call(null,p1__22208_SHARP_);
})()
.call(null);
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (){
return dungeon_builder.views.Stage.end_paint.call(null);
}),new cljs.core.Keyword(null,"on-touch-move","on-touch-move",1587118423),(function (p1__22209_SHARP_){
return dungeon_builder.views.Stage.paint_to_canvas.call(null,p1__22209_SHARP_);
})], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=Stage.js.map