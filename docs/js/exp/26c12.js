/**
 * 26c12.js
 * Helper functions for butiran-x/26c12 note.
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-03-03
 *
 * Exports:
 * - convertLineToParams(id, key)
 */


 /**
 * Converts a line (string) read from a textarea element into parameter value(s).
 *
 * @param {string} line - The line to convert.
 * @param {"string" | "int" | "float" | "array-float"} type - The expected parameter type.
 * @returns {string | number | number[]} The parsed parameter value(s) based on the specified type.
 *
 * @example
 * const value = convertLineToParams("10.5 20.3", "array-float");
 */
function convertLineToParams(line, type="string") {
  let param = null;
  if(type == "int") {
    param = parseInt(line);
  } else if(type == "float") {
    param = parseFloat(line);
  } else if(type == "array-float") {
    param = [];
    let arr = line.split(",");
    for(a of arr) {
      param.push(parseFloat(a));          
    }
  } else {
    param = line;
  }
  return param;
}


// marker: 26c12.js
(() => {
  console.log("[marker] 26c12.js loaded");
})();
