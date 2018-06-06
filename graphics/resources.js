export default class resources {

  constructor() {

    this.resourceCache = {};
    this.loading = [];
    this.readyCallbacks = [];
  }

  // Load an image url or an array of image urls
  load(urlOrArr) {
      if(urlOrArr instanceof Array) {
        
        const that = this;
        urlOrArr.forEach(function(url) {
            that._load(url);
        });
      }
      else {
          that._load(urlOrArr);
      }
  }

  _load(url) {
      if(this.resourceCache[url]) {
          return this.resourceCache[url];
      }
      else {
          var img = new Image();
          
          const that = this;
          img.onload = function() {
              that.resourceCache[url] = img;

              if(that.isReady()) {
                  
                that.readyCallbacks.forEach(function(func) {
                    
                    func();
                });
              }
          };
          this.resourceCache[url] = false;
          img.src = url;
      }
  }

  get(url) {
      return this.resourceCache[url];
  }

  isReady() {
      var ready = true;
      for(var k in this.resourceCache) {
          if(this.resourceCache.hasOwnProperty(k) &&
              !this.resourceCache[k]) {
              ready = false;
          }
      }
      return ready;
  }

  onReady(func) {
    
    this.readyCallbacks.push(func);
  }
}