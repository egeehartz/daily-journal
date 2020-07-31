import {getEntries, useJournalEntries} from './journalDataProvider.js'
import {journalAsHTML} from './journals.js'


const contentElement = document.querySelector(".container")
const eventHub = document.querySelector(".bigContainer")

eventHub.addEventListener("entryStateChanged", () => {
    const allEntries = useJournalEntries()
    render(allEntries)
})


export const journalList = () => {
    getEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            render(allEntries)
        })
    }


const render = (entryArray) => {
    const entriesHTML = entryArray.map(
        (currentEntry) => {
            return journalAsHTML(currentEntry)
        }
    ).join("")

    contentElement.innerHTML = `
        <div class="pattern">
        ${entriesHTML}
        </div>`
}
 
