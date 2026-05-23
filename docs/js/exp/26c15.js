/**
 * 26c15.js
 * Helper functions for butiran-x/26c15 note.
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-03-03
 *
 * Exports:
 * - convertBlokToDataSet(block)
 */


/**
 * Converts a text block (where the first line contains column labels)
 * into a dataset represented as a JavaScript object.
 *
 * The resulting object has the form:
 * {
 *   "columnName1": [values],
 *   "columnName2": [values],
 *   ...
 * }
 *
 * @param {string} block - Multiline text where the first line contains column labels
 *   and each subsequent line contains delimited values.
 * @param {string} delim - The delimiter used to separate values in each line.
 * @returns {{ [key: string]: Array<string | number> }} An object mapping column names to arrays of values.
 *
 * @example
 * const dataset = convertBlockToDataSet(block, ",");
 */
function convertBlockToDataset(block, delim) {
  const dataset = {};
  
  const lines = block.split("\n");
  const header = lines[0].split(delim);
  
  const nrow = lines.length;
  const ncol = header.length;

  for(h of header) {
    dataset[h] = [];
  }
  
  for(let i = 1; i < nrow; i++) {
    let cols = lines[i].split(delim);
    for(let j = 0; j < ncol; j++) {
      dataset[header[j]].push(cols[j]);
    }
  }
  
  return dataset;
}


// marker: 26c15.js
(() => {
  console.log("[marker] 26c15.js loaded");
})();
