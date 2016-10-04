//requires module
const Module = require("./module.es6");
const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");
const Particle = require("./Particle.es6");

class Controller {
    constructor() {
        this.mod = new Module();
        this.key = new KeyView();
        this.canvas = new CanvasView();
        this.part = [];
    }
    loop() {

        if (this.part.length <= 20) {
            this.part.push(new Particle());
        }

        // de view moet doorgeven dat er is gedrukt is
        // zet de fuctie module aan

        // console.log(this.canvas);
        // console.log(this.key);
        //console.log(this.part);

        this.mod.mov(this.key.key);
        this.canvas.draw(this.part[0].pos);
        this.canvas.draw(this.mod.pos);
        // krijg de coordinaten van de module
        // stuur de coordinaten door naar de view

        // regelt de timing
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

const control = new Controller();
control.loop();