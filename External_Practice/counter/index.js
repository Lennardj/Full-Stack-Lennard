// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.innerText= count;
    // set countEl's innerText to the count
}

function save(){
    let countStr = count + " - ";
    document.getElementById("save-el").textContent += countStr
    // document.getElementById("save-el").innerText += countStr
    console.log(count)
    count = 0;
    countEl.innerText= count;
}

// function reset(){
//     count = 0;
//     countEl.innerText= count;
// }