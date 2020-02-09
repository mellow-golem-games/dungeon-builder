// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.scripts.position');
goog.require('cljs.core');
dungeon_builder.scripts.position.get_x_position = (function dungeon_builder$scripts$position$get_x_position(event){
if(cljs.core.truth_(event.clientX)){
return event.clientX;
} else {
return ((event.touches[(0)])["pageX"]);
}
});
dungeon_builder.scripts.position.get_y_position = (function dungeon_builder$scripts$position$get_y_position(event){
if(cljs.core.truth_(event.clientY)){
return event.clientY;
} else {
return ((event.touches[(0)])["pageY"]);
}
});

//# sourceMappingURL=position.js.map
