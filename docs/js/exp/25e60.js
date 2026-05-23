/**
 * 25e44.js
 * Functions used in butiran/25e60 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-29
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
 * - addTextToTextarea(txa, str)
 * - getParamFromInput(el)
 * - getLineFromTextarea(el, keyword)
 * - getValueAfterKeyword(key, str)
 * - addExampleToTextarea(el)
 * - getBlockFromTextarea(el, keyword)
 * - getValuesBetweenKeywords(k1, k2, block)
 * - formatForTextarea(input)
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
 * Retrieves the value from a given input element.
 *
 * This function accesses the `value` property of the specified HTML input element and returns it. It assumes that the element passed in is a valid input element.
 *
 * @param {HTMLInputElement} el - The input element from which to get the value.
 * @returns {string} The current value of the input element.
 */
function getParamFromInput(el) {
  const key = el.value;
  return key;
}


/**
 * Finds and returns the line from a textarea that begins with the specified keyword followed by a space.
 *
 * This function splits the content of the given textarea element into lines, then searches for the first line that starts with the provided keyword followed by a space. If such a line is found, it is returned.
 *
 * @param {HTMLTextAreaElement} el - The textarea element containing multiline text.
 * @param {string} keyword - The keyword to search for at the beginning of a line.
 * @returns {string|undefined} The matched line starting with the keyword and a space, or undefined if no match is found.
 */
function getLineFromTextarea(el, keyword) {
  const str = el.value;
  const lines = str.split("\n");
  for (let l of lines) {
    const i = l.indexOf(keyword + " ");
    if (i === 0) {
      return l;
    }
  }
}


/**
 * Extracts and returns the value(s) following a specified keyword in a space-separated string.
 *
 * This function assumes the input string starts with a keyword followed by a value or values. If the string contains exactly two space-separated parts, it returns the second part as a string. If the string contains more than two parts, it returns an array containing all elements after the keyword. The result is also logged to the console.
 *
 * @param {string} key - The keyword expected at the beginning of the string (not currently used in logic).
 * @param {string} str - The full string containing the keyword followed by value(s), separated by spaces.
 * @returns {string | string[]} The value after the keyword if only one is present, or an array of values if multiple are present.
 */
function getValueAfterKeyword(key, str) {
  const vals = str.split(" ");
  let val;
  if (vals.length == 2) {
    val = vals[1];
  } else {
    val = vals.slice(1);
  }
  return val;
}


/**
 * Inserts a predefined example dataset into a textarea element.
 *
 * This function populates the given textarea with structured key-value pairs and two data blocks labeled `acceleration` and `velocity`. It uses the helper function `addTextToTextarea(el, text)` to append each line or block of text to the textarea.
 *
 * The example includes:
 * - Metadata such as ID, NAME, ANDROID status, VERSION, MASS, and COORD.
 * - Two labeled blocks of numerical data (`BLOCK acceleration` and `BLOCK velocity`) terminated by `END` lines.
 *
 * @param {HTMLTextAreaElement} el - The textarea element to which the example data will be appended.
 */
 function addExampleToTextarea(el) {
  addTextToTextarea(el, "ID a0x_3^f-9z");
  addTextToTextarea(el, "NAME Isaac_Bayu");
  addTextToTextarea(el, "ANDROID True");
  addTextToTextarea(el, "VERSION 2025v29.34.0.2e");
  addTextToTextarea(el, "MASS 57.8");
  addTextToTextarea(el, "COORD 20.8 -75.2");

  addTextToTextarea(el, "\n"
    + "BLOCK acceleration\n"
    + "1 2\n"
    + "3.5 -3\n"
    + "-4 1.2E-5\n"
    + "END"
  );

  addTextToTextarea(el, "\n"
    + "BLOCK velocity\n"
    + "0.1 -3 -4.3\n"
    + "1.2 0.1 5.3\n"
    + "-9.3 0.2 5.6\n"
    + "2.3 3.5 9.1\n"
    + "END"
  );
}


