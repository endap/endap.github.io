/**
 * 25k11.js
 * Functions and constants used in butiran/25k11 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-11-05
 *
 * Exported:
 * - trax(x)
 * - tray(y)
 * - drawHorizLines(can, Ny);
 * - drawVertLines(can, Nx);
 */
 
let width = 300;
let height = 200;

let xmin = 50;
let ymin = 10;
let xmax = 650;
let ymax = 410;

let XMIN = 0;
let YMIN = height;
let XMAX = width;
let YMAX = 0;

function setWorldCoords(xmin, ymin, xmax, ymax) {
  xmin = xmin;
  ymin = ymin;
  xmax = xmax;
  ymax = ymax;
}

function setCanvasSize(width, height, can) {
  width = width;
  height = height;
  XMIN = 0;
  YMIN = height;
  XMAX = width;
  YMAX = 0;
  can.width = width;
  can.height = height;
  can.style.width = width + "px";
  can.style.height = height + "px";
}

function trax(x) {
  let X = (x - xmin) / (xmax - xmin);
  X *= (XMAX - XMIN);
  X += XMIN;
  return X;
}

function tray(y) {
  let Y = (y - ymin) / (ymax - ymin);
  Y *= (YMAX - YMIN);
  Y += YMIN;
  return Y;
}

function drawVertLines(can, Nx) {
  const ctx = can.getContext("2d");
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 0.5;
  ctx.lineCap = "round";
  
  const dx = (xmax - xmin) / Nx;

  ctx.beginPath();
  for(let ix = 0; ix <= Nx; ix++) {
    let x = xmin + ix * dx;
    let X = trax(x);
    ctx.moveTo(X, YMIN);
    ctx.lineTo(X, YMAX);
  }
  ctx.stroke();
}

function drawHorizLines(can, Ny) {
  const ctx = can.getContext("2d");
  ctx.strokeStyle = "#999";
  ctx.lineWidth = 0.5;
  ctx.lineCap = "round"; 

  const dy = (ymax - ymin) / Ny;

  ctx.beginPath();
  for(let iy = 0; iy <= Ny; iy++) {
    let y = ymin + iy * dy;
    let Y = tray(y);
    ctx.moveTo(XMIN, Y);
    ctx.lineTo(XMAX, Y);
  }
  ctx.stroke();
}
