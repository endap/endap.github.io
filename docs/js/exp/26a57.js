console.log("26a57 loaded");

function createArrowKeysKeypad() {
  // create button element
  let uBtn = createButtonWithCaption("&uparrow;")
  let dBtn = createButtonWithCaption("&downarrow;")
  let lBtn = createButtonWithCaption("&leftarrow;")
  let rBtn = createButtonWithCaption("&rightarrow;")
  let btns = [uBtn, rBtn, dBtn, lBtn];
  
  // create grid element
  let grid = createGrid(3, 3, "30px");
  
  // add buttons to grid with certain index
  let idxs = [1, 5, 7, 3];
  toGridAddButtons(grid, btns, idxs);
  
  // create btns in grid
  grid.btns = btns;
  
  return grid;
}

function createTextarea() {
  let txa = document.createElement("textarea");
  txa.style.width = "150px";
  txa.style.height = "92px";
  txa.style.overflowY = "scroll";
  
  return txa;
}

function printLine(txa, str) {
  let vals = txa.value;
  
  if(vals.length == 0) {
    vals = str;
  } else {
    vals += "\n" + str;
  }
  
  txa.value = vals;
  txa.scrollTop = txa.scrollHeight;
}
