class Particle {
    constructor() {
        this.width = 15;
        this.height = 15;
        this.x = 50;
        this.y = 50;
    }

    get pos() {
        return {width: this.width, height: this.height, x: this.x, y: this.y};
    }
}

module.exports = Particle;