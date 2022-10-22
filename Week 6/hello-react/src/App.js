import Footer from "./Footer";
import Header from "./Header";
import Person from "./Person";
import Car from "./Car";
import { useState } from "react";
const message1 = "Hey, you";
const message2 = "What's going on";
const message3 = "2010 X3";

const numbers = [1, 4, 9];
const roots = numbers.map(function (number) {
  return number + 1;
});
console.log(roots);

const fruits = [
  { name: "Apple", units: 3, price: 0.25 },
  { name: "Mango", units: 6, price: 0.35 },
  { name: "Banana", units: 4, price: 0.15 },
];

const renderFruits = fruits.map(function (fruit, index) {
  return `${
    index + 1
  }) ${fruit.units} units of ${fruit.name} costs $${(fruit.price * fruit.units).toFixed(2)}`;
});
console.log(renderFruits);
const users = [
  { id: 1, name: "Sally Rogers" },
  { id: 2, name: "Buddy Sorrell" },
  { id: 3, name: "Jane Doe" },
];
const myObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};

const { name, email } = myObj;
console.log(name, email);
// const fruits = ["apple", "mango", "orange"];
// fruits.map(function (fruit, index) {
//   console.log(`${index}.${fruit}`);
// });

// The above code as an arrow function
// const fruits = ["apple", "mango", "orange"];
// fruits.map((fruit, index) =>{
//   console.log(`${index}.${fruit}`);
// });

//Destructioning
const [first, second, third] = ["Laide", "Gabriel", "Jets"];
console.log(first);

function App() {
  return (
    <div>
      <Header></Header>
      <h1>{message1}</h1>
      <p>{message2 + "??"}</p>
      {roots}
      <Car carName="Toyota" carBrand={message3}></Car>
      <Person name="Lennard" age="32"></Person>
      <Footer></Footer>

      {fruits.map(function (fruit, index) {
        return (
          <div>
            {index + 1} {fruit.units} units of {fruit.name} costs $
            {(fruit.price * fruit.units).toFixed(2)}
          </div>
        );
      })}

      {users.map(function (user, index) {
        return <div>{user.name}</div>;
      })}
      </div>





}
export default App;
