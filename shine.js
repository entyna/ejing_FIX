class Circle {
  constructor() {
    this.calculateDimensions();
    this.x = random(this.wholeWidth);
    this.y = random(this.wholeHeight);
    this.diameter = 370;
    this.noiseX = random(1000);
    this.noiseY = random(1000);
  }
  calculateDimensions() {
    this.wholeWidth = width;
    this.wholeHeight = height;
  }
  move() {
    this.noiseX += 0.01;
    this.noiseY += 0.01;

    let vx = map(noise(this.noiseX), 0, 1, -2, 2);
    let vy = map(noise(this.noiseY), 0, 1, -2, 2);

    this.x += vx;
    this.y += vy;

    if (this.x - this.diameter / 2 > cg.width) {
      this.x = -this.diameter / 2;
    } else if (this.x + this.diameter / 2 < 0) {
      this.x = cg.width + this.diameter / 2;
    }

    if (this.y - this.diameter / 2 > cg.height) {
      this.y = -this.diameter / 2;
    } else if (this.y + this.diameter / 2 < 0) {
      this.y = cg.height + this.diameter / 2;
    }
  }

  draw() {
    cg.fill(255, 50);
    cg.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  resize() {
    this.calculateDimensions();
    this.x = random(this.wholeWidth);
    this.y = random(this.wholeHeight);
  }
}