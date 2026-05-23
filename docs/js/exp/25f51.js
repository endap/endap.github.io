/**
 * 25f51.js
 * Functions used in butiran/25f51 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-16
 *
 * Exported:
 * - addBlankLine(el)
 * - addHeader(el)
 * - addWorld(el)
 * - addEnclosedWall(el)
 * - addContainerWall(el)
 * - addMovementProbabilityMatrix(el)
 * - addAgents(el)
 * - clearInput(el)
 */


/**
 * Appends a blank line to a textarea element.
 *
 * This function adds an empty line to the given textarea-like element using
 * `addTextToTextarea`. It can be used for separating sections or improving 
 * readability in generated configuration or script files.
 *
 * @param {HTMLElement} el - The textarea DOM element where the blank line is appended.
 */
function addBlankLine(el) {
  addTextToTextarea(el, "");
}


/**
 * Inserts a standard header block into a textarea element for documentation purposes.
 *
 * This function appends a comment block to the provided textarea-like element using `addTextToTextarea`. The header typically appears at the top of a configuration file and includes metadata such as:
 *   - A title or purpose (e.g., "ABM Boundary Condition Input"),
 *   - The format version,
 *   - Author name (replace `[Your Name]` as appropriate),
 *   - Creation or modification date.
 *
 * All lines are prefixed with `#` to indicate comments.
 *
 * @param {HTMLElement} el - The textarea DOM element to which the header lines are appended.
 */
function addHeader(el) {
  addTextToTextarea(el, "# ABM Boundary Condition Input");
  addTextToTextarea(el, "# Format Version: 1.2");
  addTextToTextarea(el, "# Author: [Your Name]");
  addTextToTextarea(el, "# Date: 2025-06-16");
}


/**
 * Sets the dimensions of the simulation world and appends the definition to a textarea element.
 *
 * This function writes a `WORLD` declaration into the given textarea-like element using `addTextToTextarea`. The format specifies the size of the simulation grid or environment.
 *
 * Format:
 *   - "WORLD width height"
 *     - `width`: Number of columns (horizontal size),
 *     - `height`: Number of rows (vertical size).
 *
 * In this case, the world is defined as a 40×40 grid.
 * A comment line is also added for clarity.
 *
 * @param {HTMLElement} el - The textarea DOM element to which the world dimensions are appended.
 */
function addWorld(el) {
  addTextToTextarea(el, "# World dimensions");
  addTextToTextarea(el, "WORLD 40 40");
}


/**
 * Inserts predefined wall definitions to form a closed rectangular boundary.
 *
 * This function appends four wall segments to the provided textarea-like element using `addTextToTextarea`. The walls form a fully enclosed rectangular boundary (a box) around a 40×40 grid area, assuming zero-based coordinates. This may serve as the outer limit for simulations (e.g., particles, agents, fluids).
 *
 * Each wall is defined by:
 *   - A "WALL" keyword,
 *   - Start and end coordinates (x1, y1) to (x2, y2),
 *   - A thickness or wall type value (here, 10).
 *
 * Wall layout:
 *   - Left wall: from top-left to bottom-left
 *   - Bottom wall: from bottom-left to bottom-right
 *   - Right wall: from bottom-right to top-right
 *   - Top wall: from top-right to top-left
 *
 * @param {HTMLElement} el - The textarea DOM element to which the wall definitions are appended.
 */
function addEnclosedWall(el) {
  addTextToTextarea(el, "# Enclosed wall");
  addTextToTextarea(el, "WALL 0 0 0 39 10");
  addTextToTextarea(el, "WALL 0 39 39 39 10");
  addTextToTextarea(el, "WALL 39 39 39 0 10");
  addTextToTextarea(el, "WALL 39 0 0 0 10");
}


/**
 * Inserts predefined wall definitions representing a container into a textarea element.
 *
 * This function appends wall definitions to the provided textarea-like element using `addTextToTextarea`. Each wall is defined using the "WALL" keyword followed by:
 *   - Two pairs of coordinates (x1, y1, x2, y2) defining the endpoints of the wall,
 *   - A wall thickness or type parameter (e.g., 16).
 *
 * The two walls likely form the vertical boundaries of a container (e.g., for grains) in a simulation space. A comment line is included at the top to indicate the purpose.
 *
 * Format per line:
 *   "WALL x1 y1 x2 y2 t"
 *     - x1, y1: Starting point of the wall
 *     - x2, y2: Ending point of the wall
 *     - t: Wall type or thickness
 *
 * @param {HTMLElement} el - The textarea DOM element to which the wall definitions are appended.
 */
