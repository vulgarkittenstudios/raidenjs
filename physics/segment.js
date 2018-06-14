import point from './point';
import vec2 from '../math/vec2';

/**
 * Line Segment Class
 * 
 */
export default class segment {

  constructor(x, y, vecX, vecY) {

    // Intersection
    this.intX = 0;
    this.intY = 0;

    this.state = {
      Intersect: 0,
      Collinear: 1,
      DontIntersect: 2
    }

    this.x = x;
    this.y = y;
    this.vecX = vecX;
    this.vecY = vecY;
  }

  draw(ctx, color) {

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.vecX, this.y + this.vecY);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  length() {
    
    return Math.sqrt(this.vecX * this.vecX + this.vecY * this.vecY);
  }

  center() {
    var x = this.x + this.x + this.vecX;
    var y = this.y + this.y + this.vecY;

    x /= 2;
    y /= 2;

    return new point(x, y);
  }

  normal() {
    // Flip coordinates
    var x1 = this.y;
    var y1 = this.x + this.vecX;
    var y2 = this.x;
    var x2 = this.y + this.vecY;

    return new segment(x1, y1, x2 - x1, y2 - y1);
  }

  unit() {
    return new segment(0, 0, this.vecX / this.length(), this.vecY / this.length());
  }

  multiply(val) {
    this.vecX *= val;
    this.vecY *= val;
  }

  sameSign(a, b) {
    return ((a*b) >= 0);
  }

  project(seg_onto) {
    var vec = new vec2(this.vecX, this.vecY);
    var onto = new vec2(seg_onto.vecX, seg_onto.vecY);
    var d = onto.dot(onto);
    if(0 < d) {
      var dp = vec.dot(onto);
      var mul = dp / d;
      var rx = onto.x * mul;
      var ry = onto.y * mul;
      return new point(rx, ry);
    }
    return new point(0, 0);
  }

  /**
   * To use..
   * if(line1.intersect(line2) == line1.state.Intersect)
   */
  intersect(seg) {

    var x1 = this.x;
    var y1 = this.y;
    var x2 = this.x + this.vecX;
    var y2 = this.y + this.vecY;

    var x3 = seg.x;
    var y3 = seg.y;
    var x4 = seg.x + seg.vecX;
    var y4 = seg.y + seg.vecY;

    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;

    a1 = y2 - y1;
    b1 = x1 - x2;
    c1 = (x2 * y1) - (x1 * y2);

    r3 = ((a1 * x3) + (b1 * y3) + c1);
    r4 = ((a1 * x4) + (b1 * y4) + c1);

    if((r3 != 0) && (r4 != 0) && this.sameSign(r3, r4)) {
      return this.state.DontIntersect;

      a2 = y4 - y3;
      b2 = x3 - x4;
      c2 = (x4 * y3) - (x3 * y4);
      r1 = (a2 * x1) + (b2 * y1) + c2;
      r2 = (a2 * x2) + (b2 * y2) + c2;

      if((r1 != 0) && (r2 != 0) && this.sameSign(r1, r2))
        this.state.DontIntersect;

      denom = (a1 * b2) - (a2 * b1);

      if(denom == 0) return this.state.Collinear;

      if(denom < 0) offset = -denom/2; 
      else offset = denom/2;

      num = (b1 * c2) - (b2 * c1);

      if(num < 0) this.intX = (num - offset) / denom;
      else this.intX = (num + offset) / denom;

      num = (a2 * c1) - (a1 * c2);
      if(num < 0) this.intY = (num - offset) / denom;
      else this.intY = (num + offset) / denom;
    }
  }
}
