/**  */

const fruit = [
  "orange",
  "apples",
  "peache",
  "grapes",
  "lemon",
  "mango",
  "banana",
];

const movies = [
  "Die hard",
  "Alien vs Preditor",
  "Jumanji",
  "Love and Basketball",
];
console.log(movies);
console.log(movies.length);
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);

movies[3] = "Barber Shop";
console.log(movies);

// Adding array items using a loop
const number = [5, 6, 7, 8, 9, 10];

let numOfItems = number.length;

let totalSumOfNumbers = 0;

for (let i = 0; i < number.length; i++) {
  totalSumOfNumbers += number[i];
}
console.log(totalSumOfNumbers / numOfItems);

number.push(11);
console.log(number);
number.pop();
console.log(number);

// Adding array items without using a loop

/* const number = [5,6,7,8,9,10];

let numOfItems = number.length;

let totalSumOfNumbers = number[0] + number[1] + number[2] + number[3] + number[4] + number[5] ;

console.log(totalSumOfNumbers/numOfItems); */

//Favorite recepr//

const favRecipe = {
  title: "Mac and Cheese",
  serving: 3,
  ingredients: [
    "2 Tbsp butter",
    "1 onion, finely chopped",
    "2 Tbsp Edmonds standard grade flour",
    "½ tsp dry mustard",
    "2 cups Meadow Fresh milk, heated salt and pepper",
    "2 cups Meadow Fresh grated tasty cheese",
    "2 cups macaroni elbows, cooked",
    "2 Tbsp dry breadcrumbs",
  ],
};
console.log(favRecipe);
console.log(`There are ${favRecipe.ingredients.length} ingredients`);
favRecipe.ingredients.push("water");
console.log(favRecipe);

const icecreamCosts = [2.95, 4, 5];
const expensiveIcecreamCosts = icecreamCosts.filter(function (
  cost,
  index,
  array
) {
  console.log(index);
  console.log(array);
  return cost > 3;
});
console.log(expensiveIcecreamCosts);

// ------------ EXERCISE ------------
// Convert the case of the first letter of every word to uppercase
// good morning to you => Good Morning To You
// VERSION 1
const convertWordCaseV1 = function (sentence) {
  const capitalise = function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }; // this nested function turns 'good' => 'Good'
  const lowercaseString = sentence.toLowerCase(); // String Method: make whole string lowercase
  const splitString = lowercaseString.split(" "); // String Method: split string on each " "
  const capitalisedString = splitString.map((word) => `${capitalise(word)}`); // Array Method: call the capitalise function for each word in our array
  const finalString = capitalisedString.join(" "); // Array Method: concatenates each element of the array by a " "

  return finalString;
};
console.log(convertWordCaseV1("good MORNING to yoU"));

// VERSION 2
const convertWordCaseV2 = function (sentence) {
  const capitalise = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  // Chaining multiple methods together
  const finalString = sentence
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return `${capitalise(word)}`;
    })
    .join(" ");
  return finalString;
};
console.log(convertWordCaseV2("good MORNING to yoU"));

// VERSION 3
const convertWordCaseV3 = function (sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
console.log(convertWordCaseV3("good MORNING to yoU"));
