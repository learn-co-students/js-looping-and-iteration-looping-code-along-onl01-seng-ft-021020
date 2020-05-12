// Code your solutions in this file
const cards = ["teddy bear", "drone", "doll"];
 
function writeCards(cards) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < cards.length) {
    cards[i] = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
    i++; // the iteration moves INSIDE the body of the loop!
  }
 
  return cards;
}
 
writeCards(cards);


 
function countDown(number) {
    let countup = number;
    while (countup >= 0) {
        console.log(countup--);
    }
}