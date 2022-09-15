/**  */


const fruit =['orange', 'apples', 'peache', 'grapes', 'lemon', 'mango', 'banana']

const movies = ['Die hard', 'Alien vs Preditor', 'Jumanji', 'Love and Basketball']
console.log(movies);
console.log(movies.length);
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);

movies[3]="Barber Shop";
console.log(movies);



// Adding array items using a loop
const number = [5,6,7,8,9,10];

let numOfItems = number.length;

let totalSumOfNumbers = 0;

for (let i = 0; i < number.length; i++) {
    totalSumOfNumbers += number[i];
}
console.log(totalSumOfNumbers/numOfItems);

number.push(11)
console.log(number)
number.pop()
console.log(number)

// Adding array items without using a loop

/* const number = [5,6,7,8,9,10];

let numOfItems = number.length;

let totalSumOfNumbers = number[0] + number[1] + number[2] + number[3] + number[4] + number[5] ;

console.log(totalSumOfNumbers/numOfItems); */

//Favorite recepr//

const favRecipe ={
    title: 'Mac and Cheese',
    serving: 3,
    ingredients: [
        '2 Tbsp butter',
        '1 onion, finely chopped',
        '2 Tbsp Edmonds standard grade flour',
        '½ tsp dry mustard',
        '2 cups Meadow Fresh milk, heated salt and pepper',
        '2 cups Meadow Fresh grated tasty cheese',
        '2 cups macaroni elbows, cooked',
        '2 Tbsp dry breadcrumbs',
    ]
}
console.log(favRecipe);
console.log(`There are ${favRecipe.ingredients.length} ingredients`);
favRecipe.ingredients.push('water')
console.log(favRecipe);