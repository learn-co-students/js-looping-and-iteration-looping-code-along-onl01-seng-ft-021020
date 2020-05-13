// Code your solutions in this file



function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
}

function countDown(number) {
    let i = number; // the initialization moved OUTSIDE the body of the loop!
    while (i > 0) {
      console.log(number);
      number--; // the iteration moves INSIDE the body of the loop!
    }
  }