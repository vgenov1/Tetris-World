class Game {
    constructor(parentId) {
        this.$container = $(parentId);

        this.board = new Playfield(this.$container);

        this.drawGrid();
    }

    drawGrid() {

    }
}