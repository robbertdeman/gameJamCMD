class Module {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.xPos = 0;
        this.yPos = 0;

    }
    mov(movement) {
        if(movement.left && !movement.right) {
            this.xPos -= 10;
        }
        else if (movement.right && !movement.left) {
            this.xPos += 10;
        }
        else if (movement.up && !movement.down) {
            this.yPos -= 10;
        }
        else if (movement.down && !movement.up) {
            this.yPos += 10;
        }
        this.outline();
    }

    outline(){
        if(this.xPos == -10){
            this.xPos = this.xPos + 10;
    }
        else if(this.yPos == -10){
            this.yPos = this.yPos + 10;
        }
        if(this.xPos == 340){
            this.xPos = this.xPos - 10;
        }
        else if(this.yPos ==490){
            this.yPos = this.yPos - 10;
        }
    }


    get pos() {
        return {width: this.width, height: this.height, x: this.xPos, y: this.yPos};
    }
}

module.exports = Module;