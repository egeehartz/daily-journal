export const newEntryList = () => {
    const contentElement = document.querySelector(".formContainer")

    contentElement.innerHTML = `
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
            <option>surprised</option>
            <option>happy</option>
            <option>sad</option>
            <option>bad</option>
            <option>disgusted</option>
            <option>angry</option>
            <option>fearful</option>
        </select>
    </fieldset>
<button class="publish-button">Submit</button>
</form>
    `
}