function addContainerWall(el) {
  addTextToTextarea(el, "# Grains container");
  addTextToTextarea(el, "WALL 15 11 15 29 16");
  addTextToTextarea(el, "WALL 24 11 24 29 16");
}


/**
 * Inserts predefined movement probability matrices (MPMAT) into a textarea element.
 *
 * This function appends multiple movement probability matrices for different agent types into the given textarea element using `addTextToTextarea`. Each matrix is associated with a specific agent type and consists of three rows of three floating-point numbers, which likely represent directional movement probabilities in a 3x3 neighborhood.
 *
 * The format is:
 *   - "MPMAT <type>" declares the agent type,
 *   - Followed by 3 lines of 3 probabilities (row-wise),
 *   - A blank line separates different matrices.
 *
 * Agent types in this function:
 *   - 48: Fully downward-biased movement (0.50 down-left, 0.50 down),
 *   - 41: Heavily favors straight down (0.80) with slight diagonal movement,
 *   - 43: Prefers down and down-right (0.50 each).
 *
 * @param {HTMLElement} el - The textarea DOM element to which the matrices are appended.
 */
function addMovementProbabilityMatrix(el) {
  addTextToTextarea(el, "# Movement probability matrix");
  addTextToTextarea(el, "MPMAT 48");
  addTextToTextarea(el, "0.12 0.12 0.12");
  addTextToTextarea(el, "0.12 0.04 0.12");
  addTextToTextarea(el, "0.12 0.12 0.12");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 41");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.16 0.17 0.16");
  addTextToTextarea(el, "0.17 0.17 0.17");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 43");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 1.00 0.00");
}


/**
 * Inserts a predefined set of AGENT entries into a textarea element.
 *
 * This function adds multiple lines of agent definitions into a textarea-like element using the `addTextToTextarea` function. Each agent is defined by a line in the format: "AGENT x y t", where:
 *   - `x` and `y` represent the agent's grid coordinates,
 *   - `t` represents the agent type.
 *
 * The agents are grouped into three blocks, possibly representing different categories or locations of agents. Blank lines separate these blocks.
 *
 * @param {HTMLElement} el - The textarea DOM element to which the agent lines are appended.
 */
function addAgents(el) {
  addTextToTextarea(el, "# Agents");
  addTextToTextarea(el, "AGENT 10 10 48");
  addTextToTextarea(el, "AGENT 11 11 48");
  addTextToTextarea(el, "AGENT 12 10 48");
  addTextToTextarea(el, "AGENT 13 11 48");
  addTextToTextarea(el, "AGENT 10 12 48");
  addTextToTextarea(el, "AGENT 11 13 48");
  addTextToTextarea(el, "AGENT 12 12 48");
  addTextToTextarea(el, "AGENT 13 13 48");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 18 15 41");
  addTextToTextarea(el, "AGENT 19 16 41");
  addTextToTextarea(el, "AGENT 20 15 41");
  addTextToTextarea(el, "AGENT 21 16 41");
  addTextToTextarea(el, "AGENT 18 17 41");
  addTextToTextarea(el, "AGENT 19 18 41");
  addTextToTextarea(el, "AGENT 20 17 41");
  addTextToTextarea(el, "AGENT 21 18 41");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 27 13 43");
  addTextToTextarea(el, "AGENT 28 14 43");
  addTextToTextarea(el, "AGENT 29 13 43");
  addTextToTextarea(el, "AGENT 30 14 43");
  addTextToTextarea(el, "AGENT 27 15 43");
  addTextToTextarea(el, "AGENT 28 16 43");
  addTextToTextarea(el, "AGENT 29 15 43");
  addTextToTextarea(el, "AGENT 30 16 43");
}


/**
 * Clears all content from the input or textarea element.
 *
 * This function sets the `value` property of the given element to an empty string, effectively erasing any text the user has entered. It is typically used to reset a form field or prepare the textarea for new input.
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} el - The input or textarea element to be cleared.
 */
function clearInput(el) {
  el.value = "";
}


// marker: 25f51.js
(() => {
  console.log("[marker] 25f51.js loaded");
})();
