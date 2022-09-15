// const hOneEl = document.getElementById('eventListen');

// hOneEl.addEventListener("click", function (){ 
//     hOneEl.style.background = 'blue'})

// let btnEl =document.getElementById('mouseOver');
//     btnEl.addEventListener("click", function(){btnEl.style.backgroundColor = 'red'});

// let hellowWorld = document.getElementById("helloworld")

//     hellowWorld.addEventListener('mouseover', testEvent);

//   function testEvent(event) {
    
//     event.target.style.background = 'red'

//   }


  //Oninput test inline test

//   function logValue(event) {
//     let numOfChar = event.target.value.length
//     let charCount = document.getElementById('characterCount')
//     console.log(numOfChar.length)
//     charCount.textContent = numOfChar
//   }


  // On input event listener test
//   const inputElement = document.querySelector('input')
//   inputElement.addEventListener('input', logValue)

  
  
  //First select all element

let inputOne = document.getElementById('input-One') 
let inputTwo = document.getElementById('input-Two')
let results = document.getElementById('results')
let resetBtn = document.getElementById('btn-Reset')

resetBtn.addEventListener('click', sum)

function sum(value){

  //let re = parseInt(inputOne.value + inputTwo.value) 
    results.textContent = `${inputOne.value} + ${inputTwo.value} =${Number(inputOne.value) + parseInt(inputTwo.value)} `
    
}