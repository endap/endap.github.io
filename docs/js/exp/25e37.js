/**
 * 25e37.js
 * Functions used in butiran/25e37 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-19
 *
 * Exported:
 * - createDiv(width, height, stroke, fill)
 * - createTextarea(width, height)
 * - createButton(width, height, caption)
 * - addTextToTextarea(el, lines)
 * - getCoords()
 * - shuffle(arr)
 * - createPopulation(arr, n)
 * - joinNestedArrays(arr)
 * - addLineNumberToArray(arr)
 * - addLineNumberToArray(arr)
 * - evaluate(chro, net)
 * - addTextToTextarea2(el, lines1, lines2)
 * - syncScroll(source, target)
 */


/**
 * Creates a styled div element.
 * @param {number} width - Width of the div.
 * @param {number} height - Height of the div.
 * @param {string} stroke - Stroke color.
 * @param {string} fill - Fill color.
 * @returns {HTMLDivElement}
 */
function createDiv(width, height, stroke, fill) {
  const div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";
  div.style.border = "0.5px solid " + stroke;
  div.style.background = fill;
  return div;
}


/**
 * Creates a styled textarea element.
 * @param {number} width - Width of the textarea.
 * @param {number} height - Height of the textarea.
 * @returns {HTMLTextareaElement}
 */
function createTextarea(width, height) {
  const txa = document.createElement("textarea");
  txa.style.width = width + "px";
  txa.style.height = height + "px";
  txa.style.overflowY = "scroll";
  return txa;
}


/**
 * Creates a styled button element.
 * @param {number} width - Width of the button.
 * @param {number} height - Height of the button.
 * @param {string} caption - Caption of the button.
 * @returns {HTMLButtonElement}
 */
function createButton(width, height, caption) {
  const btn = document.createElement("button");
  btn.style.width = width + "px";
  btn.style.height = height + "px";
  btn.innerHTML = caption;
  return btn;
}


/**
 * Adds multiple lines of text to a textarea element.
 * @param {HTMLTextAreaElement} el - The textarea element to append text to.
 * @param {string[]} lines - An array of strings to be added as lines.
 * @returns {void}
 */
function addTextToTextarea(el, lines) {
  for(let l of lines) {
    el.value += l + "\n";
  }
}


/**
 * Generates an array of coordinate objects from predefined x and y values.
 * Each coordinate object has `x` and `y` properties from corresponding indices.
 *
 * @returns {Array<{x: number, y: number}>} Array of coordinate objects.
 */
function getCoords() {
  const x = [0, 5, 9, 8, 4, 1, 3, 7, 6, 2];
  const y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const n = 10;
  const Coords = [];
  for(let i = 0; i < n; i++) {
    const coord = {
      x: x[i],
      y: y[i],
    };
    Coords.push(coord);
  }
  return Coords;
}


/**
 * Randomly shuffles the elements of an array in place using the Fisher–Yates algorithm.
 *
 * This function modifies the original array, ensuring that all possible permutations are equally likely.
 *
 * @param {any[]} arr - The array to be shuffled. The array is modified in place.
 * @returns {any[]} The shuffled array (same reference as the input).
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * shuffle(numbers);
 * console.log(numbers); // [3, 1, 5, 2, 4] (example output; actual result will vary)
 */
function shuffle(array) {
  const arr = array.slice(); // Create a shallow copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}


/**
 * Generates a population of randomly shuffled arrays (chromosomes).
 *
 * This function creates a population of `n` chromosomes by shuffling the elements of the input array `arr`. Each chromosome is a new permutation of the original array. Useful in genetic algorithms where initial populations are composed of permutations.
 *
 * @param {Array} arr - The array representing a single chromosome or gene pool.
 * @param {number} n - The number of individuals (chromosomes) to generate in the population.
 * @returns {Array<Array>} An array of `n` chromosomes, each a shuffled permutation of `arr`.
 *
 * @example
 * const genePool = [1, 2, 3];
 * const population = createPopulation(genePool, 2);
 * // Example output: [[3, 1, 2], [2, 3, 1]]
 */
function createPopulation(arr, n) {
  const popu = [];
  for(let i = 0; i < n; i++) {
    let chro = shuffle(arr);
    popu.push(chro);
  }
  return popu;
}


/**
 * Converts an array of number arrays into an array of strings by joining
 * each nested array's elements into a single string.
 *
 * @param {number[][]} arr - An array where each element is a nested array of numbers.
 * @returns {string[]} An array of strings, where each string is the result of joining
 *                     the numbers in the corresponding nested array.
 *
 * @example
 * joinNestedArrays([[1, 2, 3], [4, 5], [6]])
 * // Returns: ['123', '45', '6']
 */
function joinNestedArrays(arr) {
  const str = [];
  for (let i of arr) {
    const s = i.join("");
    str.push(s);
  }
  return str;
}


/**
 * Adds line numbers to each element of an array of strings.
 *
 * Each line number is zero-padded based on the number of elements to ensure consistent formatting.
 *
 * @param {string[]} arr - The array of strings to process.
 * @returns {string[]} A new array where each string is prefixed with a zero-padded line number.
 *
 * @example
 * addLineNumberToArray(["apple", "banana", "cherry"])
 * // returns ["00 apple", "01 banana", "02 cherry"]
 */
function addLineNumberToArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  
  const len = arr.length;
  const digits = len > 0 ? Math.ceil(Math.log10(len)) : 1;
  const result = [];
  
  for (const [i, val] of arr.entries()) {
    const num = String(i).padStart(digits, '0');
    result.push(`${num} ${val}`);
  }
  
  return result;
}


