/**
 * 25f54.js
 * Functions used in butiran/25f53 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-18
 *
 * Exported:
 * - addContainerWall2(el)
 * - addMovementProbabilityMatrix2(el)
 * - addAgents2(el)
 * - addWorld2(el)
 * - addEnclosedWall2(el)
 */


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
function addContainerWall2(el) {
  addTextToTextarea(el, "# Grains container");
  addTextToTextarea(el, "WALL 30 10 30 50 16");
  addTextToTextarea(el, "WALL 48 10 48 50 16");
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
function addMovementProbabilityMatrix2(el) {
  addTextToTextarea(el, "# Movement probability matrix");
  addTextToTextarea(el, "MPMAT 48");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.10 0.00");
  addTextToTextarea(el, "0.30 0.30 0.30");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 41");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.05 0.10 0.05");
  addTextToTextarea(el, "0.25 0.30 0.25");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 43");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.10 0.10 0.10");
  addTextToTextarea(el, "0.20 0.30 0.20");
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
function addAgents2(el) {
  const tA = 48;
  const tB = 43;
  const tC = 41
  const tZ = [tA, tB, tC];
  
  const x1 = 31;
  const y1 = 10;
  const x2 = 47;
  const y2 = 50;
  
  addTextToTextarea(el, "# Agents");
  for(y = y1; y <= y2; y++) {
    for(x = x1; x <= x2; x++) {
      
      z = Math.floor(Math.random() * 3);
      
      addTextToTextarea(el,
        "AGENT"
        + " " + x
        + " " + y
        + " " + tZ[z]
      );
    }
  }
  
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
function addWorld2(el) {
  addTextToTextarea(el, "# World dimensions");
  addTextToTextarea(el, "WORLD 80 80");
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
function addEnclosedWall2(el) {
  addTextToTextarea(el, "# Enclosed wall");
  addTextToTextarea(el, "WALL 0 0 0 79 10");
  addTextToTextarea(el, "WALL 0 79 79 79 10");
  addTextToTextarea(el, "WALL 79 79 79 0 10");
  addTextToTextarea(el, "WALL 79 0 0 0 10");
}


// marker: 25f54.js
(() => {
  console.log("[marker] 25f54.js loaded");
})();
