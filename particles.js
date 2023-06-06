class Particle {
    constructor() {
      let isInBlack = false;
      while (!isInBlack) {
        this.pos = createVector(random(width), random(height));
        let c = pg.get(floor(this.pos.x), floor(this.pos.y));
        let a = alpha(c);
        let r = red(c);
        if (a > 0 && r < 150) {
          isInBlack = true;
        }
      }
      this.vel = createVector();
      this.acc = createVector();
      this.maxSpeed = 3;
      this.yinSpeed = 0.1;
      this.size = random(1.5, 3);
      this.strokeThick = 0.7;
      this.strokeCol = 250;
      this.fillCol = 0;
      this.lifeSpan = random(200, 300);
      this.isStopped = false;
      this.history = [];
      this.historyLength = 50;

    this.yinAngle = random(TWO_PI);
    }
  
    update() {
    let c = pg.get(floor(this.pos.x), floor(this.pos.y));
    let r = red(c);
    let a = alpha(c);
 
    if (a > 0 && a <= 1) {
      // UP
      this.acc.set(p5.Vector.fromAngle(noise(this.pos.x * 0.01, this.pos.y * 0.01) * PI).mult(0.2));
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
    } else if (a >= 50 && a <= 250) {
      //YANG
      // this.isStopped = true;
    } else if (a > 250) {
      //YIN
      this.acc.set(p5.Vector.fromAngle(this.yinAngle).mult(0.2));
      this.vel.add(this.acc);
      this.vel.limit(this.yinSpeed);
      this.pos.add(this.vel);
    } else if (a > 2 && a < 5) {
      // DOWN
      this.acc.set(p5.Vector.fromAngle(noise(this.pos.x * 0.01, this.pos.y * 0.01) * -PI).mult(0.2));
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
    } else if (a === 0) {
      // DOWN
      this.isStopped = true;
    }

    
    this.lifeSpan -= 1;
    this.opacity = map(this.lifeSpan, 0, 200, 0, 255);
    this.history.unshift(createVector(this.pos.x, this.pos.y)); // add current position to the beginning of history array
    
    if (this.history.length > this.historyLength) {
      this.history.pop(); // remove the oldest position from history array if it exceeds the maximum length
    }
    }
  
    display() {
     let c = pg.get(floor(this.pos.x), floor(this.pos.y));
     let a = alpha(c);
    stroke(this.strokeCol);
    strokeWeight(this.strokeThick);
    fill(this.fillCol);
    
    
    if (a > 250) {
      //for (let i = 0; i < 4 && i < this.history.length; i++) {
        fill(255);
        noStroke();
        circle(this.pos.x, this.pos.y, this.size);
      //}
    } else {
      beginShape();
      for (let i = 0; i < this.history.length; i++) {
        vertex(this.history[i].x, this.history[i].y);
      }
      endShape();
    }
    }
  
    isFinished() {
    return this.lifeSpan <= 0 || this.pos.x < 0 || this.pos.x > width ||     this.pos.y < 0 || this.pos.y > height;
    }
  }