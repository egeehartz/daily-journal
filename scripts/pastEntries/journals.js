//obsolete?


export const journalAsHTML = (journal) => {
    return `
    <section class="entry-list">
    <div><h3>Entry Number ${journal.id}</h3></div>
    <div>Date: ${journal.date}</div>
    <div>Concept(s): ${journal.concept}</div>
    <div class="old-journal-entry">"${journal.entry}"</div>
    <div>Mood: ${journal.mood.label}</div>
    <button class="delete">Delete Entry</button>
    <button class="edit">Edit Entry</button>
</section>
    `
}