document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
});

/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
