import {journalList} from './pastEntries/journalList.js'
import { newEntryList } from './newEntry/newEntryList.js'
import { landingPageBuilder } from './landingPage/pageBuilder.js'

//landingPageBuilder()

newEntry.addEventListener("click", newEntryList)
pastEntryList.addEventListener("click",journalList)
home.addEventListener("click",landingPageBuilder)

