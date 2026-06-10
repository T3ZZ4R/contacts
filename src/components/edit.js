import { addBtnEl, emailBoxEl, nameBoxEl, numberBoxEl, previewImg, state } from "./commun.js";
import { errorHandler } from "./error.js";
import { updateFilds } from "./field.js";
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
    state.contacts.find(contact => {
        if (contact.id == state.inEdit) {
           
            contact.name = nameBoxEl.value;
            contact.email = emailBoxEl.value;
            contact.tel = numberBoxEl.value;
            contact.img = previewImg.src;
        }
    })
    errorHandler(`Contact Changed Succsesfuly`, '#09ff09', 'black');


    state.inEdit = null;
    addBtnEl.id = "addContactBtn";
    addBtnEl.textContent = 'Add Contact'
};