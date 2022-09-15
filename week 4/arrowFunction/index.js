// Arrow Function
//define a variable and assign it the value of a arrow function

const scanner = () => {
    const paper = 'hey'
    console.log(paper)
};
scanner()

// NOTE CANNOT BE USED AS A METHOD INSIDE OF A OBJECT

// function doubleNum (num){
//     return num* 2
// }

// converted to arrow

let doubleNum = (num) => {
    return num * 2
}
console.log(doubleNum(4))

// () around the parameter is option if there are only one

let doubleNum1 = num => {
    return num * 2
}
console.log(doubleNum1(4))

// curly bracet and return is optional with a one line function made

let doubleNum2 = num => num * 2

console.log(doubleNum2(4))

// Exercise 1 takes in two parameter ad divides the first with the second
let divide = (numOne, numTwo = 1) => {
    return numOne / numTwo
} // we can remove the return and the curly braces



console.log(divide(3,4))

//Exercise 2 check if a number is even or odd
let isEven = (num) => {
    return (num % 2) == 0 // can remove the bracets 
}
console.log(isEven(3))

// SPREAD OPERATOR ...

array1 = [1,2,3,4,5]
array2 = [...array1,6,7,8,9,10]
console.log(array2)

