/**
 * 25f45.js
 * Functions used in butiran/25f45 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-08
 *
 * Exported:
 * - drawWall(m, p1, p2, w)
 * - getLinesFromTextarea(el, keyword)
 * - addWorldAndWalls(el)
 */


/**
 * Draws a straight wall on a 2D matrix `m` from point `p1` to `p2` using Bresenham's line algorithm.
 *
 * @param {number[][]} m - 2D matrix representing the simulation world (rows × columns).
 * @param {[number, number]} p1 - Starting coordinate as [x, y] (column, row).
 * @param {[number, number]} p2 - Ending coordinate as [x, y] (column, row).
 * @param {number} w - Wall type or value to fill into each cell along the wall.
 *
 * @returns {void} - The matrix `m` is modified in-place; function does not return anything.
 *
 * @example
 * let m = Array.from({ length: 10 }, () => Array(10).fill(0));
 * drawWall(m, [3, 2], [5, 2], 1);  // Horizontal wall at row 2 from col 3 to 5
 * drawWall(m, [0, 0], [5, 5], 2);  // Diagonal wall from top-left to center
 * drawWall(m, [7, 0], [7, 4], 3);  // Vertical wall in column 7 from row 0 to 4
 */
function drawWall(m, p1, p2, w) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const rows = m.length;
  const cols = m[0].length;

  const dx = Math.abs(x2 - x1);
  const dy = -Math.abs(y2 - y1);
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  let err = dx + dy;

  let x = x1;
  let y = y1;

  while (true) {
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      m[y][x] = w;  // m[row][col] = m[y][x]
    }

    if (x === x2 && y === y2) break;
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y += sy;
    }
  }
}


/**
 * Finds and returns all lines from a textarea that begin with the specified keyword followed by a space.
 *
 * This function splits the content of the given textarea element into lines, then collects all lines that start with the provided keyword followed by a space.
 *
 * @param {HTMLTextAreaElement} el - The textarea element containing multiline text.
 * @param {string} keyword - The keyword to search for at the beginning of lines.
 * @returns {string[]} An array of matched lines starting with the keyword and a space.
 */
function getLinesFromTextarea(el, keyword) {
  const str = el.value;
  const lines = str.split("\n");
  return lines.filter(l => l.indexOf(keyword + " ") === 0);
}


/**
 * Adds predefined world and wall configuration text to a given textarea element.
 *
 * This function appends structured simulation input for an Agent-Based Model (ABM)
 * of granular material behavior to a given textarea element. The input follows a
 * simple line-based format that includes:
 *   - Simulation metadata
 *   - World dimensions
 *   - Enclosed boundary walls to keep grains within the simulation area
 *   - Internal vertical walls forming a container (e.g., cylindrical boundaries)
 *
 * The structure is intended to be parsed by an ABM simulator observing the
 * angle of repose (AOR) in a 2D granular system.
 *
 * @param {HTMLTextAreaElement} el - The textarea DOM element to which the configuration
 *                                   text will be appended.
 *
 * Dependencies:
 *   - Requires `addTextToTextarea(el, text)` to be defined elsewhere in the codebase.
 *
 * Example usage:
 *   const textarea = document.getElementById('inputField');
 *   addWorldAndWalls(textarea);
 */
function addWorldAndWalls(el) {
  addTextToTextarea(el, "# ABM Boundary Condition Input"); /* 20250615 */
  addTextToTextarea(el, "# Format Version: 1.0");
  addTextToTextarea(el, "# Author: [Your Name]");
  addTextToTextarea(el, "# Date: 2025-06-08");
  addTextToTextarea(el, "");
  addTextToTextarea(el, "# World dimensions");
  addTextToTextarea(el, "WORLD 40 40");
  addTextToTextarea(el, "");
  addTextToTextarea(el, "# Enclosed boundary");
  addTextToTextarea(el, "WALL 0 0 0 39 10");
  addTextToTextarea(el, "WALL 0 39 39 39 10");
  addTextToTextarea(el, "WALL 39 39 39 0 10");
  addTextToTextarea(el, "WALL 39 0 0 0 10");
  addTextToTextarea(el, "");
  addTextToTextarea(el, "# Grains container");
  addTextToTextarea(el, "WALL 15 19 15 38 16");
  addTextToTextarea(el, "WALL 24 19 24 38 16");
}



// marker: 25f45.js
(() => {
  console.log("[marker] 25f45.js loaded");
})();
