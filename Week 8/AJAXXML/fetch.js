"use strict";
//Asyncronous code doesn't affect the top syncronization of code execution
// Three stages to a fetch request 1) The request 2) The response(explicily say I want the request in json)

// *****With Arrow Function******
// fetch("example.json")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// With traditional function

function fetchData() {
  fetch("example.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return console.log(json);
    });
}

function fetchDataAndDisplay() {
  fetch("example.json") // send a request to fetch the JSON object
    .then((res) => res.json()) //Tell the response to the fetch as a JSON object
    .then((json) => {
      //convet the JSON object into an array

      const fetchedDataDivElement = document.getElementById("fetchedData"); // selelct the div elelemnt to di
      fetchedDataDivElement.innerHTML = ""; //clear the original  data in the div

      // loop through the array and display only the name key of each object in the array
      json.forEach((person) => {
        fetchedDataDivElement.innerHTML += `<li> ${person.name}</li>`;
      });
    });
}

function fetchExternalAPIData() {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      fetchedDataDivElement.innerHTML = "";

      jsonData.data.forEach((person) => {
        fetchedDataDivElement.innerHTML += `<img src ="${person.avatar}"/> 
        <div> ${person.first_name}${person.last_name}</div> `;
      });
    });
}

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonPokemon) {
      console.log(jsonPokemon);
      const fetchedDataDivElement = document.getElementById("fetchPokemon");
      fetchedDataDivElement.innerHTML = "";

      jsonPokemon.results.forEach((pokemon) => {
        fetchedDataDivElement.innerHTML += `<img src =${pokemon.url}/> 
        <div> ${pokemon.name} `;
      });
    });
}
