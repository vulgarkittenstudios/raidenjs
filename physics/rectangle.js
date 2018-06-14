export default class rectangle {
  constructor(x, y, w, h) {

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  pointTest(px, py) {
    var x, y;
      
    x = (arguments.length == 2) ? px : px.x;
    y = (arguments.length == 2) ? py : px.y;
    
    if(x >= this.x && x <= this.x + this.w)
      if(y >= this.y && y <= this.y + this.h)
        return true;

    return false;
  }

  rectangleTest(rect) {
    if(this.x < rect.x + rect.w && 
      this.x + this.w > rect.x &&
      this.y < rect.y + rect.h &&
      this.y + this.h > rect.y
    ) return true;

    return false;
  }
}
