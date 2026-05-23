/**
 * 26c10.js
 * Helper functions for butiran-x/26c10 note.
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-03-03
 *
 * Exports:
 * - readLineFromTextarea(id, key)
 */


/**
 * Reads a line from a textarea element that starts with the specified key.
 *
 * @param {string} id - The ID of the textarea element to read from.
 * @param {string} key - The key (first word) identifying the line to retrieve.
 * @returns {string} The content of the line after the specified key.
 *
 * @example
 * const line = readLineFromTextarea("text-input", "KEY");
 */
function readLineFromTextarea(id, key) {
  /** @type {HTMLTextareaElement|null} */
  const el = document.getElementById(id);
  
  if (!(el instanceof HTMLTextAreaElement)) return null;
  
  const lines = el.value.split("\n");
  let line = null;
  for(l of lines) {
    const cols = l.split(" ");
    if(cols[0] == key) {
      line = cols[1];
    }
  }
  return line;
}


// marker: 26c10.js
(() => {
  console.log("[marker] 26c10.js loaded");
})();
