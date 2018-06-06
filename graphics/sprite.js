import mathf from '../math/mathf';

export default class sprite {

  constructor(win, file, pattern) {
    
    // Graphics Tools
    if(typeof(file) == String) {
      this.img = new Image();
      this.img.src = file;
    } else {
      this.img = file;
    }
    this.ctx = win.ctx;
    
    // Position of the sprite
    this.x = 0;
    this.y = 0;

    // Animation Variables
    this.delay = 0;
    this.indexCounter = 0;
    this.curFrame = 0;

    if(pattern) {
      this.pattern = ctx.createPattern(this.img, 'repeat')
    }
  }

  draw(x, y, w, h) {
    this.x = x;
    this.y = y;
    // Pattern
    if(this.pattern != null) {
      this.ctx.fillStyle = this.pattern;
      this.ctx.fillRect(x, y, w, h);
    } else {

      // Normal
      if(w == undefined || h == undefined) {
        this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
      } else {
        this.ctx.drawImage(this.img, this.x, this.y, w, h);
      }
    }
  }
  
  rotate(x, y, angle) {
    this.x = x;
    this.y = y;
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(angle*mathf.deg2rad());
    this.ctx.drawImage(this.img, -this.img.width/2, -this.img.height/2);
    this.ctx.restore();
  }

  animation(x, y, index, width, w, h, speed) {
    var s = (speed == undefined) ? 3 : speed;
    if(this.delay++ >= s) {
      
      this.delay = 0;
      this.indexCounter++;

      if(this.indexCounter >= index.length) this.indexCounter = 0;

      this.curFrame = index[this.indexCounter];
    }

    var res = mathf.i2xy(this.curFrame, width);

    this.ctx.drawImage(
      this.img, 
      res.x*w, res.y*h, 
      w, h, 
      x, y, 
      w, h
    );
  }
}