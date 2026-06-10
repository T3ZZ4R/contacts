import { addBtnEl, emailBoxEl, nameBoxEl, numberBoxEl, previewImg, state } from "./commun.js";
import { errorHandler } from "./error.js";
export const editHandler = event => {
    const btnClicked = event.target.closest('.edit-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.closest('.card');
    const id = selectedCard.dataset.id;
    const name = selectedCard.querySelector('.name');
    const inEdit = state.contacts.find(contact => contact.id == id);
    state.inEdit = inEdit.id;
    nameBoxEl.value = inEdit.name;
    numberBoxEl.value = inEdit.tel;
    emailBoxEl.value = inEdit.email;
    if (inEdit.img) {
        previewImg.src = inEdit.img;
        previewImg.classList.add('show');
    }
    else {
        previewImg.removeAttribute('src');
        previewImg.classList.remove('show')
    }
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