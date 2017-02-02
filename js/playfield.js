const Playfield = (function() {

    class Playfield {
        constructor($container) {
            this.$container = $container;

            this.drawGrid();
        }

        drawGrid () {
            for(let row = 0; row < 22; row++){
                $('#playfield').append('<tr class="'+row+'"></tr>');
                for (let col = 0; col < 10; col++){
                    $('.'+row).append('<td id="'+ col +'"></td>');
                }
            }
        }
    }

    return Playfield;
  })();