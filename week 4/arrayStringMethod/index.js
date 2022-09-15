
// A method is a fuction that is creates inside a Object
const person = {
    name: 'Lennard',
    greeting: function(){
        console.log("hey");
    }
}

person.greeting()

// "String".toUpperCase
// "string".toLowerCase
// "    sting  ".trim
// [1].pop()

//Practice Array

const iceCream = ['vanilla', 'chocolate', 'blueberry', 'rum&raisen'];
console.log(iceCream)

const pushMethod = iceCream.push('rainbow') // add last element to array
console.log(iceCream)
console.log(pushMethod) //Returen length of Array

const popMethod = iceCream.pop() //remove last element to array
console.log(iceCream)
console.log(popMethod) //returns value of removed array

const unshiftMethod =iceCream.unshift('rainbow')
console.log(iceCream)
console.log(unshiftMethod) //returns arrya length 

const shiftMethod = iceCream.shift()
console.log(iceCream)
console.log(shiftMethod) //returns vaule of removed array items


// split() String methond
const icecreamSplit = 'vinilla chocolate matcha'
const resultsIceCreamSplit = icecreamSplit.split(' ')
console.log(resultsIceCreamSplit)


//join() String Method
const icecreamJoin = ['vanilla', 'chocolate', 'blueberry']
const resultIcecreamJoin = iceCream.join(' ')
console.log(resultIcecreamJoin)

//slice Method
const icecreamSlice = ['vanilla', 'chocolate', 'blueberry']
const resulticecreamSlice = icecreamSlice.slice(1,2)
console.log(resulticecreamSlice)

//includes()
//const icecreamIncludes = ['vanilla', 'chocolate', 'blueberry']
//const userInput = prompt('Enter a thing').toLowerCase()
//console.log(`Does the array contain ${userInput}? ${icecreamIncludes.includes(userInput)}`)

//array.map CANNOT RETURN VALUE 
const icecreamForEach = ['vanilla', 'chocolate', 'blueberry']
icecreamForEach.forEach(function(iceCream,index){
    console.log(iceCream + " icecream")
    console.log(index)
    console.log(icecreamForEach[index]);

});

//array.map() CAN RETURN VALUE
const icecreamMap = ['vanilla', 'chocolate', 'blueberry']
const orderIcecream = icecreamMap.map(
    function(icecream,index) {
        return `Flavour ${index + 1}: ${icecream}`
    }
    
);
//console.log(orderIcecream)

//Array.filter

const icecreamCost = [2.95,4,5]
const resulticecreamCost = icecreamCost.filter(function (cost, index, array){
    return cost >3
    console.log(cost)
    console.log(index)
    console.log(array)
})
console.log(resulticecreamCost)