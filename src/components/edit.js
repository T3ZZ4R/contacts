import { addBtnEl, emailBoxEl, nameBoxEl, numberBoxEl, previewImg} from "./dom.js";
import { errorHandler } from "./error.js";
import { updateFilds } from "./field.js";
import { state } from "./state.js";
export const editHandler = event => {
    const btnClicked = event.target.closest('.edit-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.closest('.card');
    const id = selectedCard.dataset.id;
    const name = selectedCard.querySelector('.name');
    const inEdit = state.contacts.find(contact => contact.id == id);
    updateFilds.setValue(inEdit);
    state.inEdit = inEdit.id;
    addBtnEl.textContent = "CONFIRM";
    addBtnEl.id = "confirm-btn";
    nameBoxEl.focus();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
export const confirmHandler = () => {
    state.contacts = state.contacts.map(contact => contact.id == state.inEdit ?
        contact = updateFilds.getValue(contact)
        : contact);
    errorHandler(`Contact Changed Succsesfuly`, '#09ff09', 'black');
    state.inEdit = null;
    addBtnEl.id = "addContactBtn";
    addBtnEl.textContent = 'Add Contact'
};