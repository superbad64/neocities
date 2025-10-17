/* Globals */

var canvas = document.createElement("canvas");
var context = null;
const prefix = "/common/elements/canvas/";

var objectCount = 21;

class FlyingObject {
    constructor(x, speed) {
        this.x = x;
        this.y = getRandomInt(-5, -window.innerHeight) + getRandomInt(-100, 0);
        this.speed = speed;
        this.spritesheet = [];
        this.index = 0;
    }
    update() {
        this.x -= this.speed;
        this.y += this.speed;

        if ((this.x < -100) || (this.y > window.innerHeight + 100)) { this.reset() };

        if (this.index + 1 >= this.spritesheet.length) {
            this.index = 0;
        } else {
            this.index += 1;
        }
    }
    reset() {
        this.y = getRandomInt(-5, -window.innerHeight) + getRandomInt(-100, 0);
        this.x = getRandomInt(0, window.innerWidth * 2) + getRandomInt(-100, 100);
    }
    draw(context) {
        // Update
        this.update();
        // Redraw
        context.drawImage(this.spritesheet[this.index], this.x, this.y);
        return(this.x, this.y);
    }
}

class Toaster extends FlyingObject {
    constructor(x, speed) {
        super(x, speed);

        for (let i = 0; i < 12; i++) {
            this.spritesheet.push(new Image());
            this.spritesheet[i].src = prefix + "img/toaster/img" + i.toString().padStart(3, 0) + ".png"
        }
    }
}

class Bread extends FlyingObject {
    constructor(x, speed) {
        super(x, speed);
        this.spritesheet.push(new Image());
        this.spritesheet[0].src = prefix + "img/bread/bread.png";
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function setup() {
    var body = document.getElementsByTagName("body")[0];
    
    canvas.width = (window.innerWidth * 1.05);
    canvas.height = window.innerHeight;
    
    canvas.style.zIndex = -1;
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.backgroundColor = "#000000";
    canvas.style.display = "none";
    canvas.id = "bgCanvas";

    context = canvas.getContext("2d");

    body.insertBefore(canvas, body.childNodes[0]);
}
setup();

var circus = [];
for (let i = 0; i < objectCount; i++) {
    circus.push(new Bread(getRandomInt(0, window.innerWidth * 2) + getRandomInt(-100, 100), .5));
}
for (let i = 0; i < Math.ceil(objectCount * .75); i++) {
    circus.push(new Toaster(getRandomInt(0, window.innerWidth * 2) + getRandomInt(-100, 100), 1 + Math.random()));
}

function callback() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    circus.forEach(element => {
        element.draw(context);
    })

    window.requestAnimationFrame(callback);
}

window.requestAnimationFrame(callback);