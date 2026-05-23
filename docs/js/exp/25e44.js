/**
 * 25e44.js
 * Functions used in butiran/25e44 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-22 -- 24
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
 * - addTextToTextarea(txa, str)
 * - getNumbers(txa, delim)
 * - sumPrecise(numbers)
 * - calcFromTextarea(txa)
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
 * Extracts and parses floating-point numbers from a delimited string input.
 *
 * @function getNumbers
 * @param {HTMLTextAreaElement} txa - A textarea DOM element containing the input string.
 * @param {string} delim - The delimiter used to split the string into individual substrings.
 * @returns {number[]} An array of parsed numbers (as floats). Non-numeric values are converted to NaN.
 *
 * @example
 * // Given a textarea with value "3.14,2.71,42"
 * getNumbers(textareaElement, ",");
 * // returns: [3.14, 2.71, 42]
 */
function getNumbers(txa, delim) {
  const nums = [];
  const text = txa.value;
  if(text.length > 0) {
    const strs = text.split(delim);
    for(let s of strs) {
      nums.push(parseFloat(s));
    }
  }
  return nums;
}


/**
 * Computes the precise sum of an array of numbers using the Kahan summation algorithm.
 *
 * This method reduces the numerical error that can occur when adding many floating-point numbers,
 * which is especially useful when dealing with large datasets or numbers of significantly different magnitudes.
 *
 * @function sumPrecise
 * @param {number[]} numbers - An array of floating-point numbers to be summed.
 * @returns {number} The numerically stable sum of the input numbers.
 *
 * @example
 * sumPrecise([0.1, 0.2, 0.3]);
 * // returns: 0.6 (with improved precision over naive summation)
 */
function sumPrecise(numbers) {
  let sum = 0;
  let c = 0;
  for (const number of numbers) {
    const y = number - c;
    const t = sum + y;
    c = (t - sum) - y;
    sum = t;
  }
  return sum;
}


/**
 * Calculates descriptive statistics from a semicolon-delimited list of numbers
 * extracted from a textarea element.
 *
 * This function parses the textarea's content into numbers, then computes:
 * - Minimum value
 * - Maximum value
 * - Range
 * - Sum (using Kahan summation for precision)
 * - Count of values (n)
 * - Average (mean)
 * - Median (middle value)
 * - Mode (most frequent value(s), or "none" if all values are unique)
 * - Variance
 * - Standard deviation
 * - Skewness (third standardized moment)
 * - Kurtosis (fourth standardized moment, excess kurtosis = kurtosis - 3)
 *
 * Results are returned as an array of formatted strings, suitable for display.
 *
 * @function calcFromTextarea
 * @param {HTMLTextAreaElement} txa - A textarea DOM element containing semicolon-delimited numbers.
 * @returns {string[]} An array of strings summarizing the computed statistics.
 *
 * @example
 * // If the textarea contains "1;2;2;3;4"
 * calcFromTextarea(textareaElement);
 * // returns: [
 * //   "min = 1",
 * //   "max = 4",
 * //   "range = 3",
 * //   "sum = 12",
 * //   "n = 5",
 * //   "avg = 2.4",
 * //   "median = 2",
 * //   "mode = 2",
 * //   "var = 1.040",
 * //   "std = 1.020",
 * //   "skew = 0.123",
 * //   "kurt = -1.578"
 * // ]
 */
function calcFromTextarea(txa) {
  const nums = getNumbers(txa, ";");

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const range = max - min;
  const sum = sumPrecise(nums);
  const n = nums.length;
  const avg = sum / n;

  // Median calculation
  const sorted = [...nums].sort((a, b) => a - b);
  let median;
  if (n % 2 === 0) {
    median = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  } else {
    median = sorted[Math.floor(n / 2)];
  }

  // Mode calculation
  const freq = new Map();
  for (let x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }
  const maxFreq = Math.max(...freq.values());
  const modes = [...freq.entries()]
    .filter(([_, count]) => count === maxFreq)
    .map(([value]) => value);

  const modeStr = modes.length === nums.length
    ? "none"
    : modes.join(", ");

  // Moments calculation
  let m2 = 0, m3 = 0, m4 = 0;
  for (let x of nums) {
    const dev = x - avg;
    const dev2 = dev ** 2;
    const dev3 = dev ** 3;
    const dev4 = dev ** 4;
    m2 += dev2;
    m3 += dev3;
    m4 += dev4;
  }
  m2 /= n;
  m3 /= n;
  m4 /= n;

  const std = Math.sqrt(m2);
  const skew = m3 / (std ** 3);
  const kurt = m4 / (std ** 4) - 3;

  const text = [];
  text.push("min = " + min);
  text.push("max = " + max);
  text.push("range = " + range);
  text.push("sum = " + sum);
  text.push("n = " + n);
  text.push("avg = " + avg.toFixed(3));
  text.push("median = " + median);
  text.push("mode = " + modeStr);
  text.push("var = " + m2.toFixed(3));
  text.push("std = " + std.toFixed(3));
  text.push("skew = " + skew.toFixed(3));
  text.push("kurt = " + kurt.toFixed(3));

  return text;
}

// marker: 25e44.js
(() => {
  console.log("[marker] 25e44.js loaded");
})();