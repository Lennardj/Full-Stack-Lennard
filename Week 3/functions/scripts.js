// console.log('John')

// function double(num) {
//     return num * 2;
    
// }

// console.log(double(3));


// function twoStr( a,b) {
//     console.log(a,b);
// }

// twoStr('hi','bye')

// function conTwoStr( fStr,sStr) {
//     console.log(fStr + sStr);
// }
// conTwoStr('hi', 'lennard')

// function takeInStr(checkStr) {
//  if (checkStr=== '') {
//     return false
//  } else {
//     return true
//  }
// }

// console.log(takeInStr("hi"))
// console.log(takeInStr(""))

function halfNumber(num) {
    return num/2
}

console.log(halfNumber(5))


let seconds = prompt("Please enter a number in Mins")


function timeInSeconds(minutes) {
    
    return minutes * 60
}
let forAlert = timeInSeconds(seconds);
console.log('time is seconds is: ' + forAlert);

alert(`time is seconds is: ${forAlert}`);