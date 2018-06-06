import segment from './segment';
import vec2 from '../math/vec2';

export default class circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radiusLine = new segment(this.x, this.y, this.radius, 0);
  }

  pointTest(px, py) {
    var x, y;
    if(arguments.length == 1) {
      
      x = px.x;
      y = px.y;
      
    }
    var seg = new segment(this.x, this.y, x - this.x, y - this.y)
    if(seg.length() <= this.radiusLine.length())
      return true;

    return false;
  }

  circleTest(other) {
    var seg = new segment(this.x, this.y, other.x - this.x, other.y - this.y);

    if(seg.length() <= this.radiusLine.length() + other.radiusLine.length())
      return true;

    return false;
  }

  segmentTest(seg) {
    var seg2 = new segment(100, 100, this.x - 100, this.y - 100)
    var p = seg2.project(seg);

    var seg3 = new segment(100, 100, p.x, p.y);
    var seg4 = new segment(
      this.x, this.y, 
      (seg3.x + seg3.vecX) - this.x, 
      (seg3.y + seg3.vecY) - this.y
    );

    if(this.pointTest(seg.x+seg.vecX, seg.y+seg.vecY)) {
      return true;
  } else if(this.pointTest(seg.x, seg.y))
    return true;

  if(seg4.length() <= this.radiusLine.length()) {
    
    if(seg.length() >= seg3.length()) {
      
      var a = new vec2(seg.vecX, seg.vecY);
      var b = new vec2(seg3.vecX, seg3.vecY);
      if(0 <= b.dot(a)) {

        return true;
      }
    }
  }
  }

  draw(ctx, color) {

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();

    this.radiusLine.x = this.x;
    this.radiusLine.y = this.y;
    this.radiusLine.vecX = this.radius;

    this.radiusLine.draw('blue', ctx);

  }
}
