// let guess;
// const secretNumber =3;
// while (guess != secretNumber){
//     guess =prompt();
//    console.log("It's a ${guess}")
// }

// let guess;
// const secretNumber =8;
// while (guess != secretNumber){
//     guess = prompt("Please guess a number bwtween 5 and 10");
//     console.log(`It's a ${guess}`)
//     if (guess == secretNumber){
//         console.log(`Great Job!! ${guess} was the correct numner`)
//     } else{
//         console.log(`Nice try, but ${guess} is wrong`)
//     }

// }

/*let guess;
const secretNumber =8;
while (guess != secretNumber){
    guess = prompt("Please guess a number bwtween 5 and 10");
    console.log(`It's a ${guess}`)
    guess == secretNumber ?  console.log(`Great Job!! ${guess} was the correct numner`) : console.log(`Nice try, but ${guess} is wrong`);

}*/

/*for (let i =1; i<=5; i++){
    if (i==3){
        break; //stops
    }
    console.log(i)
}

for (let i =1; i<=10; i++){
    if (i==3){
        continue; //skips
    }
    console.log(i)
}*/


/*x = 0;
while(true){
    if (x===3) {
        console.log('X is now 3');
    }
    if (x=== 10){
        console.log("x is now 10");
    }
    if (x=== 15){
        console.log('x is now 15');
        break;
    }
    x++
}*/

const testStr = "Hell@ the#e"

for (let index = 0; index <= testStr.length; index++) {
    //console.log(testStr[index]);
    if (testStr[index] == '@' || testStr[index] == '#' || testStr[index] == '!'|| testStr[index] == '$'  ) {
        console.log(`${testStr[index]} is not a valid charecter `)
        break;
    } 
    
}

const testArray = ['tesla', 'jaguar', 'ford']
for (const car of testArray) {
    console.log(car)
}

const student = {
    name: "rob",
    age: 5,
    isAdmin: true,
};

for (const key in student) {

    console.log(key);
    console.log(student[key])
 
}