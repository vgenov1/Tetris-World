//Global object
const tetris = {};

//Draw the grid
tetris.drawGrid = function() {
	for(let row = 0; row < 22; row++){
		$('#playfield').append('<tr class="'+row+'"></tr>');
		for (let col = 0; col < 10; col++){
			let $cell = $('.'+row).append('<td id="'+ col +'"></td>');
			$cell.attr('bgcolor',this.emptyColor);
		}
	}
}

//Variables
tetris.currentCoor = [{row:1,col:1},{row:1,col:2},{row:2,col:1},{row:2,col:2}];
tetris.emptyColor='#1a1c1b';
//tetris.emptyColor='#d9dddb';
tetris.currentShape = 'L';
tetris.origin = {row:1,col:5};
tetris.currentColor = '#fc5e08';

tetris.endGame;

//Fill the cells
tetris.fillCells = function(coordinates,fillColor){
	for(var i = 0; i < coordinates.length; i++){
		var row = coordinates[i].row;
		var col = coordinates[i].col;
		var $coor = $('.'+row).find('#'+col);
		$coor.attr('bgcolor',fillColor);
	}
}

//Move current shape
tetris.move = function(direction) {
	this.fillCells(this.currentCoor,this.emptyColor);  //clear previous state of the shape
	
	if(direction === 'right'){
		this.origin.col++;
	} else if (direction === 'left'){
		this.origin.col--;
	}

	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);

	if (this.ifReverse()) {
		if(direction === 'right'){
			this.origin.col--;
		} else if (direction === 'left'){
			this.origin.col++;
		}
 	}

 	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);
 	this.fillCells(this.currentCoor,this.currentColor);
}

//Rotate Shape
tetris.rotate = function(){
	let lastShape = this.currentShape;
	this.fillCells(this.currentCoor,this.emptyColor);

	if(this.currentShape === 'L'){
		this.currentShape = 'L90';
	} else if(this.currentShape === 'L90'){
		this.currentShape = 'L180';
	} else if(this.currentShape === 'L180'){
		this.currentShape = 'L270';
	} else if(this.currentShape === 'L270'){
		this.currentShape = 'L';
	} else if(this.currentShape === 'J'){
		this.currentShape = 'J90';
	} else if(this.currentShape === 'J90'){
		this.currentShape = 'J180';
	} else if(this.currentShape === 'J180'){
		this.currentShape = 'J270';
	} else if(this.currentShape === 'J270'){
		this.currentShape = 'J';
	} else if(this.currentShape === 'I'){
		this.currentShape = 'I90';
	} else if(this.currentShape === 'I90'){
		this.currentShape = 'I';
	} else if(this.currentShape === 'S'){
		this.currentShape = 'S90';
	} else if(this.currentShape === 'S90'){
		this.currentShape = 'S';
	} else if(this.currentShape === 'Z'){
		this.currentShape = 'Z90';
	} else if(this.currentShape === 'Z90'){
		this.currentShape = 'Z';
	} else if(this.currentShape === 'T'){
		this.currentShape = 'T90';
	} else if(this.currentShape === 'T90'){
		this.currentShape = 'T180';
	} else if(this.currentShape === 'T180'){
		this.currentShape = 'T270';
	} else if(this.currentShape === 'T270'){
		this.currentShape = 'T';
	}

	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);

	for(var i = 0; i < this.currentCoor.length; i++){
		if(this.ifReverse()){
			this.currentShape = lastShape;
		}
	}

	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);

	this.fillCells(this.currentCoor,this.currentColor);
}

