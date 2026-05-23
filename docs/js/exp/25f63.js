/**
 * 25f63.js
 * Functions used in butiran/25f62 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-24 -- 25
 *
 * Exported:
 * - addWorld3(el)
 * - addEnclosedWall3(el)
 * - addContainerWall3(el)
 * - addMovementProbabilityMatrix3(el)
 * - addAgents3(el)
 * - addFilters(el)
 * - simulate2()
 */


let filterPost = [];
let filterType = [];
let filterCount = [];


/**
 * Appends predefined filter wall configurations to a textarea element.
 *
 * This function writes a fixed set of filter wall entries to the given textarea-like element using `addTextToTextarea`. It generates wall commands at specific positions and with specified types, possibly for use in a simulation or configuration script.
 *
 * Global variables `filterPost`, `filterType`, and `filterCount` are initialized for later use or tracking.
 *
 * @param {HTMLElement} el - The textarea DOM element where the filter data is appended.
 */
function addFilters(el) {
  
  filterPost = [25, 35, 45, 55, 65, 75];
  filterType = [47, 48, 49, 43, 41, 40];
  filterCount = [0, 0, 0, 0, 0, 0];
  
  addTextToTextarea(el, "# Filters");
  
  const nf = filterPost.length;
  for(let f = 0; f < nf; f++) {
    addTextToTextarea(el,
      "WALL " + filterPost[f] +
      " 17 " + filterPost[f] +
      " 10 " + filterType[f]
    );
    addTextToTextarea(el,
      "WALL " + filterPost[f] +
      " 34 " + filterPost[f] +
      " 40 " + filterType[f]
    );
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
function addWorld3(el) {
  addTextToTextarea(el, "# World dimensions");
  addTextToTextarea(el, "WORLD 80 50");
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
function addEnclosedWall3(el) {
  addTextToTextarea(el, "# Enclosed wall");
  addTextToTextarea(el, "WALL 0 0 0 49 10");
  addTextToTextarea(el, "WALL 0 49 79 49 10");
  addTextToTextarea(el, "WALL 79 49 79 0 10");
  addTextToTextarea(el, "WALL 79 0 0 0 10");
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
function addContainerWall3(el) {
  addTextToTextarea(el, "# Particles container");
  addTextToTextarea(el, "WALL 1 19 79 19 16");
  addTextToTextarea(el, "WALL 1 32 79 32 16");
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
function addMovementProbabilityMatrix3(el) {
  addTextToTextarea(el, "# Movement probability matrix");
  
  for(let f of filterType) {
    addTextToTextarea(el, "MPMAT " + f);
    addTextToTextarea(el, "0.00 0.00 0.10");
    addTextToTextarea(el, "0.00 0.00 0.80");
    addTextToTextarea(el, "0.00 0.00 0.10");
    addTextToTextarea(el, "");
  }
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
function addAgents3(el) {
  /*
  const tA = 48;
  const tB = 43;
  const tC = 41
  const tZ = [tA, tB, tC];
  */
  
  const x1 = 1;
  const y1 = 21;
  const x2 = 23; // 29
  const y2 = 30; // 30
  
  addTextToTextarea(el, "# Agents");
  for(y = y1; y <= y2; y++) {
    for(x = x1; x <= x2; x++) {
      
      f = Math.floor(Math.random() * 6);
      
      addTextToTextarea(el,
        "AGENT"
        + " " + x
        + " " + y
        + " " + filterType[f]
      );
    }
  }
}


/**
 * Runs one time step of the simulation and updates agent positions.
 *
 * This function processes all agents in the simulation by computing their movement directions based on their type's movement probability matrix (`mpm`). Agents attempt to move to adjacent cells if unoccupied. The world grid and agent list are updated, and the new state is drawn on a canvas. The simulation time `t` is also incremented.
 *
 * This function also updates the time display and canvas rendering in the DOM.
 *
 * @returns {void}
 */
function simulate2() {
  let info = "t = " + t;
  
  const divTime = document.getElementById("div-time");
  divTime.innerHTML = info;
  
  const divBar = document.getElementById("div-bar");
  
  const style9 = {
    flex: "1",
    marginBottom: "1px",
  };
  
  const nf = filterPost.length;
  for(let f = 0; f < nf; f++) {
    const id = "bar" + f;
    const div = document.getElementById(id);
    if(div == null) {
      const div = createElement("div", style9);
      div.id = id;
      div.style.background = getColor(filterType[f]);
      divBar.appendChild(div);
    } else {
      div.style.height = 0.5 * filterCount[f] + "px";
    }
  }
  
  
  const b = [];
  let dx;
  let dy;
  for(a of agents) {
    const x = a[0];
    const y = a[1];
    const t = a[2];
    const m = mpm[t];
    
    [dx, dy] = generateDirection(m);
    
    const x2 = x + dx;
    const y2 = y + dy
    
    if(world[y2][x2] == 0) {
      [world[y2][x2], world[y][x]] = [world[y][x], world[y2][x2]];
      b.push([x2, y2, t]);
      
      const nf = filterPost.length;
      for(let f = 0; f < nf; f++) {
        if(x2 == filterPost[f]) {
          filterCount[f]++;
          if(t == filterType[f]) {
            b.pop();
            world[y2][x2] = 0;
          }
        }
      }
    } else {
      b.push([x, y, t]);
    }
  }
  agents = b;
  
  const can = document.getElementById("can-out");
  drawMatrixOnCanvas(can, world, getColor)

  t += 1;
}


// marker: 25f63.js
(() => {
  console.log("[marker] 25f63.js loaded");
})();
