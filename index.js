// Code your solutions in this file
const nameList = [ 'Lisa', 'Kaitlin', 'Jan' ];
const event = "surprise";


function writeCards(nameList,event) {

     const newAr =  nameList.map( function(name){
        return (`Thank you, ${name}, for the wonderful ${event} gift!`)
    })
    return newAr
    }

let i = 0;

function countDown(i) {
    for (i = 10; i >= 0; i--) {
        console.log(i);
    }
}




