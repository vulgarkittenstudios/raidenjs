import resources from './resources';
import loop from '../core/loop';

const defaultContainerID = 'container';
const defaultCanvasID = "screen";

export default class {
  constructor(options) {

    // Canvas Access
    this.canvas;
    this.ctx;

    // Cache the width and height of this instance
    this.width = 0;
    this.height = 0;

    // Toggle the loop
    this.running = false;
    
    // Check if options are supplied
    if(options != undefined) {

      // Cache the options
      this.options = options;

      // Get the canvas element
      if(this.options.screen != undefined) 
        this.canvas = document.getElementById(this.options.screen);
      else this.canvas = document.getElementById(defaultCanvasID);

      // Check if a canvas scale has been supplied
      if(this.options.scale != undefined) {

        // Set the dimensions of this instance
        this.width = this.options.scale.x;
        this.height = this.options.scale.y;
      } else {
        
        // Set the dimensions of this instance
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }

      // Check if a context has been supplied
      if(this.options.renderer != undefined) {
        switch(this.options.renderer) {
          case 'canvas':
          this.ctx = this.canvas.getContext('2d');
          break;

          case 'webgl':
          this.ctx = this.canvas.getContext('webgl');
          break;
        }
      } else this.ctx = this.canvas.getContext('2d');

    } else {

      // Set the dimensions of this instance
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      // Get the canvas element
      this.canvas = document.getElementById(defaultCanvasID);

      // Get the context of the canvas
      this.ctx = this.canvas.getContext('2d');
    }

    // Set the dimensions of the canvas
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear(color) {
    // Clear the screen
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fillStyle = (color) ? color : '#fff';
    this.ctx.fill();
  }

  init(callback) {

    if(this.options) {
      if(this.options.resize) {

        this.resize();
        this.initResize();
      }
    }
    callback();
  }

  initResize() {

    const sheet = document.createElement('style')
    const container = (this.options != undefined && this.options.container != undefined) ? this.options.container : defaultContainerID;
    sheet.innerHTML = "#" + container  +
    "{" + 
        "position: absolute;" +
        "left:50%; top: 50%;" + 
        "width: 100%;" +
        "height: 100%;" + 
        "outline: 1px solid black;" +
        "overflow: hidden;" +
    "}";
    document.body.appendChild(sheet);

    window.addEventListener('resize', this.resize, false);
    window.addEventListener('orientationchange', this.resize, false);
  }

  resize() {
    const container = (this.options != undefined && this.options.container != undefined) ? this.options.container : defaultContainerID;
    var gameArea = document.getElementById(container);
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }
    
    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';
    
    var gameCanvas = document.getElementById(defaultCanvasID);
    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;
  }
}

