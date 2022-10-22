"use strict";

// Normal feth method
// fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//   res.json().then((data) => {
//     console.log(data);
//   })
// );

// Refactor using async
async function asyncMockData() {
  const fetchMockData = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const fetchMockDataJson = await fetchMockData.json();
  console.log(fetchMockDataJson);
}
asyncMockData();

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((pokemon, index) => {
    console.log(pokemon);
  });

// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//   .then((res) => res.json())
//   .then((bulbasaur) => {
//     console.log(bulbasaur);
//   });

async function asyncFetch() {
  const fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon");
  const fetchJson = await fetchResult.json();
  console.log(fetchJson);
  //   const pokemon = document.getElementById("pokemon");
  //   pokemon.innerHTML =
  //     "<img src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fetchJson.results[0]}.png`>";
}
asyncFetch();
document.getElementById("btn").addEventListener("click", asyncFetch);

// try catch

async function callFakeFetch() {
  try {
    const myFetch = await fakefetch("http://url.com");
  } catch (err) {
    console.log(err);
  }
}
callFakeFetch();
