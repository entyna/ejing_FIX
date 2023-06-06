let particles = [];
let pg;
let cg;
let HH, HM, MH1, MH2, MM, ME, EM1, EM2, EE, EH1, EH2, HE1, HE2;
let shineX, shineY;
let shineD = 150;
let noiseX, noiseY;


let points = [
  [1, 0],
  [0, 1],
  [1, 2],
  [1, 3],
  [0, 4],
  [1, 5]
];

function updatePoints(yaoValues) {
  points[0][0] = yaoValues[0];
  points[1][0] = yaoValues[1];
  points[2][0] = yaoValues[2];
  points[3][0] = yaoValues[3];
  points[4][0] = yaoValues[4];
  points[5][0] = yaoValues[5];
}

function getPoints() {
  return yaoValues
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(width, height);
  cg = createGraphics(width, height);
  cg.pixelDensity(0.01);
  background(0);

  frameRate(30);
 
  HH = new Field(pg, 0.15, 0.85, 0);
  MH1 = new Field(pg, 0, 0.3, 1);
  HM = new Field(pg, 0.3, 0.7, 1);
  MH2 = new Field(pg, 0.7, 1, 1);
  EH1 = new Field(pg, - 0.3, 0.1, 2);
  HE1 = new Field(pg, 0.1, 0.35, 2);
  MM = new Field(pg, 0.35, 0.65, 2);
  HE2 = new Field(pg, 0.65, 0.9, 2);
  EH2 = new Field(pg, 0.9, 1.3, 2);
  EM1 = new Field(pg, 0, 0.3, 3);
  ME = new Field(pg, 0.3, 0.7, 3);
  EM2 = new Field(pg, 0.7, 1, 3);
  EE = new Field(pg, 0.15, 0.85, 4);

  shinyCirc1 = new Circle();
  shinyCirc2 = new Circle();
  shinyCirc3 = new Circle();
}

function draw() {
  background(0);
  // SHINYYYY
  shinyYang();

  // FIELDS  
  pg.clear();
  pgFields();
  image(pg, 0, 0);

  // PARTICLES
  // Add new particles
  if (particles.length < 170) {
    for (let i = 0; i < 10; i++) {
      let p = new Particle();
      particles.push(p);
    }
  }
  // Update and display particles
  let particlesToRemove = [];
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.isFinished()) {
      particlesToRemove.push(i);
    }
  }
  // Remove finished particles
  for (let i = particlesToRemove.length - 1; i >= 0; i--) {
    particles.splice(particlesToRemove[i], 1);
  }

  push();
  blendMode(DIFFERENCE);
  graphLine();
  pop();

}

function shinyYang() {
  cg.background('black');
  cg.noStroke();
  let noiseVal = noise(frameCount * 0.005);
  diameter = map(noiseVal, 0, 1, 10, 60);

  shinyCirc1.draw();
  shinyCirc1.move();
  shinyCirc2.draw();
  shinyCirc2.move();
  shinyCirc3.draw();
  shinyCirc3.move();

  for (let x = 0; x < pg.width; x+=height/7) {
    for (let y = height/12; y < pg.height; y+=height/7) {
      let color = pg.get(x, y);
      if (color[0] === 255 && color[1] === 255 && color[2] === 255) {
        cg.fill('255');
        cg.circle(x, y, diameter);
      }
    }
  }
  image(cg, 0, 0, width, height * 1.1);
}

function fieldColor(valueA, valueB) {
  if (valueA === 0 && valueB === 0) {
    return 0;
  } else if (valueA === 1 && valueB === 1) {
    return 255;
  } else if (valueA === 1 && valueB === 0) {
    return 3;
  } else if (valueA === 0 && valueB === 1) {
    return 1;
  }
}

function fieldOpacity(valueA, valueB) {
  if (valueA === 0 && valueB === 0) {
    return 255;
  } else if (valueA === 1 && valueB === 1) {
    return 70;
  } else if (valueA === 1 && valueB === 0) {
    return 3;
  } else if (valueA === 0 && valueB === 1) {
    return 1;
  }
}

function pgFields() {
  let fieldStroke = 100;
  let fieldWeight = 0.7;

  pg.stroke(fieldStroke);
  pg.strokeWeight(fieldWeight);

  let color2 = fieldColor(points[2][0], points[5][0]);
  let opacity2 = fieldOpacity(points[2][0], points[5][0]);
  pg.fill(color2, opacity2);
  HH.show();

  let color1 = fieldColor(points[1][0], points[5][0]);
  let opacity1 = fieldOpacity(points[1][0], points[5][0]);
  pg.fill(color1, opacity1);
  MH1.show();
  MH2.show();

  let color4 = fieldColor(points[2][0], points[4][0]);
  let opacity4 = fieldOpacity(points[2][0], points[4][0]);
  pg.fill(color4, opacity4);
  HM.show();

  let color5 = fieldColor(points[0][0], points[5][0]);
  let opacity5 = fieldOpacity(points[0][0], points[5][0]);
  pg.fill(color5, opacity5);
  EH1.show();
  EH2.show();

  let color3 = fieldColor(points[2][0], points[3][0]);
  let opacity3 = fieldOpacity(points[2][0], points[3][0]);
  pg.fill(color3, opacity3);
  HE1.show();
  HE2.show();

  let color6 = fieldColor(points[1][0], points[4][0]);
  let opacity6 = fieldOpacity(points[1][0], points[4][0]);
  pg.fill(color6, opacity6);
  MM.show();

  let color7 = fieldColor(points[0][0], points[4][0]);
  let opacity7 = fieldOpacity(points[0][0], points[4][0]);
  pg.fill(color7, opacity7);
  EM1.show();
  EM2.show();

  let color8 = fieldColor(points[1][0], points[3][0]);
  let opacity8 = fieldOpacity(points[1][0], points[3][0]);
  pg.fill(color8, opacity8);
  ME.show();

  let color9 = fieldColor(points[0][0], points[3][0]);
  let opacity9 = fieldOpacity(points[0][0], points[3][0]);
  pg.fill(color9, opacity9);
  EE.show();
}

function graphLine() {
  let xScale = width * 0.9;
  let yScale = height / 6;
  let xShift = width * 0.05;
  let yShift = height / 9;
  push();
  stroke(255);
  fill(0)
  strokeWeight(1.4);
  for (let i = 0; i < points.length - 1; i++) {
    let startX = points[i][0] * xScale + xShift;
    let startY = height - points[i][1] * yScale - yShift;
    let endX = points[i + 1][0] * xScale + xShift;
    let endY = height - points[i + 1][1] * yScale - yShift;
    line(startX, startY, endX, endY);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  pg.resizeCanvas(windowWidth, windowHeight);
  cg.resizeCanvas(windowWidth, windowHeight);
  HH.resize(0.15, 0.85, 0);
  MH1.resize(0, 0.3, 1);
  HM.resize(0.3, 0.7, 1);
  MH2.resize(0.7, 1, 1);
  EH1.resize(- 0.3, 0.1, 2);
  HE1.resize(0.1, 0.35, 2);
  MM.resize(0.35, 0.65, 2);
  HE2.resize(0.65, 0.9, 2);
  EH2.resize(0.9, 1.3, 2);
  EM1.resize(0, 0.3, 3);
  ME.resize(0.3, 0.7, 3);
  EM2.resize(0.7, 1, 3);
  EE.resize(0.15, 0.85, 4);

  shinyCirc1.resize();
  shinyCirc2.resize();
  shinyCirc3.resize();

  redraw();
}