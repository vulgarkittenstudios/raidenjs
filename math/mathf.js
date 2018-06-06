export default class {

  static deg2rad() {
    return Math.PI/180;
  }

  static i2xy(i, w) {
    var x = i % w;
    var y = Math.floor(i/w);
    return {
      x: x, 
      y: y
    };
  }

  static xy2i(x, y, w) {
    return y * w + x;
  }
}