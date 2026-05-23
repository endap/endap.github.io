/**
 * 25f53.js
 * Functions used in butiran/25f53 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-18
 *
 * Exported:
 * - simulate()
 * - generateDirection(m)
 */


let world = [];
let agents = [];
let mpm = {};
let interval = 100;
let timer;
let t;


/**
 * Runs one time step of the simulation and updates agent positions.
 *
 * This function processes all agents in the simulation by computing their movement directions based on their type's movement probability matrix (`mpm`). Agents attempt to move to adjacent cells if unoccupied. The world grid and agent list are updated, and the new state is drawn on a canvas. The simulation time `t` is also incremented.
 *
 * This function also updates the time display and canvas rendering in the DOM.
 *
 * @returns {void}
 */
function simulate() {
  const divTime = document.getElementById("div-time");
  divTime.innerHTML = "t = " + t;
  
  const b = [];
  let dx;
  let dy;
  for(a of agents) {
    const x = a[0];
    const y = a[1];
    const t = a[2];
    console.log(t);
    const m = mpm[t];
    
    [dx, dy] = generateDirection(m);
    
    const x2 = x + dx;
    const y2 = y + dy
    
    if(world[y2][x2] == 0) {
      [world[y2][x2], world[y][x]] = [world[y][x], world[y2][x2]];
      b.push([x2, y2, t]);
    } else {
      b.push([x, y, t]);
    }
  }
  agents = b;
  
  const can = document.getElementById("can-out");
  drawMatrixOnCanvas(can, world, getColor)

  t += 1;
}


/**
 * Generates a movement direction based on a probability matrix.
 *
 * This function selects a movement direction from a 3×3 probability matrix `m`
 * using a random draw. Each element of `m` represents the probability of moving 
 * in a specific direction relative to the agent's current position.
 *
 * The matrix is interpreted such that the center element corresponds to no movement,
 * and other elements correspond to adjacent moves (e.g., up-left, down, right, etc.).
 *
 * @param {number[][]} m - A 3×3 matrix of movement probabilities that sums to 1.
 * @returns {[number, number]} A direction vector [dx, dy], where dx and dy are integers in [-1, 0, 1].
 */
function generateDirection(m) {
  const x = Math.random();
  const ROWS = m.length;
  const COLS = m[0].length;
  
  let y = 0;
  for(let r = 0; r < ROWS; r++) {
    for(let c = 0; c < COLS; c++) {
      y += m[r][c];
      if(y > x) {
        let dx = c - 1;
        let dy = r - 1;
        return [dx, dy];
      }
    }
  }
}


// marker: 25f53.js
(() => {
  console.log("[marker] 25f53.js loaded");
})();
