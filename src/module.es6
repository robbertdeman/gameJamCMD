class Module {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.xPos = 165;
        this.yPos = 449;
        this.life = 10;
        this.color = "rgba(67,234,12,1)";
    }
    mov(movement) {
        if(movement.left && !movement.right) {
            this.xPos -= 10;
        }
        if (movement.right && !movement.left) {
            this.xPos += 10;
        }
        if (movement.up && !movement.down) {
            this.yPos -= 10;
        }
        if (movement.down && !movement.up) {
            this.yPos += 10;
        }
        this.outline();
        this.hit();
    }

    outline(){
        if(this.xPos <= -10){
            this.xPos = this.xPos + 10; //linker lijn
    }
        if(this.yPos <= -10){
            this.yPos = this.yPos + 10; //boven lijn
        }
        if(this.xPos >= 340){
            this.xPos = this.xPos - 10; //rechter lijn
        }
        if(this.yPos >= 481){
            this.yPos = this.yPos - 10; //onder lijn
        }
    }

    hit(particle){
        if (!particle) return;
        if ((particle.x + particle.width >= this.xPos)
            && (particle.x <= this.xPos + this.width)
            && (particle.y + particle.height >= this.yPos)
            && (particle.y <= this.yPos + this.height)
        ) {
                this.life = this.life - 1;
                this.color = "rgba(255,0,0,1)";
                setTimeout(()=>{ this.color = "rgba(0,254,0,1)";}, 100);
                return true;
        }
        return false;
    }

    score() {
        document.getElementById("score").innerHTML = "Levens: "+this.life;
    }

    getLife() {
        this.life += 3;
    }

    get posMod() {
        return {width: this.width, height: this.height, x: this.xPos, y: this.yPos, color: this.color, life: this.life};
    }
}

module.exports = Module;