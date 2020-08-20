import {deleteEntry, editEntry} from "./journalDataProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete--")) {
        const [ prefix, entryIdString ] = clickEvent.target.id.split("--")  // "3"

        deleteEntry(entryIdString)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("edit--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")
        const editClicked = new CustomEvent("editClicked", {
            detail: {
                entryId: parseInt(entryId)
            }
        })
        dispatchEvent(editClicked)
    }
})


export const journalAsHTML = (journal) => {
    return `
    <section class="entry-list">
    <div><h3>Entry Number ${journal.id}</h3></div>
    <div>Date: ${journal.date}</div>
    <div>Concept(s): ${journal.concept}</div>
    <div class="old-journal-entry">"${journal.entry}"</div>
    <div>Mood: ${journal.mood.label}</div>
    <button id="delete--${journal.id}">Delete Entry</button>
    <button id="edit--${journal.id}">Edit Entry</button>
</section>
    `
}