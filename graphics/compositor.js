export default class compositor {
  constructor() {
    this.layers = [];
  }

  draw(ctx) {
    this.layers.forEach(layer => {
      layer(ctx);
    });
  }
}