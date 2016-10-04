class CanvasView {
    constructor() {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
    }
    clear() {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    }

    draw(pos) {
        this.ctx.fillStyle = pos.color;
        this.ctx.fillRect(pos.x, pos.y, pos.width, pos.height);

    }
}

module.exports = CanvasView;