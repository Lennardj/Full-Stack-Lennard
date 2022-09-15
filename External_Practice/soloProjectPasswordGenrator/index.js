const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let capitalLetter = []
// let commomLetter = []
// let number = []
// let symbol = []

// for (let i=0; i<characters.length; i++){
//     if (characters[i]== characters[i].toUpperCase ){
//         capitalLetter = characters[i]
//     } else if (characters[i]== characters[i].toUpperCase)
// }


// get a hold of the two <p> tags to display the password

let passOne = document.getElementById('pass-one');
let passTwo = document.getElementById('pass-two');
let randpass1 = []
let randpass2 = []
let passFromArray1 =[]
let passFromArray2 =[]


// Generate 1 random number from the character  array use for loop to create random password for 15 character store in an array
function generatePassword(){

    for (let i =0; i<15; i++){

    randpass1[i] = Math.floor(Math.random() * characters.length)
    randpass2[i] = Math.floor(Math.random() * characters.length)

    }
    getPasswordFromArray()
   

}

function getPasswordFromArray(){

    for (let i = 0; i < randpass1.length; i++) {
        passFromArray1 += characters[randpass1[i]]
        passFromArray2 += characters[randpass2[i]]

        // change to .push 
        
    }
    document.getElementById("pass-one").innerText = passFromArray1
    document.getElementById("pass-two").innerText = passFromArray2
}
