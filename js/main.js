var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo)


console.log("User flipped queen");
console.log("User flipped king")

for (var i = 0 ; i <cardsInPlay.length; i++){
if(cardsInPlay[0] === cardsInPlay){
alert("you found a match!");
}else{
alert("Sorry, try again");
}
}