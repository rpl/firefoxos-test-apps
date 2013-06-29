window.onload = function () {
  var output = document.querySelector("pre");

  ["locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar"].forEach(function (barname) {
    output.textContent += "window."+barname+": "+window[barname].visible+"\n";
  });
};