/**
 * Extracts a named data block from a textarea based on a given keyword.
 *
 * This function searches the contents of a textarea for a block of text that begins with a line like `BLOCK <keyword>` and ends with a line that starts with `END`. It returns all lines within that block, including the `BLOCK` and `END` lines.
 *
 * @param {HTMLTextAreaElement} el - The textarea element containing multiline text.
 * @param {string} keyword - The keyword identifying the block to extract (case-sensitive).
 * @returns {string[]} An array of strings representing the lines of the matched block.
 *                     Returns an empty array if no matching block is found.
 *
 * @example
 * // If the textarea contains:
 * // BLOCK acceleration
 * // 1 2
 * // 3 4
 * // END
 * getBlockFromTextarea(el, "acceleration");
 * // returns:
 * // ["BLOCK acceleration", "1 2", "3 4", "END"]
 */
function getBlockFromTextarea(el, keyword) {
  const str = el.value;
  const lines = str.split("\n");
  const n = lines.length;
  
  const block = [];
  let BEG_BLOCK = false;
  let END_BLOCK = false;
  
  for (let i = 0; i < n; i++) {
    let ibeg = lines[i].indexOf("BLOCK " + keyword);
    let iend = lines[i].indexOf("END");

    if(ibeg === 0) {
      BEG_BLOCK = true;
    }
    
    if(iend === 0 && BEG_BLOCK) {
      BEG_BLOCK = false;
      END_BLOCK = true;
      block.push(lines[i]);
    }
    
    if(BEG_BLOCK && !END_BLOCK) {
      block.push(lines[i]);
    }
  }
  
  return block;
}


/**
 * Extracts values from lines in a block that are located between two keyword markers.
 *
 * This function iterates over each line in the given block (an array of strings), and collects the values (split by spaces) from lines that **do not** begin with either of the specified keywords. It assumes that lines starting with `k1` or `k2` are markers and should be excluded from the returned data.
 *
 * @param {string} k1 - The starting keyword to exclude lines that begin with it.
 * @param {string} k2 - The ending keyword to exclude lines that begin with it.
 * @param {string[]} block - An array of strings representing lines within a block.
 * @returns {string[][]} An array of string arrays, where each inner array contains the space-separated values from valid lines.
 *
 * @example
 * const block = [
 *   "BLOCK data",
 *   "1 2 3",
 *   "4 5 6",
 *   "END"
 * ];
 * getValueBetweenKeywords("BLOCK", "END", block);
 * // returns: [["1", "2", "3"], ["4", "5", "6"]]
 */
function getValuesBetweenKeywords(k1, k2, block) {
  const vals = [];
  for(let b of block) {
    const p1 = b.indexOf(k1);
    const p2 = b.indexOf(k2);
    
    if(!(p1 == 0 || p2 == 0)) {
      const c = b.split(" ");
      vals.push(c);
    }
  }
  
  return vals;
}


/**
 * Formats a variable into a multi-line string suitable for display in a <textarea>.
 *
 * Supported input types:
 * - Primitive values (string, number, boolean): returned as-is (converted to string).
 * - Arrays: each element appears on its own line.
 * - 2D arrays (arrays of arrays): each sub-array appears on its own line with elements separated by tabs.
 *
 * Examples:
 * formatForTextarea(42) ➝ "42"
 * formatForTextarea(["apple", "banana", "cherry"]) ➝ "apple\tbanana\tcherry"
 * formatForTextarea([[1, 2], [3, 4]]) ➝ "1\t2\n3\t4"
 *
 * @param {any} input - The input variable to format.
 * @returns {string} A formatted, multi-line string representation.
 */
function formatForTextarea(input) {
  if (input === null || input === undefined) {
    return String(input);
  }

  // Handle 2D arrays
  if (Array.isArray(input) && input.every(item => Array.isArray(item))) {
    return input.map(row => row.map(String).join('\t')).join('\n');
  }

  // Handle 1D arrays
  if (Array.isArray(input)) {
    return input.map(String).join('\t');
  }

  // Primitive types
  if (['string', 'number', 'boolean'].includes(typeof input)) {
    return String(input);
  }

  // Fallback for unsupported types (e.g., objects, functions)
  try {
    return JSON.stringify(input, null, 2); // nicely formatted JSON
  } catch (err) {
    return String(input); // fallback to basic string conversion
  }
}


// marker: 25e60.js
(() => {
  console.log("[marker] 25e60.js loaded");
})();
