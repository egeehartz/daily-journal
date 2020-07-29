import {getEntries, useJournalEntries} from './journalDataProvider.js'
import {journalAsHTML} from './journals.js'


const contentElement = document.querySelector(".container")


export const journalList = () => {
    getEntries()
        .then(() => {
            const allEntries = useJournalEntries()
            console.log(allEntries)
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
 
/*  let journalHTMLrepresentation = ""
    for(const journalObj of journals){
        journalHTMLrepresentation += journalAsHTML(journalObj)
    }

    contentElement.innerHTML = `
    <div class="pattern">
        <article class="journalEntriesList">
            ${journalHTMLrepresentation}
        </article>
        </div>
    ` */