class Enemy {
    constructor() {
        this.width = 35;
        this.height = 35;
        this.x = (Math.random()*300)-1;
        this.y = 0-this.height;
        this.ySpeed = 1;
        this.isDead = false;
        this.color = "rgba(128,10,240,1)";
    }

    move() {
        this.y += this.ySpeed;
    }

    die() {
        if (this.y >= 500) {
            this.isDead = true;
        }
    }

    get posEnemy() {
        return {width: this.width, height: this.height, x: this.x, y: this.y, color: this.color};
    }
}

module.exports = Enemy;