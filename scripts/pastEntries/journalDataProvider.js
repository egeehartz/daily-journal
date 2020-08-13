/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

 let entries = []

 const eventHub = document.querySelector(".bigContainer")

 const dispatchStateChangeEvent = () => {
     const entryStateChangedEvent = new CustomEvent("entryStateChanged")
 
     eventHub.dispatchEvent(entryStateChangedEvent)
 }


export const getEntries = () => {
    return fetch(`http://localhost:3000/entries?_expand=mood`)
        .then(entries => entries.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}


export const saveEntries = (note) => {
    const jsonEntry = JSON.stringify(note)

    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonEntry
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}