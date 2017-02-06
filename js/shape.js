"use strict"
  class Shape extends Game {
    constructor(shapeType, startPosition, fillCells, move, rotate, shapeToCoor) {
      super();
      this.shapeType = shapeType;
      this.startPosition = startPosition;


      this.fillCells();
      this.move();
      this.rotate();
      this.shapeToCoor();
  }

    fillCells (coordinates, fillColor) {
      for (let i = 0; i < coordinates.length; i++){
        let row = coordinates[i].row;
        let col = coordinates[i].col;
        let $coor = $('.'+row).find('#'+col);
        $coor.attr('bgcolor',fillColor);
        }
      }
    }

    move (direction){
  	this.fillCells(this.currentCoor,this.emptyColor);  //clear previous state of the shape

  	//move centura na figurata
  	if(direction === 'right'){
  		this.origin.col++;
  	} else if (direction === 'left'){
  		this.origin.col--;
  	}
  	//this.fillCells(this.currentCoor,'yellow');
  	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);

  	//da ne izliza ot poleto
  	// if (reverse && (direction == 'left')) {
  	// 	this.move('right');
  	// }
  	// else if (reverse && (direction == 'right')) {
  	// 	this.move('left');
  	// }
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

  rotate (){
  	//var reverse = false;
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

  	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin); // zadavame koordinatite na novata figura

  	for(var i = 0; i < this.currentCoor.length; i++){//proverqwame za greshka
  		if(this.ifReverse()){
  			this.currentShape = lastShape;
  			// break;
  		}
  	}

  	this.currentCoor = this.shapeToCoor(this.currentShape,this.origin);

  	this.fillCells(this.currentCoor,this.currentColor); // risuva novata figura
  }

  //Define all shapes
  shapeToCoor (shape,origin){// origin e centyra na figurata
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


}
