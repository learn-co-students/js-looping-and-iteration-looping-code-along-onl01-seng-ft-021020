const cards = [];

function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return cards;
}

function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown);
    countDown--;
  }
}