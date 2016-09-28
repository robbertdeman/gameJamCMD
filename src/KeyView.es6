class KeyView {
    constructor(){
        this.left  = false;
        this.right = false;
        document.addEventListener("keydown", (keyBoardDown) => {
            if(keyBoardDown.keyCode == 39) {
                this.right = true;
            }
            else if(keyBoardDown.keyCode == 37) {
                this.left = true;
            }
        })

        document.addEventListener("keyup", (keyBoardUp) => {
            if(keyBoardUp.keyCode == 39) {
                this.right = false;
            }
            else if(keyBoardUp.keyCode == 37) {
                this.left = false;
            }
        })
    }

    get key (){
        return {
            left: this.left,
            right: this.right
        };
    }
}

module.exports = KeyView;