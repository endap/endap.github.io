/**
 * 25e41.js
 * Functions used in butiran/25e41 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-21 -- 22
 * Modified: 2025-06-08 (doc for last function)
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
 * - createZeroMatrix(row, col)
 * - addTextToTextarea(txa, str)
 * - getColor(num)
 * - drawMatrixOnCanvas(can, m, color)
 */


/**
 * Creates an HTML element with required tag name, and optional style and ID.
 *
 * @param {string} tagName - The HTML tag name (e.g., 'div', 'span').
 * @param {Object|string} [arg2] - Either a style object or an ID string.
 * @param {Object|string} [arg3] - Either a style object or an ID string.
 * @returns {HTMLElement} The configured HTML element.
 */
function createElement(tagName, arg2, arg3) {
  if (!tagName || typeof tagName !== 'string') {
    throw new Error('tagName must be a non-empty string');
  }

  let id;
  let style;

  for (const arg of [arg2, arg3]) {
    if (typeof arg === 'string') {
      id = arg;
    } else if (arg && typeof arg === 'object') {
      style = arg;
    }
  }

  const el = document.createElement(tagName);

  if (id) el.id = id;
  if (style) Object.assign(el.style, style);
  
  if (el instanceof HTMLCanvasElement) {
    el.width = "";
    el.height = "";
  }
  
  return el;
}


/**
 * Creates a 2D matrix (array of arrays) filled with zeros.
 *
 * @param {number} row - The number of rows in the matrix.
 * @param {number} col - The number of columns in each row of the matrix.
 * @returns {number[][]} A 2D matrix of dimensions row x col filled with 0s.
 *
 * @example
 * createZeroMatrix(2, 3);
 * // Returns:
 * // [
 * //   [0, 0, 0],
 * //   [0, 0, 0]
 * // ]
 */
function createZeroMatrix(row, col) {
  const mat = [];
  for(let r = 0; r < row; r++) {
    const rs = [];
    for(let c = 0; c < col; c++) {
      rs.push(0);
    }
    mat.push(rs);
  }
  return mat;
}


/**
 * Converts a 2D matrix (array of arrays) into a formatted string.
 *
 * Each row of the matrix is converted into a string with space-separated values, and rows are separated by newline characters (`\n`).
 *
 * @param {number[][]} m - A 2D matrix to convert to string.
 * @returns {string} A string representation of the matrix with rows separated by newlines and columns separated by spaces.
 *
 * @example
 * matrixToStr([
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ]);
 * // Returns:
 * // "1 2 3\n4 5 6"
 */
function matrixToStr(m) {
  let s = "";
  const row = m.length;
  for(let r = 0; r < row; r++) {
    let rs = ""
    const col = m[r].length;
    for(let c = 0; c < col; c++) {
      rs += m[r][c];
      if(c < col-1) {
        rs += " ";
      }
    }
    s += rs;
    if(r < row-1) {
      s += "\n";
    }
  }
  return s;
}


/**
 * Appends a string to a textarea's content, inserting a newline if the textarea is not empty.
 *
 * If the textarea already contains text, the new string is appended on a new line. Otherwise, the string is inserted as the initial value.
 *
 * @param {HTMLTextAreaElement} txa - The textarea DOM element to modify.
 * @param {string} str - The string to append to the textarea's value.
 *
 * @example
 * // Assuming <textarea id="log"></textarea>
 * const txa = document.getElementById("log");
 * addTextToTextarea(txa, "Hello");
 * addTextToTextarea(txa, "World");
 * // Resulting value in textarea:
 * // Hello
 * // World
 */
function addTextToTextarea(txa, str) {
  if (txa.value === "") {
    txa.value += str;
  } else {
    txa.value += "\n" + str;
  }
}


/**
 * getColor - Returns a hexadecimal color code based on a numeric code between 10 and 99.
 *
 * Categories:
 *   1x — Wall (black to dark brown)
 *   2x — Gas (white to light green)
 *   3x — Fluid (light blue to light red)
 *   4x — Solid (primary, distinct)
 *   5x — Charge (diverging red-blue)
 *   6x — Source (warm tones)
 *   7x — Sink (cool tones)
 *   8x — Interface (metallic and neutral)
 *   9x — Field (rainbow spectrum)
 *
 * @param {number} num - Number from 10 to 99
 * @returns {string} - Hexadecimal color code
 */
function getColor(num) {
  const palette = {
    1: [ // Wall: black to dark brown
      "#000000", "#110c00", "#221800", "#332400", "#443000",
      "#553c00", "#664800", "#775400", "#886000", "#884400",
    ],
    2: [ // Gas: white to light gray
      "#ffffff", "#f8f8f8", "#f0f0f0", "#e8e8e8", "#e0e0e0",
      "#d8d8d8", "#d0d0d0", "#c8c8c8", "#c0c0c0", "#b8b8b8",
    ],
    3: [ // Fluid: very light blue to lighter than deep blue
      "#e3f2fd", "#d1e9fc", "#bfe0fb", "#add7f9", "#9bcef8",
      "#89c5f6", "#77bcf5", "#65b3f3", "#53aaf2", "#419fe9",
    ],
    4: [ // Solid: distinct colors
      "#005f60", "#2a9d8f", "#6a8532", "#e9c46a", "#f4a261",
      "#e76f51", "#6b1650", "#9c1057", "#e63946", "#ff99b6",
    ],
    9: [ // Filters  add on 20250624
      "#c0c0c0", "#c0c0c0", "#c0c0c0", "#c0c0c0", "#c0c0c0",
      "#c0c0c0", "#c0c0c0", "#c0c0c0", "#c0c0c0", "#c0c0c0",
    ],
  };

  const type = Math.floor(num / 10);
  const variant = num % 10;

  if (palette[type] && palette[type][variant] !== undefined) {
    return palette[type][variant];
  }
  return "#fff"; // fallback
}


/**
 * Draws a 2D matrix onto a HTML canvas element, coloring each cell based on a provided color-mapping function.
 *
 * This function scales the canvas to match its on-screen dimensions and fills each cell in the matrix with a color determined by the `color` callback. The matrix is assumed to be a 2D array where each element corresponds to a rectangular region on the canvas.
 *
 * @param {HTMLCanvasElement} can - The canvas element on which the matrix should be drawn.
 * @param {Array<Array<any>>} m - A 2D array (matrix) representing the data to be visualized. Each element is passed to the `color` function.
 * @param {function(any): string} color - A function that takes a matrix element and returns a color string (e.g., "#FF0000" or "rgba(0,0,0,0.5)").
 *
 * @example
 * const matrix = [
 *   [0, 1],
 *   [1, 0]
 * ];
 * const colorFn = val => val === 1 ? "#000000" : "#FFFFFF";
 * drawMatrixOnCanvas(document.getElementById("myCanvas"), matrix, colorFn);
 */
function drawMatrixOnCanvas(can, m, color) {
  const rect = can.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  
  can.width = width;
  can.height = height;
  can.style.width = width + "px";
  can.style.height = height + "px";
  
  const ctx = can.getContext("2d");
  
  const row = m.length;
  const col = m[0].length;
  
  const lx = width / col;
  const ly = height / row;
  
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      ctx.fillStyle = color(m[r][c]);
      ctx.fillRect(c * lx, r * ly, lx, ly);
    }
  }
}


// marker: 25e41.js
(() => {
  console.log("[marker] 25e41.js loaded");
})();
