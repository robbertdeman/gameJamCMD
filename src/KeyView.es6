class KeyView {
    constructor(){
        this.left  = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;

        document.addEventListener("keydown", (keyBoardDown) => {
            if(keyBoardDown.keyCode == 39) {
                this.right = true;
            }
            else if(keyBoardDown.keyCode == 37) {
                this.left = true;
            }
            else if(keyBoardDown.keyCode == 38) {
                this.up = true;
            }
            else if(keyBoardDown.keyCode == 40) {
                this.down = true;
            }
            else if(keyBoardDown.keyCode == 32) {
                this.space = true;
            }
        })

        document.addEventListener("keyup", (keyBoardUp) => {
            if(keyBoardUp.keyCode == 39) {
                this.right = false;
            }
            else if(keyBoardUp.keyCode == 37) {
                this.left = false;
            }
            else if(keyBoardUp.keyCode == 38) {
                this.up = false;
            }
            else if(keyBoardUp.keyCode == 40) {
                this.down = false;
            }
            else if(keyBoardUp.keyCode == 32) {
                this.space = false;
            }
        })
    }

    get key (){
        return {
            left: this.left,
            right: this.right,
            up: this.up,
            down: this.down,
            space: this.space
        };
    }
}

module.exports = KeyView;