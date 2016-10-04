class Particle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.x = 160;
        this.y = 50;
        this.xSpeed = (Math.random()*6)-3;
        this.ySpeed = 0.2;
    }
    move() {
        this.ySpeed += 0.05;
        this.y += this.ySpeed;
        this.x += this.xSpeed;
    }
    get pos() {
        return {width: this.width, height: this.height, x: this.x, y: this.y};
    }
}

module.exports = Particle;