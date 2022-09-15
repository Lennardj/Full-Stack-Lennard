let player ={
    "Name": "Lennard",
    "Chips": 200
}
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = true 
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.Name + ": $" + player.Chips
 
function getRandomCard(){

    let randomNumber = Math.floor( Math.random() * 13) +1

    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }


    
}


function startGame(){
    let isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Card: "

    for (let index = 0; index < cards.length; index++) {
        
        cardEl.textContent += cards[index] + " "
    }
   
    //cardEl.innerText = "Card: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <=20) {
        message= "Do you want to draw a new card? 🙂"
       } else if(sum === 21){
           message ="Wohoo! You've got Blackjack! 🥳"
           hasBlackJack =true 
       } else{
           message= "You're out of the game! 😭"
           isAlive = false
       }
    messageEl.innerText = message
}



function newCard(){

    if (isAlive === true && hasBlackJack === false) {
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   


}




//CASH OUT !

