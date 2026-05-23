console.log("26a58 loaded");

function createArrowKeysKeypad2() {
  // create button element
  let noBtn = createButtonWithCaption("&uparrow;")
  let neBtn = createButtonWithCaption("&nearr;")
  let eaBtn = createButtonWithCaption("&rightarrow;")
  let seBtn = createButtonWithCaption("&searr;")
  let soBtn = createButtonWithCaption("&downarrow;")
  let swBtn = createButtonWithCaption("&swarr;")
  let weBtn = createButtonWithCaption("&leftarrow;")
  let nwBtn = createButtonWithCaption("&nwarr;")
  let btns = [
    noBtn, neBtn, eaBtn, seBtn,
    soBtn, swBtn, weBtn, nwBtn
  ];
  
  // create grid element
  let grid = createGrid(3, 3, "30px");
  
  // add buttons to grid with certain index
  let idxs = [1, 2, 5, 8, 7, 6, 3, 0];
  toGridAddButtons(grid, btns, idxs);
  
  // create btns in grid
  grid.btns = btns;
  
  return grid;
}

function createCanvas() {
  let can = document.createElement("canvas");
  can.width = "263";
  can.height = "263";
  can.style.width = can.width;
  can.style.height = can.height;
  
  return can;
}

function printData(txa, str, delim) {
  let vals = txa.value;
  
  if(vals.length == 0) {
    vals = str;
  } else {
    vals += delim + " " + str;
  }
  
  txa.value = vals;
  txa.scrollTop = txa.scrollHeight;
}

const dl = 5;
let xx, yy;

function initPos(can) {
  xx = can.width / 2;
  yy = can.height / 2;
}

function updatePos(i, txa, can) {
  dirs = [
    "no", "ne", "ea", "se",
    "so", "sw", "we", "nw"
  ];
  printData(txa, dirs[i], ";");
  
  let dx = [+0, +1, +1, +1, +0, -1, -1, -1];
  let dy = [-1, -1, +0, +1, +1, +1, +0, -1];
  
  let xx1 = xx;
  let yy1 = yy;
  xx += dl * dx[i];
  yy += dl * dy[i];
  let xx2 = xx;
  let yy2 = yy;
    
  drawLine(can, xx1, yy1, xx2, yy2);
}

function drawLine(can, x1, y1, x2, y2) {
  let ctx = can.getContext("2d");
  ctx.strokeStyle = "#f00";
  ctx.lineWidth = "8";
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
