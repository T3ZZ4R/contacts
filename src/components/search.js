import { searchBoxEl, state } from "./commun.js";
import { elementHandler } from "./inners.js";
const searchHandler = () => {
    state.searched.length = 0;
    if (searchBoxEl.value == "") {
        elementHandler(state.contacts)
        return;
    }
    const textSearched = searchBoxEl.value.toLowerCase()
    state.contacts.forEach(contact => {


        const filter = contact.name.toLowerCase().includes(textSearched) || contact.tel.toLowerCase().includes(textSearched);
        if (filter) {
            state.searched.push(contact);
        }
    })
    state.searched.sort();
    elementHandler(state.searched)
}
searchBoxEl.addEventListener('input', searchHandler);