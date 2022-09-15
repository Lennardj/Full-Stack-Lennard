// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(""));


// console.log(!false); //true
// console.log(true && false); //false
// console.log(true || false); //true
// console.log(123 === "456"); //false
// console.log(1.23===123e-2); //true

console.log(Boolean(10+10 && 10-3)); //true
console.log(Boolean(0 || 10-3)); //true

let x = 4,
    y = 2,
    z =0;
if (x == 4 && (!(y ==1) || z == 0)){
    console.log(true); //true
} else {
    console.log(false); //true
}

// const person = {
// firstName: 'John',
// lastName: 'Doe'
// };

const dog = {
    dogName: 'Fido',
    dogWeight: 40,
    dogBreed: 'Mixed',
    dogEnjoy: ['walking', 'fetching balls']
};

const lennardJohn = {
    firstName: 'Lennard',
    lastName: 'John',
    age: 32,
    favoriteColour: 'Black'
};

console.log(`"THis is`
 + " " 
 + lennardJohn.firstName 
 + " " 
 + lennardJohn.lastName 
 + " " 
 +`, and thier favorite colour is` 
 + lennardJohn.favoriteColour +`."`);