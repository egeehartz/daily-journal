import { saveEntries } from "../pastEntries/journalDataProvider.js"



const eventHub = document.querySelector(".bigContainer")
const contentTarget = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "publish") {

        const entryDate = document.querySelector("#journalDate")
        const entryConcepts = document.querySelector(".concepts-covered")
        const entryText = document.querySelector(".journal-entry")
        const entryMood = document.querySelector(".moods")
        


        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryText.value,
            mood: entryMood.value
        }

        saveEntries(newEntry)
    }
})


const render = () => {
    contentTarget.innerHTML = `
        <div class="pattern">
        <form>
            <h2 class="newEntry">New Journal Entry</h2>
                <fieldset class="userInput date">
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                <fieldset class="userInput concepts">
                    <label for="journalConcepts">Concepts Covered</label>
                    <textarea class="concepts-covered">#example #randomthoughts</textarea>
                </fieldset> 
                <fieldset class="userInput entry">
                    <label for="journalEntry">Journal Entry</label>
                    <textarea class="journal-entry">click to add text</textarea>
                </fieldset> 
                <fieldset class="userInput mood">
                    <label for="journalMood">Mood</label>
                    <select class="moods">
                    <option>mad</option>
                    <option>sad</option>
                    <option>disgusted</option>
                    <option>happy</option>
                    <option>surprised</option>
                    <option>fearful</option>   
                    </select>
                </fieldset>
                    <button id="publish">Submit</button>
        </form>
        </div>
    `
}


export const entryForm = () => {
    render()
}