// Compiled by ClojureScript 1.10.520 {}
goog.provide('dungeon_builder.components.Controls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dungeon_builder.components.Walls');
dungeon_builder.components.Controls.handle_image_save = (function dungeon_builder$components$Controls$handle_image_save(){
return window.canvas2ImagePlugin.saveImageDataToLibrary((function (){
return alert("Image Saved!");
}),(function (){
return console.log("An Error Occurred");
}),document.getElementById("Canvas"));
});
dungeon_builder.components.Controls.pause_zoom = (function dungeon_builder$components$Controls$pause_zoom(props){
cljs.core.swap_BANG_.call(null,props,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258),true,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860),""], null));

return new cljs.core.Keyword(null,"panRef","panRef",992350203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)).pause();
});
dungeon_builder.components.Controls.resume_zoom = (function dungeon_builder$components$Controls$resume_zoom(props){
cljs.core.swap_BANG_.call(null,props,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258),false,new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335),false,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860),"pan"], null));

return new cljs.core.Keyword(null,"panRef","panRef",992350203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,props)).resume();
});
dungeon_builder.components.Controls.update_current_tile = (function dungeon_builder$components$Controls$update_current_tile(props,name,type,set){
dungeon_builder.components.Controls.pause_zoom.call(null,props);

return cljs.core.swap_BANG_.call(null,props,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"currentTile","currentTile",1481755860),name,new cljs.core.Keyword(null,"tileType","tileType",472636133),type,new cljs.core.Keyword(null,"tileset","tileset",-1285577730),set,new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335),false], null));
});
dungeon_builder.components.Controls.toggle_walls = (function dungeon_builder$components$Controls$toggle_walls(control_settings,bool){
return cljs.core.swap_BANG_.call(null,control_settings,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"walls","walls",-268788818),bool], null));
});
dungeon_builder.components.Controls.set_erase = (function dungeon_builder$components$Controls$set_erase(props){
dungeon_builder.components.Controls.pause_zoom.call(null,props);

return cljs.core.swap_BANG_.call(null,props,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335),true,new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258),false], null));
});
dungeon_builder.components.Controls.handle_home = (function dungeon_builder$components$Controls$handle_home(view_state){
return cljs.core.reset_BANG_.call(null,view_state,"home");
});
dungeon_builder.components.Controls.toggle_save_overlay = (function dungeon_builder$components$Controls$toggle_save_overlay(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-save-overlay","show-save-overlay",-1833325629),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-save-overlay","show-save-overlay",-1833325629).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null));
});
dungeon_builder.components.Controls.Controls = (function dungeon_builder$components$Controls$Controls(canvas_properties,view_state){
var control_settings = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"walls","walls",-268788818),false], null));
return ((function (control_settings){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Controls","div.Controls",-1800465364),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Controls__inner","div.Controls__inner",556650798),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dungeon_builder.components.Walls.Walls,dungeon_builder.components.Controls.update_current_tile,canvas_properties,control_settings,dungeon_builder.components.Controls.toggle_walls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"paint-mode","paint-mode",728644258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canvas_properties)))?"active":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"./tiles/basic/tile-1.jpg",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.toggle_walls.call(null,control_settings,true);
});})(control_settings))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tiles"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 448 512",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentTile","currentTile",1481755860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canvas_properties)),"pan"))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.resume_zoom.call(null,canvas_properties);
});})(control_settings))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Pan/Zoom"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 448 512",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"erase-mode","erase-mode",1775891335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,canvas_properties)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.set_erase.call(null,canvas_properties);
});})(control_settings))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Erase"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 448 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.toggle_save_overlay.call(null,canvas_properties);
});})(control_settings))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Save"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 448 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.handle_image_save.call(null);
});})(control_settings))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Download"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ControlItem","div.ControlItem",1495846211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 448 512",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (control_settings){
return (function (){
return dungeon_builder.components.Controls.handle_home.call(null,view_state);
});})(control_settings))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"d","d",1972142424),"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Home"], null)], null)], null)], null);
});
;})(control_settings))
});

//# sourceMappingURL=Controls.js.map