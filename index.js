// Code your solutions in this file
function writeCards(namesArray, event) {
    let messageArray = []
    for ( let i = 0; i < namesArray.length; i++) {
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }

    return messageArray;
}


function countDown(num) {
    while (num > -1) {
        console.log(num--);
    }
}