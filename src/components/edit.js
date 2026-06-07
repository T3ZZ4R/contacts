import { addBtnEl, emailBoxEl, nameBoxEl, numberBoxEl, previewImg, state } from "./commun.js";
import { errorHandler } from "./error.js";
export const editHandler = event => {
    const btnClicked = event.target.closest('.edit-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.closest('.card');
    const name = selectedCard.querySelector('.name');
    state.inEdit = state.contacts.filter(contact => contact.name == name.textContent);
    const inEdit = state.inEdit[0];

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
    state.contacts.forEach(contact => {
        if (contact.name == state.inEdit[0].name) {
            contact.name = nameBoxEl.value;
            contact.email = emailBoxEl.value;
            contact.tel = numberBoxEl.value;
            contact.img = previewImg.src;
        }
    })
    errorHandler(`Contact Changed Succsesfuly`, '#09ff09', 'black');


    state.inEdit.length = 0;
    addBtnEl.id = "addContactBtn";
    addBtnEl.textContent = 'Add Contact'
};