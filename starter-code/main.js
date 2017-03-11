console.log("JS file is connected to HTML! Woo!")
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createCards = function() {

	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		gameboard.appendChild(cardElement);
	}
}


var isTwoCards = function (){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
if(this.getAttribute('data-card') === "king") {
	this.innerHTML = '<img src="king card.jpg">';
}
	else {
	this.innerHTML = '<img src="queen card.jpg">';
}


	if(cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	cardsInPlay = [];
	}
}
var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}
}


/*
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}
*/




createCards();