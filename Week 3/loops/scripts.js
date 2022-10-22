// for (let index = 10; index >0; index--) {
//     console.log('Lennard',index);

// }

const newWord = "Responsiveness";
let count = 0;

// for ( let index = 0; index<= 10; index++) {
//     console.log(newWord[index]);
// }

// for ( let index = 0; index<= 10; index++) {
//     console.log(newWord[index]);
// }
for (let index = 0; index <= newWord.length; index++) {
  console.log(newWord[index]);
}

myFavNumbers = { one: 1, two: 2, three: 3 };
let sum = 0;
for (const key in myFavNumbers) {
  sum += myFavNumbers[key];
}
console.log(sum);

const user = { name: "John", age: 5, isAdmin: true };
for (const key in user) {
  if (key === "age") {
    console.log(user.key);
  }
}
