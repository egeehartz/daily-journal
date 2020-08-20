import { saveEntries, editEntry, getEntries, useJournalEntries } from "../pastEntries/journalDataProvider.js"
import { useMoods, getMoods } from "./MoodProvider.js"



const eventHub = document.querySelector(".bigContainer")
const contentTarget = document.querySelector(".container")


eventHub.addEventListener("editClicked", customEvent => {
    console.log("edit heard")
    render()
    const allEntries = useJournalEntries()
    const entryId = customEvent.detail.entryId
    const objToEdit = allEntries.find(entry => entryId === entry.id)


    const entryDate = document.querySelector("#journalDate")
    const entryConcepts = document.querySelector(".concepts-covered")
    const entryText = document.querySelector(".journal-entry")
    const entryMood = document.querySelector(".moods")
    const id = document.querySelector("#entryId")


    entryDate.value = objToEdit.date
    entryConcepts.value = objToEdit.concept
    entryText.value = objToEdit.entry
    entryMood.value = objToEdit.moodId
    id.value = parseInt(entryId)


})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "publish") {
        const entryDate = document.querySelector("#journalDate")
        const entryConcepts = document.querySelector(".concepts-covered")
        const entryText = document.querySelector(".journal-entry")
        const entryMood = document.querySelector(".moods")
        const id = document.querySelector("#entryId").value
        


        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryText.value,
            moodId: parseInt(entryMood.value)
        }

        if(id === "") {
            saveEntries(newEntry)
        } else {
            editEntry(id)
            .then(getEntries)
            .then(() => {
                const updatedEntries = useEntries()
                render(updatedEntries)
                document.querySelector("#entryId").value = ""
            })

        }
    }
})


const render = () => {
    const allMoods = useMoods()
    contentTarget.innerHTML = `
        <div class="pattern">
        <form>
            <h2 class="newEntry">New Journal Entry</h2>
            <input type="hidden" name="entryId" id="entryId" value="">
                <fieldset class="userInput date">
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset class="userInput concepts">
                    <label for="journalConcepts">Concepts Covered</label>
                    <textarea class="concepts-covered" placeholder="#example #randomthoughts"></textarea>
                </fieldset> 
                <fieldset class="userInput entry">
                    <label for="journalEntry">Journal Entry</label>
                    <textarea class="journal-entry" placeholder="click to add text"></textarea>
                </fieldset> 
                <fieldset class="userInput mood">
                    <label for="journalMood">Mood</label>
                    <select class="moods">
                    <option value="0">How do you feel?</option>
                    ${
                        allMoods.map(
                            (mood) => {
                                return `<option value="${ mood.id }">${ mood.label }</option>`
                            }
                        ).join("")
                    }  
                    </select>
                </fieldset>
                    <button id="publish">Submit</button>
        </form>
        </div>
    `
}


export const entryForm = () => {
    getMoods()
    .then( ()=> {
        const moods = useMoods()
        render(moods)
    })
}