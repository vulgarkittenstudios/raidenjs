export default class {
  constructor(ctx) {

    this.x = 0;
    this.y = 0;
    this.ctx = ctx;
  }

  handle(callback) {
    var that = this;
    this.ctx.canvas.addEventListener('mousemove', function(e) {

      that.x = e.clientX;
      that.y = e.clientY;
      callback(e);
    });

    this.x = that.x;
    this.y = that.y;
  }
}