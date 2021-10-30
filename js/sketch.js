const WIDTH = 1000;
const HEIGHT = 600;
const M = 0.3;
const BIAS = 0.05;
const xCenter = WIDTH / 2;
const yCenter = HEIGHT / 2;

let canvas;
let percepton;
const puntos = [];

function setup(){
    canvas = createCanvas(WIDTH, HEIGHT);
    centerCanvas();
    frameRate(60);
    percepton = new neurona(BIAS);

    Array.from(new Array(1000)).forEach(() => {
        puntos.push(
          new Bola(
            Math.random() * (2 * xCenter) - xCenter,
            Math.random() * (2 * yCenter) - yCenter
          )
        );
    });
}

function draw(){
    fill(120, 120, 120);
    rect(0,0,WIDTH,HEIGHT);

    translate(xCenter, yCenter);
    scale(1, -1);
    line(-xCenter, -xCenter * M, xCenter, xCenter * M);
    fill(106, 90, 205);
    strokeWeight(15);

    puntos.forEach((point) => {
      point.type = percepton.classify(point.x, point.y);
      point.draw();
    });
  
    const x = Math.random() * (2 * xCenter) - xCenter;
    const y = Math.random() * (2 * yCenter) - yCenter;
    percepton.aprendiendo(x, y, y > M * x + BIAS ? 1 : -1);
}

function centerCanvas() {
    var x = (windowWidth - WIDTH) / 2;
    var y = (windowHeight - HEIGHT) / 2;
    canvas.position(x, y);
  }

  function rec(){
    stroke(255);
    
    rect(70,70,60,60,10);
  }