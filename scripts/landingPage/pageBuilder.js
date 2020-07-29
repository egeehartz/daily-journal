export const landingPageBuilder = () => {
    const contentElement = document.querySelector(".bigContainer")

    contentElement.innerHTML = `
    <section class="landingPage">
        <nav class="navBox">
            <div class="journal-nav"><a id="newEntry" href="#">Make a New Entry</a></div>
            <div class="journal-nav"><a id="pastEntryList" href="#">Past Entries</a></div>
        </nav>
    </section>
    `
}