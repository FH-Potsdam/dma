console.log("Hello sketch.js");
let x = 0;
function setup() {
  const canvas = createCanvas(100, 100);
  canvas.parent("sketch");
}

function draw() {
  background(255, 20);
  ellipse(x, width / 2, 5, 5);
  x++;
  if (x >= width) {
    x = 0;
  }
}
