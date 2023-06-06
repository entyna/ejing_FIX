class Field {
  constructor(pg, x1, x2, y1) {
    this.pg = pg;
    this.calculateDimensions();
    this.xpos1 = this.width * x1;
    this.xpos2 = this.width * x2;
    this.xoff = this.width * 0.3;
    let hMarg = this.height / 18;
    this.yoff = this.height / 6;
    this.ypos = hMarg + this.yoff * y1;
    this.grain = 3;
  }

  calculateDimensions() {
    this.width = width;
    this.height = height;
  }
  
  show() {
    this.pg.beginShape();
    this.pg.vertex(this.xpos1, this.ypos);
    
    for (let y = this.ypos; y <= this.ypos + this.yoff; y += this.grain) {
      let x = map(noise(y * 0.02, frameCount * 0.002), 0, 1, this.xpos1 - this.xoff, this.xpos1 + this.xoff);
      this.pg.vertex(x, y);
    }
    
    this.pg.vertex(this.xpos1, this.ypos + this.yoff);
    this.pg.vertex(this.xpos2, this.ypos + this.yoff);
    
    for (let y = this.ypos + this.yoff; y >= this.ypos; y -= this.grain) {
      let x = map(noise(y * 0.02, frameCount * 0.002), 0, 1, this.xpos2 - this.xoff, this.xpos2 + this.xoff);
      this.pg.vertex(x, y);
    }
    
    this.pg.vertex(this.xpos2, this.ypos);
    this.pg.endShape(CLOSE);
  }

  resize(x1, x2, y1) {
    this.calculateDimensions();
    this.xpos1 = this.width * x1;
    this.xpos2 = this.width * x2;
    this.xoff = this.width * 0.3;
    let hMarg = this.height / 18;
    this.yoff = this.height / 6;
    this.ypos = hMarg + this.yoff * y1;
  }
  
}