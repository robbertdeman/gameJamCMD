class Particle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.x = (Math.random()*300)-1;
        this.y = 5;
        this.xSpeed = 0.2;
        this.ySpeed = 4;
        this.isDead = false;
        this.color = "#ff0000";
    }

    move() {
        this.y += this.ySpeed;
        this.x += this.xSpeed;
    }

    die() {
        if (this.y >= 500) {
            this.isDead = true;
        }
    }

    get posPart() {
        return {width: this.width, height: this.height, x: this.x, y: this.y, color: this.color};
    }
}

module.exports = Particle;