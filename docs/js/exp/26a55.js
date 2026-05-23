console.log("26a55 loaded");

function createGrid(m, n, s) {
  const rowsRep = "(" + m + ", " + s + ")";
  const colsRep = "(" + n + ", " + s + ")";
  
  const pDiv = document.createElement("div");
  pDiv.style.display = "grid";
  pDiv.style.gridTemplateColumns = "repeat" + colsRep;
  pDiv.style.gridTemplateRows = "repeat" + rowsRep;
  pDiv.style.gap = "4px";
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      const cDiv = document.createElement("div");
      cDiv.style.width = s;
      cDiv.style.height = s;
      cDiv.style.background = "var(--bg)";
      cDiv.style.border = "1px solid var(--muted-border)";
      cDiv.style.borderRadius = "4px";
      pDiv.append(cDiv);
    }  
  }
  
  return pDiv;
}