import { state } from "./commun.js";
import { elementHandler } from "./inners.js";

export const deleteHandler = event => {
    const btnClicked = event.target.closest('.delete-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.parentNode.parentNode;
    const name = selectedCard.querySelector('.name');
    state.contacts = state.contacts.filter(contact => contact.name !== name.textContent);
    const stringOfList = JSON.stringify(state.contacts)
    localStorage.setItem("contact", stringOfList);
    elementHandler(state.contacts)
}