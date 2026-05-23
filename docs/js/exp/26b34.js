// define some variables
let txa, cnt;

// get container
cnt = document.getElementById("container");
cnt.style.marginTop = "1em";

// append elements
txa = createTextarea();
cnt.append(txa);

// define functions
function createTextarea() {
  let el = document.createElement("textarea");
  el.style.width = "298px";
  el.style.height = "200px";
  el.style.overflowY = "scroll";
  el.style.fontFamily = "Courier New";
  el.style.fontSize = "12px";
  el.style.padding = "1em";
  return el;
}

// capture console
console.log = (...args) => {
  txa.value += args.join(" ") + "\n";
};

console.warn = (...args) => {
  txa.value += "Warning: " + args.join(" ") + "\n";
};

console.error = (...args) => {
  txa.value += "Error: " + args.join(" ") + "\n";
};

// capture runtime errors
window.onerror = function (msg) {
  txa.value += "Error: " + msg + "\n";
};

// execute code and catch execption
function run(code) {
  try {
    new Function(code)();   // 👈 dynamic execution
  } catch (e) {
    txa.value += "Caught: " + e.message + "\n";
  }
}
