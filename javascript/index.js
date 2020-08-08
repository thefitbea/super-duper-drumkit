var numberRandom1 = Math.floor((Math.random() * 6) + 1);
var diceImageRandom1 = "images/dice" + numberRandom1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImageRandom1);

// IMAGE 2 AREA

var numberRandom2 = Math.floor((Math.random() * 6) + 1);
var diceImageRandom2 = "images/dice" + numberRandom2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageRandom2);

// ALTERNATE LOGIC

// if(numberRandom1 === 1){
//   image1.setAttribute("src","images/dice1.png");
// }
// else if (numberRandom1 === 2) {
//   image1.setAttribute("src","images/dice2.png");
// }
// else if (numberRandom1 === 3) {
//   image1.setAttribute("src","images/dice3.png");
// }
// else if (numberRandom1 === 4) {
//   image1.setAttribute("src","images/dice4.png");
// }
// else if (numberRandom1 === 5) {
//   image1.setAttribute("src","images/dice5.png");
// }
// else {
//   image1.setAttribute("src","images/dice6.png");
// }

// WINNERS SECTION
var displayMessage = document.querySelectorAll("h1")[0];
if (numberRandom1 === numberRandom2) {
  displayMessage.innerHTML = "Draw!";
} else if (numberRandom1 > numberRandom2) {
  displayMessage.innerHTML = "Player 1 Wins!";
} else {
  displayMessage.innerHTML = "Player 2 Wins!";
}