/**
 * Calculates the total Euclidean distance for a path through a series of points.
 *
 * @param {number[]} chro - An array of indices representing the order of points to visit.
 *                          Each index refers to an entry in the `net` array.
 * @param {{x: number, y: number}[]} net - An array of point objects, each with `x` and `y` coordinates.
 *
 * @returns {number} The total distance of the path defined by `chro`, summing straight-line distances between each consecutive pair of points.
 *
 * @example
 * const net = [
 *   {x: 0, y: 0},
 *   {x: 3, y: 4},
 *   {x: 6, y: 8}
 * ];
 * const chro = [0, 1, 2];
 * const total = evaluate(chro, net); // Returns 10
 */
function evaluate(chro, net) {
  let dist = 0;
  for(let i = 0; i < chro.length-1; i++) {
    let dx = net[chro[i+1]].x - net[chro[i]].x;
    let dy = net[chro[i+1]].y - net[chro[i]].y;
    let dr = Math.sqrt(dx**2 + dy**2);
    dist += dr;
  }
  return dist;
}


/**
 * Evaluates a population of chromosomes using a neural network
 * and scales the result to a range between 0 and 100.
 *
 * This function first computes raw evaluation scores for each chromosome
 * using the provided `evaluate` function and the neural network `net`.
 * Then it scales those scores linearly to a range from 0 to 100.
 * It also handles edge cases where all scores are the same.
 *
 * @param {Array<any>} popu - The population of chromosomes to evaluate.
 * @param {Object} net - The neural network or evaluation model used in scoring.
 * @returns {number[]} An array of scaled evaluation scores in the range [0, 100].
 *
 * @example
 * const scores = evaluatePopulation(popu, net);
 * // scores might be [0, 25, 75, 100] depending on evaluation
 */
function evaluatePopulation(popu, net) {
  // Compute raw evaluation scores
  const dist = popu.map(chro => evaluate(chro, net));
  
  // Find minimum and maximum scores
  const dmin = Math.min(...dist);
  const dmax = Math.max(...dist);
  
  // Scale each score to the 0-100 range
  const dist2 = dist.map(d => {
    if (dmax === dmin) return 50; // Avoid division by zero; return neutral value
    
    let scaled = 90 * (d - dmin) / (dmax - dmin);
    scaled = Math.round(scaled); // Use rounding for balanced distribution
    scaled = Math.max(10, Math.min(90, scaled)); // Clamp to [0, 100]

    return scaled;
  });
  
  return dist2;
}


/**
 * Appends combined lines from two arrays to the given textarea element.
 *
 * @param {HTMLTextAreaElement} el - The textarea element to which text will be added.
 * @param {string[]} lines1 - First array of strings (left side of each line).
 * @param {string[]} lines2 - Second array of strings (right side of each line).
 */
function addTextToTextarea2(el, lines1, lines2) {
  const n = lines1.length;
  for(let i = 0; i < n; i++) {
    el.value += "x" + lines1[i] + " " + lines2[i] + "\n";
  }
}


/**
 * Synchronizes the vertical scroll position of a target element
 * to match that of a source element.
 *
 * @param {HTMLElement} source - The element whose scroll position is used as the reference.
 * @param {HTMLElement} target - The element whose scroll position is updated to match the source.
 *
 * @example
 * const textarea1 = document.getElementById('textarea1');
 * const textarea2 = document.getElementById('textarea2');
 * 
 * textarea1.addEventListener('scroll', () => {
 *   syncScroll(textarea1, textarea2);
 * });
 */
function syncScroll(source, target) {
  target.scrollTop = source.scrollTop;
}

// marker: 25e37.js
(() => {
  console.log("[marker] 25e37.js loaded");
})();