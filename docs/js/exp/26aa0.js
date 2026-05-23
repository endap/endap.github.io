/**
 * 26aa0.js
 * Functions used in butiran/26aa0 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-01-25
 *
 * Exported:
 * - createCircleDiv(x, y, r)
 * - createRectDiv(x, y, w, h)
 * - createTextDiv(x, y, s)
 * - createWorldCoordsDiv()
 * - createScreenCoordsDiv()
 * - createScreenCoordsDiv()
 * - setContainerStyle(cnt)
 */


/**
 * Creates a circle using div element.
 * 
 * @param {number} x - Horizontal position of the circle.
 * @param {number} y - Vertical position of the circle
 * @param {number} r - Radius of the circle
 * @returns {HTMLDivElement}
 * 
 * @example
 * let c = createCircleDiv(10, 40, 2);
 */
function createCircleDiv(x, y, r) {
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.left = (x - r) + "px";
  el.style.top = (y - r) + "px";
  el.style.width = 2 * r + "px";
  el.style.height = 2 * r + "px";
  el.style.borderRadius = 2 * r + "px";
  el.style.border =  "1px solid var(--fg)";
  el.style.background =  "var(--fg)";
  return el;
}

//registerHugoScript("createCircleDiv", createCircleDiv);


/**
 * Creates a rectangle using div element.
 * 
 * @param {number} x - Left position of the rectangle.
 * @param {number} y - To position of the rectangle
 * @param {number} w - Width of the rectangle.
 * @param {number} h - Height of the rectangle.
 * @returns {HTMLDivElement}
 * 
 * @example
 * let r = createRectDiv(10, 40, 100, 50);
 */
function createRectDiv(x, y, w, h) {
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.border =  "0.5px solid var(--fg)";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.width = w + "px";
  el.style.height = h + "px";
  return el;
}

//registerHugoScript("createRectDiv", createRectDiv);


/**
 * Creates a text box using div element.
 * 
 * @param {number} x - Left position of the text box.
 * @param {number} y - To position of the text box
 * @param {string} s - Content of the text box.
 * @returns {HTMLDivElement}
 * 
 * @example
 * let t = createTextDiv(10, 40, 'Hello, World!');
 */
function createTextDiv(x, y, s) {
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.color =  "var(--fg)";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.innerHTML = s;
  el.style.fontSize = "75%";
  el.style.fontFamily = "Times";
  return el;
}

//registerHugoScript("createTextDiv", createTextDiv);


/**
 * Creates an illustration of world coordinates using multiple div elements.
 *
 * Returns several HTMLElements that should be appended to a container.
 *
 * @param {void}
 * @return {HTMLElement[]}
 * 
 * @example
 * let a, b, c, d, e, f, g;
 * ([a, b, c, d, e, f, g] = createWorldCoordsDiv());
 */
function createWorldCoordsDiv() {
  const x1 = 15, y1 = 10, w1 = 120, h1 = 100;
  let r1 = createRectDiv(x1, y1, w1, h1);
  let c1a = createCircleDiv(x1, y1 + h1, 2);
  let c1b = createCircleDiv(x1 + w1, y1, 2);
  let c1c = createCircleDiv(x1 + 0.5 * w1, y1 + 0.5 * h1, 2);
  let t1a = createTextDiv(
    x1 + 10, y1 + h1 - 25,
    "(<i>x</i><sub>min</sub>, " +
    "<i>y</i><sub>min</sub>)"
  );
  let t1b = createTextDiv(
    x1 + 0.5 * w1 - 15, y1 + 5,
    "(<i>x</i><sub>max</sub>, " +
    "<i>y</i><sub>max</sub>)"
  );
  let t1c = createTextDiv(
    x1 + 0.5 * w1 - 35, y1 + 0.5 * h1 - 10,
    "(<i>x</i>, <i>y</i>)"
  );
  return [r1, c1a, c1b, c1c, t1a, t1b, t1c];
}

//registerHugoScript("createWorldCoordsDiv", createWorldCoordsDiv);


/**
 * Creates an illustration of screen coordinates using multiple div elements.
 *
 * Returns several HTMLElements that should be appended to a container.
 *
 * @param {void}
 * @return {HTMLElement[]}
 * 
 * @example
 * let A, B, C, D, E, F, G;
 * ([A, B, C, D, E, F, G] = createScreenCoordsDiv());
 */
function createScreenCoordsDiv() {
  const X1 = 180, Y1 = 10, W1 = 120, H1 = 100;
  let R1 = createRectDiv(X1, Y1, W1, H1);
  let C1a = createCircleDiv(X1, Y1, 2);
  let C1b = createCircleDiv(X1 + W1, Y1 + H1, 2);
  let C1c = createCircleDiv(X1 + 0.5 * W1, Y1 + 0.5 * H1, 2);
  let T1a = createTextDiv(
    X1 + 10, Y1 + 5,
    "(<i>X</i><sub>min</sub>, " +
    "<i>Y</i><sub>min</sub>)"
  );
  let T1b = createTextDiv(
    X1 + 0.5 * W1 - 20, Y1 + H1 - 25,
    "(<i>X</i><sub>max</sub>, " +
    "<i>Y</i><sub>max</sub>)"
  );
  let T1c = createTextDiv(
    X1 + 0.5 * W1 + 10, Y1 + 0.5 * H1 - 10,
    "(<i>X</i>, <i>Y</i>)"
  );
  return [R1, C1a, C1b, C1c, T1a, T1b, T1c];
}

//registerHugoScript("createScreenCoordsDiv", createScreenCoordsDiv);

/**
 * Set style of a div element as container.
 *
 * @param {HTMLDivElement} cnt  - The div element to style.
 * @return {void}
 *
 * @example
 * const cnt = document.createElement('div');
 * setContainerStyle(cnt);
 */
function setContainerStyle(cnt) {
  cnt.style.marginTop = "1em";
  cnt.style.width = "320px";
  cnt.style.height = "120px";
  cnt.style.border = "0px solid #888";
  cnt.style.position = "relative";
  cnt.style.overflow = "hidden";
  cnt.style.background = "var(--box-bg)"
}

//registerHugoScript("setContainerStyle", setContainerStyle);


// marker: 26aa0.js
(() => {
  console.log("[marker] 26aa0.js loaded");
})();
