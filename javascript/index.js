// alert("JAVASCRIPT loaded!");
// alert("JAVASCRIPT loaded!");


var i,j = document.querySelectorAll(".drum").length;

for(i = 0; i < j; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
  })
}
