/**
 * 26c16.js
 * Helper functions for butiran-x/26c16 note.
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2026-03-03
 *
 * Exports:
 * - onCanvasDrawDataset(id, dataset)
 */


/**
 * Draws a dataset on a canvas element.
 *
 * @param {string} id - The ID of the canvas element to draw on.
 * @param {number[]} datax - The dataset for the x-axis.
 * @param {number[]} datay - The dataset for the y-axis.
 * @param {string} [color="blue"] - The color used for drawing.
 * @param {boolean} [marker=true] - Whether to draw markers at data points.
 * @param {boolean} [line=false] - Whether to draw lines connecting data points.
 * @returns {void}
 *
 * @example
 * drawOnCanvas("graphic-output", xx, yy, "blue", true, false);
 */
function onCanvasDrawDataset(id, datax, datay, color="blue", marker=true, line=false) {
  /** @type {HTMLCanvasElement|null} */
  const el = document.getElementById(id);
  
  if (!(el instanceof HTMLCanvasElement)) return null;
  
  const ctx = el.getContext("2d");
  const n = Math.min(datax.length, datay.length);
  if(marker) {
    for(let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(datax[i], datay[i], 6, 0, 2*Math.PI);
      ctx.fill();   
    }
  }
  if(line) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    for(let i = 0; i < n; i++) {
      if(i == 0) {
        ctx.moveTo(datax[i], datay[i]);
        console.log("moveTo");
      } else {
        ctx.lineTo(datax[i], datay[i]);        
        console.log("lineTo");
      }
    }
    ctx.stroke();   
  }
}


// marker: 26c16.js
(() => {
  console.log("[marker] 26c16.js loaded");
})();
