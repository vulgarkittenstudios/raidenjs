export default class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx, color, size) {

    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, 2*Math.PI, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}