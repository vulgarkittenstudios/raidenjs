const PRESSED = 1;
const RELEASED = 0;
export default class {
  constructor() {

    // Holds the state of a given key
    this.keyState = new Map();

    // Holds callbacks
    this.keyMap = new Map();

    this.key = {
      enter: 13,
      up: 38,
      down: 40, 
      left: 37,
      right: 39,
      escape: 27,
      spacebar: 32,
      ctl: 17,
      alt: 18,
      tab: 9,
      shift: 16,
      caps: 20,
      lwin: 91,
      rwin: 92,
      backspace: 8,
      home: 36,
      end: 35,
      insert: 45,
      del: 46,
      pageUp: 33,
      pageDown: 34,
      numLock: 144,
      f1: 112,
      f2: 113, 
      f3: 114, 
      f4: 115,
      f5: 116,
      f6: 117,
      f8: 119, 
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
      printScreen: 44,
      scrollLock: 145,
      pauseBreak: 19,
      a0: 48,
      a1: 49,
      a2: 50,
      a3: 51,
      a4: 52,
      a5: 53,
      a6: 54,
      a7: 55,
      a8: 56,
      a9: 57,
      n0: 96,
      n1: 97,
      n2: 98,
      n3: 99,
      n4: 100,
      n5: 101,
      n6: 102,
      n7: 103,
      n8: 104,
      n9: 105,
      multiply: 106,
      add: 107,
      subtract: 109,
      decimal: 110,
      divide: 111,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83, 
      t: 84, 
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      semiColon: 186,
      equals: 187,
      comma: 188,
      dash: 189,
      period: 190,
      forwardSlash: 191,
      graveAccent: 192,
      openBracket: 219,
      backslash: 220,
      closeBracket: 221,
      singleQuote: 222
    }
  }

  addMapping(keycode, callback) {
    this.keyMap.set(keycode, callback);
  }

  handleEvent(e) {
    const {keyCode} = e;

    if(!this.keyMap.has(keyCode)) return;

    e.preventDefault();
    const keyState = e.type === 'keydown' ? PRESSED : RELEASED;

    if(this.keyState.get(keyCode) === keyState) return;

    this.keyState.set(keyCode, keyState);
    this.keyMap.get(keyCode)(keyState);
  }

  listenTo(element) {
    ['keydown', 'keyup'].forEach(eName => {

      element.addEventListener(eName, e => {
        this.handleEvent(e);
      });
    });
  }
}