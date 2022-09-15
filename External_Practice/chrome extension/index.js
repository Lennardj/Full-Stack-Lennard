// chrome://extensions/
let myLeads = [] //backtext turns myleads array into string
// myLeads =JSON.parse(myLeads)

// myLeads.push('www.yahoo.com')
// console.log(myLeads)

// myLeads = JSON.stringify(myLeads) // turns myleads string into array

// console.log(typeof myLeads)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") ) // local strage uses strings
const tabBTn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) //check for truthy and falsey
{
    myLeads =  leadsFromLocalStorage
    render(myLeads)

} 

function render(leads) {
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
      
    }
    ulEl.innerHTML = listItems  
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads) // this works cause list items in empty ulEl.textContent = ''

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage("myLeads"))
})

tabBTn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)

    })



})
    //console.log(tabs[0].url)

   
    
    
    





// JSON.stringify() // turn array into the string
// JSON.parse() //turns array into string