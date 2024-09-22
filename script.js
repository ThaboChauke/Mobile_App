import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"


const firebaseConfig = {
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []


function render(array) {
    let listItems = ""
    array.forEach(item => {
        listItems += `
                    <li>
                        <a href="${item}" target="_blank">${item}</a>
                    </li>`
    })
    ulEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    render(myLeads)
})
