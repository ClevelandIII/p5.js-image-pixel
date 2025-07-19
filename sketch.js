// sketch.js

let photo;
let canvasW = 557;
let canvasH = 794;
let randomShape = 0;

function preload() {
    photo = loadImage("portrait.png");
}

function setup() {
    createCanvas(canvasW, canvasH);
    photo.loadPixels();
}

function draw() {
    background(0);

    for (let i = 0; i < 6000; i++) {
        let randomShape = Math.floor(random(3));
        console.log(randomShape);

        let x = floor(random(canvasW));
        let y = floor(random(canvasH));
        let index = y * photo.width * 4 + x * 4;
        let r = photo.pixels[index];
        let g = photo.pixels[index + 1];
        let b = photo.pixels[index + 2];
        let a = floor(random(50, 90));
        let radius = Math.floor(random(5, 50));
        let points = Math.floor(random(4, 10));
        let depth = random(0.2, 0.6);
        let startAngle = -PI / 2;
        let delta = TWO_PI / points;

        noStroke()
        if (randomShape == 0) {
            //star
            fill(r, g, b, a);
            beginShape();
            let count = 0;

            while (count < points) {
                let x1 = cos(startAngle) * radius + x;
                let y1 = sin(startAngle) * radius + y;

                vertex(x1, y1);
                let x2 = cos(startAngle + delta / 2) * radius * depth + x;
                let y2 = sin(startAngle + delta / 2) * radius * depth + y;
                vertex(x2, y2);

                startAngle = startAngle + delta;
                count += 1;
            }

            endShape(CLOSE);
        } else if (randomShape == 1) {
            //circle
            fill(r, g, b, a);
            ellipse(x, y, radius, radius);
        } else {
            //square
            fill(r, g, b, a);
            square(x, y, radius);
        }
    }

    noLoop();
}
