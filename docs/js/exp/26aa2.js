/**
 * 26aa2.js
 * Functions used in butiran/26aa2 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-01-26
 *
 * Exported:
 * - createVertLineDiv(x, y, l)
 */


/**
 * Creates a vertical line using div element.
 * 
 * @param {number} x - Horizontal position of the circle.
 * @param {number} y - Vertical position of the circle
 * @param {number} l - Length of the circle
 * @returns {HTMLDivElement}
 * 
 * @example
 * let c = createCircleDiv(10, 40, 2);
 */
function createVertLineDiv(x, y, l) {
  let el = document.createElement("div");
  el.style.position = "absolute";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.width =  "1px";
  el.style.height = l + "px";
  el.style.borderLeft =  "1px solid var(--fg)";
  return el;
}

//registerHugoScript("createCircleDiv", createCircleDiv);


// marker: 26aa2.js
(() => {
  console.log("[marker] 26aa2.js loaded");
})();
