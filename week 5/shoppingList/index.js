'use strict'

let shoppingList = []
const basket = document.getElementById("shoppingbasket");

function addItem(){

const itemToAdd = {
    item: document.getElementById("item").value,
    quantity: document.getElementById("qty").value,
};
shoppingList.push(itemToAdd)

displayItem()

}

function displayItem(){
    document.getElementById("display").innerHTML = "";
    
    for (let shoppingListItem of shoppingList){
        document.getElementById("display").innerHTML += `
            ${shoppingListItem.item} X 
            ${shoppingListItem.quantity
            } <span style= "cursor: pointer" onclick = "deleteItem(
                ${shoppingList.indexOf(shoppingListItem)}
                )">&#10062</span><br> `
    };
    
};

function deleteItem(itemToDelete){
shoppingList.splice(itemToDelete, 1);
displayItem()
}


function checkItems(){

const splitBasket = basket.value.toLowerCase().split(",")
console.log(basket)
console.log(splitBasket)


const itemsStillToBuy = shoppingList.filter(function (shoppingListElement){
    const itemInBasket = shoppingListElement.item.toLowerCase();
    return !splitBasket.includes(itemInBasket)
})

if (itemsStillToBuy.length !== 0){
    document.getElementById("reminder").innerHTML = "Here are the items you still need to get:<br>";
    for (let itemStillToBuy of itemsStillToBuy){
        document.getElementById("reminder").innerHTML += `${itemStillToBuy.item} X ${itemStillToBuy.quantity} <br>`;
    }} else {
        document.getElementById('reminder').innerHTML = "----- YOU GOT EVERTHING-------";
    }
}

;

