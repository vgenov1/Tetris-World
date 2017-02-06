const Playfield = (function() {

    class Playfield {
        constructor($container) {
            this.$container = $container;

            this.grid();
        }

        grid () {
            for(let row = 0; row < 22; row++){
                $('#playfield').append('<tr class="'+row+'"></tr>');
                for (let col = 0; col < 10; col++){
                    $('.'+row).append('<td id="'+ col +'"></td>');
                }
            }
        }
    }


      startPosition = {row:2, col:5};
      defaultShape = 'L'
      currentPosition = [];


      fillCells = function (position,fillcolor) {
        for (let i = 0; i < position; i++) {
          let row = position[i].row;
          let col =position[i].cow;
          let $position = $('.'+row).find('#'+col);
          $position.attr('bgcolor',fillColor);
        }
    }

      move = function(direction){
        let reverse = false;
        this.fillCells(this.currentPos,'');

        for (let i=0; i<this.currentPos.length; i++){
          if(direction === 'right'){
            this.currentPos[i].col++;
            if(this.currentPos[i].col>9){
              reverse = true;
            } else if (direction === 'left'){
              this.currentPos[i].col--;
              if(this.currentPos[i].col<0){
                reverse = true;
              }
            }
          }
        }
        this.fillCells(this.currentPos,'yellow');


        if(direction === 'right'){
      		this.originPos.col++;
      	} else if (direction === 'left'){
      		this.originPos.col--;
      	}

      	this.fillCells(this.currentCoor,'yellow');

        if (reverse && (direction == 'left')) {
      		this.move('right');
      	}
      	else if (reverse && (direction == 'right')) {
      		this.move('left');
      	}
      }

      rotate = function () {
        let lastPiece = this.currentPiece;
        this.fillCells(this.currentPos,'');

        switch (this.currentPiece) {
          case 'L':
            this.currentPiece = 'L90';
            break;
          case 'L90':
            this.currentPiece = 'L180';
            break;
          case 'L180':
            this.currentPiece = 'L270';
            break;
          case 'L270':
            this.currentPiece = 'L';
            break;
          case 'J':
            this.currentPiece = 'J90';
            break;
          case 'J90':
            this.currentPiece = 'J180';
            break;
          case 'J180':
            this.currentPiece = 'J270';
            break;
          case 'J270':
            this.currentPiece = 'J';
            break;
          case 'I':
            this.currentPiece = 'I90';
            break;
          case 'I90':
            this.currentPiece = 'I';
            break;
          case 'S':
            this.currentPiece = 'S90';
            break;
          case 'S90':
            this.currentPiece = 'S';
            break
          case 'Z':
            this.currentPiece = 'Z90';
            break;
          case 'Z90':
            this.currentPiece = 'Z';
            break
          case 'T':
            this.currentPiece = 'T90';
            break;
          case 'T90':
            this.currentPiece = 'T180';
            break;
          case 'T180':
            this.currentPiece = 'T270';
            break;
          case 'T270':
            this.currentPiece = 'T';
            break;

          this.currentPos = this.pieceToPosition(this.currentPiece,this.originPos);

          for(let i=0;i<this.currentPos.length;i++){
        		if(this.currentPos[i].col>9 || this.currentPos[i].col<0){
        			this.currentPiece = lastPiece;
        		}
        	}
          this.currentPos = this.pieceToPosition(this.currentPiece,this.originPos);

          this.fillCells(this.currentPos,'yellow');
        }
      }


      pieceToPosition = function (piece,originPos) {
        switch (piece) {
        case piece === 'L':
        [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col+1}];
        break;
        case piece === 'J':
        [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col-1}];
        break;
        case piece === 'I':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-2,col:origin.col},{row:origin.row+1,col:origin.col}];
        break;
        case piece === 'O':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row,col:origin.col+1}];
        break;
        case piece === 'S':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}];
        break;
        case piece === 'T':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
        break;
        case piece === 'Z':
        [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row,col:origin.col+1}]
        break;
        case piece ==='L90':
        [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row+1,col:origin.col-1}];
        break;
        case piece ==='L180':
        [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col-1}];
        break;
        case piece === 'L270':
        [{row:origin.row,col:origin.col},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}];
        break;
        case piece === 'J90':
      	[{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row-1,col:origin.col-1}];
        break;
        case piece === 'J180':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row-1,col:origin.col+1}];
        break;
        case piece ==='J270':
      	[{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row+1,col:origin.col+1}];
        break;
      	case piece ==='I90':
      	[{row:origin.row,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1},{row:origin.row,col:origin.col+2}];
        break;
        case piece === 'S90':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row-2,col:origin.col-1}];
        break;
        case piece === 'Z90':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row-2,col:origin.col+1}];
        break;
        case piece === 'T90':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col+1}];
        break;
        case piece ==='T180':
      	[{row:origin.row,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}];
        break;
        case piece === 'T270':
      	[{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row,col:origin.col-1}];
        break;
        }
      }



    return Playfield;
  })();
