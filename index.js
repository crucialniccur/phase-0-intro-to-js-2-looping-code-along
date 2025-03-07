// Code your solutions in this file
let names = [];

// function writeCards(input) {
//   //   let namesCopy = { ...names, input };
//   //   return `Thank you, ${name}, for the wonderful surprise gift!`;
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
//   }
// }

// writeCards("mati");

// function writeCards(theNames) {
//   //   let theNames = [];

//   for (let i = 0; i < theNames.length; i++) {
//     console.log(`Thank you, {theNames[i]}, for the wonderful surprise`);
//   }
// }

function writeCards(names, eventName) {
  let message = []; // an empty array
  for (let i = 0; i < names.length; i++) {
    // .push array method add elements destructively to the end of an array
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return message;
}

//the countdown function
