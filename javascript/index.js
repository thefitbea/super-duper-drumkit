// alert("JAVASCRIPT loaded!");

// DECLARATION OF VARIABLES

var i, j = document.querySelectorAll(".drum").length;
var buttonInnerHtml;

// DETECTING VIA BUTTONS ON BROWSER WINDOW

for (i = 0; i < j; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonInnerHtml = this.innerHTML;
    sound(buttonInnerHtml);//to play sounds
    buttonAnimation(buttonInnerHtml);//to play animation
  })
}

// DETECTING VIA KEYBOARD PRESS

document.addEventListener("keypress", function (event){
  sound(event.key);//to play sounds
  buttonAnimation(event.key);//to play animation
});


// CORE OF SOUNDS

function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();

      break;
    default: console.log(buttonInnerHtml);

  }
}

// BUTTON ANIMATION

function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");//to remove button pressed effect
  }, 100)
}
