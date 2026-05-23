/**
 * 26d37.js
 * Functions used in butiran-x/25d37 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created:  2026-04-13
 * Modified: 2026-04-14
 */

let styles = {};
let bStates = {};
let bTexts = {};


function getContainer(id, styles) {
  const el = document.getElementById(id);
  
  if(!(el instanceof HTMLDivElement)) {
    console.error("Container must be a DIV element");
    return null;
  }
  
  Object.assign(el.style, styles);
  
  return el;
}


function createToggleButton(id, texts, style = {}, handler = run) {
  const el = document.createElement("button");

  Object.assign(el.style, styles);
  
  el.id = id;
  el.innerHTML = texts[0];
  el.addEventListener("click", handler);
  
  bStates[id] = false;
  bTexts[id] = texts;
    
  return el;
}


function toggleButtonState(id) {
  let el = document.getElementById(id);
  let state = bStates[id];
  state = !state;
  if(state) {
    el.innerHTML = bTexts[id][1];
  } else {
    el.innerHTML = bTexts[id][0];
  }
  bStates[id] = state;
}


function run(e) {
  if(e.target.id == "btn-1") toggleButtonState(e.target.id);
  if(e.target.id == "btn-2") toggleButtonState(e.target.id);
}


function app(id) {
  styles = {
    marginTop: "0.5em",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    background: "var(--box-bg)",
    border: "1px solid var(--border)",
    display: "inline-block",
    marginRight: "0.3em",
  };
  const cnt = getContainer(id, styles);
  if(cnt == null) return null;
  
  styles = {
    width: "55px",
    margin: "0 0.1em",
    display: "inline",
  };
  let btn1 = createToggleButton("btn-1", ["start-1", "stop-1"], styles);
  let btn2 = createToggleButton("btn-2", ["start-2", "stop-2"], styles);
  
  cnt.append(btn1);
  cnt.append(btn2);
}
