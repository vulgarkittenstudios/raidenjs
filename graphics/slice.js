export default class slice {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw(ctx, x, y) {
    ctx.drawImage(this.img,
        this.x, this.y,
        this.w, this.h,
        x, y,
        this.w, this.h
        
      );
  }
}