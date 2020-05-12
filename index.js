// Code your solutions in this file
 const cards = ["Ada", "Brendan", "Ali"];
 
function writeCards(cards, surprise) {
  let thankYous = []
    for (let i = 0; i < cards.length; i++) {
    thankYous.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
  }
  return thankYous;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count--)
    } 
}