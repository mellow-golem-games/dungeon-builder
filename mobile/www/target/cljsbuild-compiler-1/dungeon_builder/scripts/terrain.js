// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.scripts.terrain');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dungeon_builder.scripts.position');
dungeon_builder.scripts.terrain.draw_door = (function dungeon_builder$scripts$terrain$draw_door(ctx,event,imgObj,canvas_properties,update_canvas_rep){
(imgObj["src"] = ["./tiles/terrain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(canvas_properties)),".png"].join(''));

return (imgObj["onload"] = (function (){
if(clojure.string.includes_QMARK_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(canvas_properties),"door_tall")){
ctx.drawImage(imgObj,(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))) - (5)),(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))) + (12)));
} else {
ctx.drawImage(imgObj,(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))) + (12)),(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))) - (5)));
}

return update_canvas_rep.call(null,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))));
}));
});
dungeon_builder.scripts.terrain.draw_terrain_wall = (function dungeon_builder$scripts$terrain$draw_terrain_wall(ctx,event,imgObj,canvas_properties,update_canvas_rep){

(imgObj["src"] = ["./tiles/terrain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(canvas_properties)),".jpg"].join(''));

return (imgObj["onload"] = (function (){
ctx.drawImage(imgObj,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))),(((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))) - (2)));

return update_canvas_rep.call(null,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))));
}));
});
dungeon_builder.scripts.terrain.draw_trap = (function dungeon_builder$scripts$terrain$draw_trap(ctx,event,imgObj,canvas_properties,update_canvas_rep){
(imgObj["src"] = ["./tiles/terrain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(canvas_properties)),".png"].join(''));

return (imgObj["onload"] = (function (){
ctx.drawImage(imgObj,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))));

return update_canvas_rep.call(null,((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().x) + dungeon_builder.scripts.position.get_x_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))),((50) * cljs.core.quot.call(null,((((-1) * event.target.getBoundingClientRect().y) + dungeon_builder.scripts.position.get_y_position.call(null,event)) / new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(canvas_properties)),(50))));
}));
});

//# sourceMappingURL=terrain.js.map
