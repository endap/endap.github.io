/**
 * 26c14.js
 * Helper functions for butiran-x/26c14 note.
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-03-03
 *
 * Exports:
 * - readBlockFromTexarea(id, key)
 */


 /**
 * Reads a block from a textarea element that starts with the specified key
 * and ends with a blank line.
 *
 * @param {string} id - The ID of the textarea element to read from.
 * @param {string} key - The key (first word) identifying the start of the block.
 * @returns {string} The extracted block as a string (excluding the terminating blank line).
 *
 * @example
 * const block = readBlockFromTextarea("text-input", "KEY");
 */
function readBlockFromTextarea(id, key) {
  /** @type {HTMLTextareaElement|null} */
  const el = document.getElementById(id);
  
  if (!(el instanceof HTMLTextAreaElement)) return null;
  
  let reading_block = false;
  
  const lines = el.value.split("\n");
  let block = null;
  for(l of lines) {
    if(l.length == 0) {
      reading_block = false;
    }
    
    if(reading_block) {
      block.push(l);
    }
    
    if(l.indexOf(key) == 0) {
      block = [];
      reading_block = true;
    }
  }
  
  if(block != null) {
    let block2 = block.join("\n");
    block = block2;
  }
  
  return block;
}


// marker: 26c14.js
(() => {
  console.log("[marker] 26c14.js loaded");
})();
