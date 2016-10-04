class Particle {
    constructor(x, y) {
        this.width = 15;
        this.height = 15;
        this.x = x;
        this.y = y;
    }
    get pos() {
        return {width: this.width, height: this.height, x: this.x, y: this.y};
    }
}

module.exports = Particle;