import { searchBoxEl } from "./dom.js";
import { elementHandler } from "./render.js";
import { state } from "./state.js";

const searchHandler = () => {
    if (searchBoxEl.value == "") {
        elementHandler(state.contacts)
        return;
    }
    const textSearched = searchBoxEl.value.toLowerCase()
    const searched=[];
    state.contacts.forEach(contact => {


        const filter = contact.name.toLowerCase().includes(textSearched) || contact.tel.toLowerCase().includes(textSearched);
        if (filter) {
            searched.push(contact);
        }
    })
    searched.sort();
    elementHandler(searched, `You Have Not Contact Matched With ${searchBoxEl.value} 🙄`)
}
searchBoxEl.addEventListener('input', searchHandler);