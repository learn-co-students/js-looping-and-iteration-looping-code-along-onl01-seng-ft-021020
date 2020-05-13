// Code your solutions in this file

function writeCards(name, event) {
    const messageArray = []
    for (let i = 0; i < name.length; i++) {
    messageArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messageArray
}

function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer)
}