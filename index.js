// Code your solutions in this file`
const letterTo = ['Charlie', 'Samip', 'Ali']


function writeCards(gifter) {
    const messages = [];

    for (let i = 0; i < gifter.length; i++){
        messages.push(`Thank you, ${gifter[i]}, for the wonderful surprise gift!`); 
    } 
return(messages);
}

function countDown(countingInt) {
    var i = countingInt 
    while (i > -1 ) {    
            console.log(i);
            i --;        
      } 
    }