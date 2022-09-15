let counterEL = document.getElementById('counter-El')

let num = 0
function counter(){

    num++
    counterEL.textContent=  num
}

// Events in ja
/*
onchange; //when a change is detecged to an element
onmouseover; //when the mouse is moved over the object
onmouseout; //when the mouse is moved out of the obbject
onkeydown; //when the user pushes a key on the keyboard
onload; //when the browser has finished loading the page
oninput; //each time a new charectrer is added or teken away in an input field 
onsubmit; // specific to the form element, handles the submission of a form 
*/