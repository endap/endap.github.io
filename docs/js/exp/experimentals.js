/*
  Display text on element with id by modifyin element innerHTML.
  
  Usage: display("some texts").on("element-id");
  
  20250129 Finish and test this function.
*/
function display(text) {
  let el = {
    on: function(id) {
      let div = document.getElementById(id);
      div.innerHTML = text;
    }
  }
  return el;
}
