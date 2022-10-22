// console.log("hello world");

// function Greeting(greet) {
//   return greet + " Welcome to node";
// }

// console.log(Greeting("Lennard john"));

function Str(string) {
  strArray = string.split("");
  const answer = strArray.some(function (letter, index) {
    return letter === strArray[index + 1];

    //   words2 = [...words];
    //   console.log(words);
    //     for (i=0 ; i<words.length ; i++) {
    //       if (words[i]=== words[i+1]) {
    //           return true
    //       } else {
    //           return false
    //       }
  });
}

console.log(Str("book"));
//Exercise 2
function wordToCheck(word) {
  // take word param and split it into an array of letters
  const splitStr = word.split("");
  console.log(splitStr);
  // loop over each letter and compare it with the next letter to see if same
  const result = splitStr.some(function (letter, index) {
    return letter === splitStr[index + 1];
  });
  return result;
}
console.log(wordToCheck("book"));
