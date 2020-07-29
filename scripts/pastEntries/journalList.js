import {useJournalEntries} from './journalDataProvider.js'
import {journalAsHTML} from './journals.js'

export const journalList = () => {
    const contentElement = document.querySelector(".container")
    const journals = useJournalEntries()

    let journalHTMLrepresentation = ""
    for(const journalObj of journals){
        journalHTMLrepresentation += journalAsHTML(journalObj)
    }

    contentElement.innerHTML = `
    <div class="pattern">
        <article class="journalEntriesList">
            ${journalHTMLrepresentation}
        </article>
        </div>
    `
}