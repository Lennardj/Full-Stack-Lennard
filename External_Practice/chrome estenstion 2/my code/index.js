let myLeads = ['www.google.com','linkedin.com', 'www.blogger.com','microsoft.com']
const ulEl = document.getElementById('ul-el')
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')


inputBtn.addEventListener('click', saveLead)

function saveLead (){
 myLeads.push(inputEl.value)
 inputEl.value = ''
 renderLead()
   
}
function renderLead(){
    let listItems = ''
    for (let i=0; i<myLeads.length; i++){

        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target=+_blank" 
                    href ='${myLeads[i]}'> 
                        ${myLeads[i]} 
                </a>
            </li>`
// ulEl.innerHTML += '<li>' + myLeads[i] +'</li>';
//    const li = document.createElement("li")
//    li.textContent = myLeads[i]
//    ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}