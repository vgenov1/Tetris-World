"use strict"
const ready = $(document).ready(function(){
  grid();
  currentPos = pieceToPosition(currentPiece,originPos);
  fillCells(currentPos,'yellow');
  $(document).keydown(function(e){
   console.log(e.keyCode); // delete this row
   if(e.keyCode === 39){
     move('right');
   } else if (e.keyCode === 37){
     move('left');
   } else if (e.keyCode === 38){
       rotate();
     }
 })
})
