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
        this.canvas.clear();

        // niet meer dan 20 particles
        if (this.part.length <= 20) {
            this.part.push(new Particle());
        }

        // foreach voor elke particle
        this.part.forEach((p) => {
            p.move();
            p.die();
            this.canvas.draw(p.posPart);
            this.mod.hit(p.posPart);
        });

        // filter de particles die niet meer bruikbaar zijn
        this.part = this.part.filter (function(p) {
            return p.isDead == false;
        });

        // waardes van de key worden doorgestuurd en de speler beweegt
        this.mod.mov(this.key.key);
        this.canvas.draw(this.mod.pos);

        // regelt de timing
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}

const control = new Controller();
control.loop();