//Define all shapes
tetris.shapeToCoor = function(shape,origin){// origin e centyra na figurata
	if(shape === 'L'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col+1}]
	} else if(shape === 'J'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col-1}]
	} else if(shape === 'I'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-2,col:origin.col},{row:origin.row+1,col:origin.col}]
	} else if(shape === 'O'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'S'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}]
	} else if(shape === 'T'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	}  else if(shape === 'Z'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'L90'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row+1,col:origin.col-1}];
	} else if(shape === 'L180'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col-1}];
	} else if(shape === 'L270'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}];
	} else if(shape === 'J90'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row-1,col:origin.col-1}]
	} else if(shape === 'J180'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col+1}]
	} else if(shape === 'J270'){ 
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row+1,col:origin.col+1}]
	} else if(shape === 'I90'){
		return [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col+2}]
	} else if(shape === 'S90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row-2,col:origin.col-1}]
	} else if(shape === 'Z90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row-2,col:origin.col+1}]
	} else if(shape === 'T90'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'T180'){
		return [{row:origin.row,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'T270'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1}]
	} 
}


//Drop down the shape row by row
tetris.dropDownShape = function() {
	var reverse = false;

	this.fillCells(this.currentCoor,this.emptyColor);
	this.origin.row++;

	for (var i = 0; i < this.currentCoor.length; i++){
		this.currentCoor[i].row++;
		if (this.ifReverse()) {
		 	reverse = true;
		}
	}

	if (reverse){
		for (var i = 0; i < this.currentCoor.length; i++){
			this.currentCoor[i].row--;
		}
		this.origin.row--;
	}

	this.fillCells(this.currentCoor,this.currentColor);

	if (reverse) {
		this.fillCells(this.currentCoor,this.currentColor);
		this.emptyFullRow();
		this.newRandomShape();
	}
}

//New random shape
tetris.newRandomShape = function (){
	var random = Math.floor(Math.random()*7);
	var shapeArray = ['L','J','I','O','S','T','Z'];
	var shapesColors = ['#fc5a0a', '#2626f5', '#0bc4c4', '#ffff03', '#0aca0a', '#aa00ff', '#ff0000'];
	this.currentShape = shapeArray[random];
	this.currentColor = shapesColors[random];
	this.origin = {row:2,col:5};
	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);
	if (this.ifReverse()) {
		this.endGame();
	}
}

//If we need to reverse
tetris.ifReverse = function() {
	for (var i = 0; i < this.currentCoor.length; i++) {
		var row = this.currentCoor[i].row;
		var col = this.currentCoor[i].col;
		var $coor = $('.'+row).find('#'+col);
		let bgCol=$coor.attr('bgcolor');
		if ($coor.length === 0 ||
			(bgCol !== undefined && bgCol !== this.emptyColor)) {
			return true;
		}
	}
	return false;
}

//Empty full row
tetris.emptyFullRow = function() {
	var drops = 0;

	for (var i = 21; i >= 0; i--) {

		var rowIsFull = true;

		for (var j = 0; j < 10; j++) {
			var $coor = $('.'+i).find('#'+j);
			let bgCol=$coor.attr('bgcolor');
			if (bgCol === undefined || bgCol === this.emptyColor){
				rowIsFull = false;
			}

			if (drops > 0) {
				var $newCoor = $('.'+(i+drops)).find('#'+j);
				$newCoor.attr('bgcolor',$coor.attr('bgcolor'));
			}
		}

		if (rowIsFull) {
			drops++;
		}
	}
}

$('.fa-play-circle').click(function(){
	tetris.drawGrid();
	tetris.currentCoor = tetris.shapeToCoor(tetris.currentShape,tetris.origin);
	tetris.fillCells(tetris.currentCoor,tetris.currentColor);
	$(document).keydown(function(e){
		console.log(e.keyCode); // delete this row
		if(e.keyCode === 39){
			tetris.move('right');
		} else if (e.keyCode === 37){
			tetris.move('left');
		} else if (e.keyCode === 38){
				tetris.rotate();
			}
			else if (e.keyCode === 40){
				tetris.dropDownShape();
			}
	})

	//Free fall of the shape
	var freeFall = setInterval(function (){
		tetris.dropDownShape();
	},500);
	tetris.endGame = function() {
		clearInterval(freeFall);
		$(document).off('keydown');
		$('.game-over-popUp').removeClass('dNI');
	};
})