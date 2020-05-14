// Code your solutions in this file
function writeCards(names, occasion){
    let array = []
    for(let i=0; i<names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return array;
}

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num --;
    }
  }