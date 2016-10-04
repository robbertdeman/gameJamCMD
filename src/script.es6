//requires module
const Module = require("./module.es6");
const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");
const Particle = require("./Particle.es6");
const Enemy = require("./Enemy.es6");
const GameOver = require("./GameOver.es6");
const Highscore = require("./HighScore.es6");
let enemySpawn = false;

class Controller {
    constructor() {
        this.mod = new Module();
        this.key = new KeyView();
        this.canvas = new CanvasView();
        this.part = [];
        this.enemy = [];
    }
    loop() {
        this.canvas.clear();

        if (enemySpawn) {
            this.enemy.push(new Enemy());
            enemySpawn = false;
        }

        this.enemy.forEach((e) => {
            this.canvas.draw(e.posEnemy);
            e.move();
            e.die();
        });

        this.enemy = this.enemy.filter (function(e) {
            return e.isDead == false;
        });

        // niet meer dan 20 particles
        if (this.part.length <= 20) {
            this.part.push(new Particle());
        }

        // foreach voor elke particle
        this.part.forEach((p) => {
            p.move();
            p.die();
            this.canvas.draw(p.posPart);
            let died = this.mod.hit(p.posPart);
            if (died) {
                p.isDead = true;
            }
        });

        // filter de particles die niet meer bruikbaar zijn
        this.part = this.part.filter (function(p) {
            return p.isDead == false;
        });

        // waardes van de key worden doorgestuurd en de speler beweegt
        this.mod.mov(this.key.key);
        this.canvas.draw(this.mod.posMod);

        // regelt de timing
        window.requestAnimationFrame(() => {
            this.loop();
        });

    }
}

const control = new Controller();
control.loop();

setInterval(() => {
    enemySpawn = true;
}, 3000);