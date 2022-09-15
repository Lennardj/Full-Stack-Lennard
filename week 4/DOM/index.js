// Simple two color changer
/*function changeColor(){

   if (document.body.style.background === 'blue') {
    document.body.style.background = 'white'
   } else{
    document.body.style.background = 'blue'
   }
}*/


//Multi color chnager
let currentColor = 0
function changeColor(){
    const colorArray = ['white','blue','red','green','yellow','orange']

    if (currentColor === 5){
        currentColor = 0
    } else {
        currentColor++
    }
    document.body.style.background = colorArray[currentColor]
   
}

// Accessing Other element

//document.querySelector('h1').textContent = "Just a test"  //gets an element by its class selector but only returns the first matching element
//document.querySelectorAll('h2').textContent = 'Another test'; //gets all element that match the given selector
//document.getElementById('test').textContent = "Just a test"; //gets an element by its id but only returns the first matching element
//document.getElementsByClassName(); //gets all element with a cerain class name
// document.getElementsByTagName(); //gers all element with a specifc tag name */