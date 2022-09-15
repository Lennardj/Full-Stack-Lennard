const person = {
    firstName: 'Lennard',
    lastName: 'John',
    age: 32,
    Candrive: true,
    favoriteColour: 'Black',
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

console.log(`This is`+ " "+ person.firstName + " " + person.lastName + `. Their favorite color is` + " " + person.favoriteColour) //Dot notation
console.log(`This is ${person.firstName} ${person.lastName} and their favorite color is ${person.favoriteColour}`); //Dynamic selector
console.log(`This is ${person['firstName']} ${person['lastName']} and their favorite color is ${person['favoriteColour']}`); //bracet Notation

const age = person.age;
console.log(age)

// if (age == 32){
//     alert('You are old')
// }

const rectangle = {
length: 50,
width: 10,

};
console.log(rectangle["length"] * rectangle['width'])

rectangle.length = 30;
rectangle.height = 20; //updating values to an object preoperty

console.log(rectangle["length"] * rectangle['width'] * rectangle['height']);//assigning new property to an existing object

console.log(rectangle)
delete rectangle.height //deleting properties
console.log(rectangle)

const newPerson = {
    herFName: "tracy",
    herLName: 'diaz',
    herFNumber: 23,
    herFColour: 'Red',
}
console.log(newPerson);

newPerson.herFFood = 'Chocalate';

console.log(newPerson);

delete newPerson.herFFood;
herFNumber = 55;
console.log(newPerson);