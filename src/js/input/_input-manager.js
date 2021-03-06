/**
 * @module inputManager
 */

/** 
 * Mapping of keys and corresponding key codes
 * @property {Object.<String, number>} keys  
 */
const keyMap = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  pauseBreak: 19,
  capsLock: 20,
  esc: 27,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40,
  printScreen: 44,
  insert: 45,
  delete: 46,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
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
  windowsLeft: 91,
  windowsRight: 92,
  select: 93,
  numpad0: 96,
  numpad0: 97,
  numpad0: 98,
  numpad0: 99,
  numpad0: 100,
  numpad0: 101,
  numpad0: 102,
  numpad0: 103,
  numpad0: 104,
  numpad0: 105,
  multiply: 106,
  add: 107,
  subtract: 109,
  decimalPoint: 110,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  numLock: 144,
  scrollLock: 145,
  semiColon: 186,
  equal: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardSlash: 191,
  graveAccent: 192,
  openBracket: 219,
  backSlash: 220,
  closeBracket: 221,
  singleQuote: 222
};

/**
 * Class representing a manager for user input.
 */
class InputManager {
  /**
   * Create a new input manager.
   * @param {bool} [preventDefault = false] Prevents default behaviour on keydown and keyup events if set to true.
   */
  constructor(preventDefault = false) {
    this.preventDefault = preventDefault;
    
    /** 
     * Set containing pressed keys and their current state
     * @property {Set.<number>} pressedKeys 
     * */
    this.pressedKeys = new Set;

    // Add key to pressedKeys Set on keydown event
    document.addEventListener('keydown', e => {
      if (this.preventDefault) e.preventDefault();
      this.pressedKeys.add(e.keyCode); 
    }, false);

    // Remove key from pressedKeys Set on keyup event
    document.addEventListener('keyup', e => {
      if (this.preventDefault) e.preventDefault();
      this.pressedKeys.delete(e.keyCode);
    }, false);
  }

  /**
   * Convert parameter values to an object with an x and y component.
   * @param {String|number} key - The name or key code of the key for which to check if it is pressed.
   * @throws Will throw an error if the key does not exist in retron.inputManager.keycodes.
   */
  keyPressed(key) {
    let keyCode;

    // Check if key name or code is given
    if (typeof key === 'number') {
      keyCode = key;
    } else if (typeof key === 'string') {
      keyCode = keyMap[key];
    }
    
    // Check for valid key value
    if (typeof keyCode === 'undefined') {
      throw new Error(`${key} is not a valid key value.\nAll valid key values and corresponding key codes can be accessed from the keyMap object instance.`);
    }

    // Return true if key is pressed
    return (this.pressedKeys.has(keyCode));
  };
}

export { 
  keyMap,
  InputManager
};
