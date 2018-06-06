import slice from './slice'
export default class buffer {
  constructor(img, x, y, w, h) {
    this.img = img;
    
    this.buffer = document.createElement('canvas');
    this.buffer.width = w;
    this.buffer.height = h;

    if(w != undefined && h != undefined) {
      this.width = w;
      this.height = h;
    } else {
      this.width = img.width;
      this.height = img.height;
    }

    this.buffer.getContext('2d').drawImage(
      this.img,
      x, y,
      this.width, this.height,
      0, 0,
      this.width, this.height
    );

    return this.buffer;
  }
}