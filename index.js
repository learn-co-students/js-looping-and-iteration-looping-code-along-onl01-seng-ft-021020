// Code your solutions in this file
function writeCards(namesArray, eventName) {
    let cards = [];
    for (let i=0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cards;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}