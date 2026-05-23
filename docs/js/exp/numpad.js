/*
  numpad.js
  Create numpad with button and a text area

  Sparisoma Viridi | https://github.com/dudung

  20230909 Start this simple app as part of Hugo site.
*/

function numpad() {
  var side = 240;
  var margin = 10;
  var outh = 43;

  var app = document.getElementById("numpad");
  app.style.border="1px solid";
  app.style.width = side + "px";
  app.style.height = side + "px";
  
  var out = document.createElement("textarea");
  out.style.height = outh + "px";
  out.style.resize = "none";
  out.style.margin = margin + "px";
  out.style.setProperty("width", "calc(100% - " + (margin*2) + "px)");
  out.style.padding = "6px 8px";
  out.disabled = true;
  out.style.fontFamily = "Lucida Console";
  out.style.fontSize = "28px";
  out.style.overflowY = "hidden";
  
  var pad = document.createElement("div")
  pad.style.marginLeft = margin + "px";
  pad.style.setProperty("width", "calc(100% - " + (margin*2) + "px)");
  padh = side - (margin*4) - outh;
  pad.style.height = padh + "px";
  pad.style.textAlign = "center";
  
  app.append(out);
  app.append(pad);
  
  var btnw = 68;
  var btnh = 36;
  for(var i = 0; i < 10; i++) {
    var btn = document.createElement("button");
    num = (i > 8) ? i - 9 : i + 1;
    btn.innerHTML = num;
    btn.style.border = "0px"
    btn.style.margin = "2px"
    btn.style.width = btnw  + "px";
    btn.style.height = btnh  + "px";
    btn.style.borderRadius = "10px";
    
    btn.addEventListener("click",
      function() { out.value += event.target.innerHTML });
    
    pad.append(btn);
  }
}

