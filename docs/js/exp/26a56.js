console.log("26a56 loaded");

function createButtonWithCaption(caption) {
  let btn = document.createElement("button");
  btn.innerHTML = caption;
  return btn;
}

function toGridAddButtons(grid, btns, idxs) {
  let cDivs = grid.children;
  let n1 = btns.length;
  let n2 = idxs.length;
  let n = (n1 < n2) ? n1 : n2;
  
  for (let i = 0; i < n; i++) {
    let idx = idxs[i];
    let btn = btns[i];
    let cDiv = cDivs[idx];
    cDiv.style.padding = "0";
    cDiv.style.display = "flex";
    cDiv.append(btn);
    btn.style.flexGrow = "1";
  }
  
  for(let cDiv of cDivs) {
    cDiv.style.border = "0";
  }
}