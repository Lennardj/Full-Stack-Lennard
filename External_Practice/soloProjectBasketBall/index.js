let home = 0;
let guess = 0;
//let homeScore = document.getElementById('homeScore-el')
//let guessScore = document.getElementById('guessScore-el')

function plusH1(){
    home += 1
    document.getElementById("homeScore-el").innerText = home
}
function plusH2(){
    home += 2
    document.getElementById("homeScore-el").innerText = home
}
function plusH3(){
    home += 3
    document.getElementById("homeScore-el").innerText = home
}
function plusG1(){
    guess += 1
    document.getElementById("guessScore-el").innerText = guess
}
function plusG2(){
    guess += 2
    document.getElementById("guessScore-el").innerText = guess
}
function plusG3(){
    guess += 3
    document.getElementById("guessScore-el").innerText = guess
}