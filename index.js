function writeCards(array, surprise) {
  let thankYouCards = []
  for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
  }
  return thankYouCards;
}

function countDown( startingNumber ) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
  console.log(startingNumber);
}