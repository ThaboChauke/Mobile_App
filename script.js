import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js"


const firebaseConfig = {
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database,"leads")

const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


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

onValue(referenceInDB, function(snapshot) {
    const snapshotExists = snapshot.exists()

    if (snapshotExists) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

saveBtn.addEventListener("click", function() {
    push(referenceInDB,inputEl.value)
    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})
