import {journalList} from './pastEntries/journalList.js'
import { newEntryList } from './newEntry/newEntryList.js'

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

newEntry.addEventListener("click", newEntryList)
pastEntryList.addEventListener("click",journalList)
openNavi.addEventListener("click",openNav)
closeNavi.addEventListener("click",closeNav)


