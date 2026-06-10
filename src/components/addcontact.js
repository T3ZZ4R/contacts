import {
    state,
    nameBoxEl,
    numberBoxEl,
    emailBoxEl,
    upImgEl,
    addBtnEl,
    previewImg,
    errorBoxEl
} from "./commun.js";
import { confirmHandler } from "./edit.js";
import { errorHandler } from "./error.js";
import { updateFilds } from "./field.js";
import { elementHandler } from "./inners.js";
import { storage } from "./local.js";

const addContactHandler = () => {
    const nameChecked = nameBoxEl.value == "";
    const numberChecked = numberBoxEl.value == "";
    if (nameChecked) {
        errorHandler('Name Is Cannot Be Empty')
        return;
    }
    if (numberChecked) {
        errorHandler('Number Is Connat Be Empty')
        return;
    }
    const numberCheckinput = /^[0-9]+$/;
    if (!numberCheckinput.test(numberBoxEl.value)) {
        errorHandler('Number Box May Not Contain Characters');
        return;
    }
    if (addBtnEl.id == "addContactBtn") {

         const contact =updateFilds.getValue('new');
        state.contacts.push(contact);
    }
    if (addBtnEl.id == "confirm-btn") {
        confirmHandler();
    }
updateFilds.setValue("empty")
storage.updateLocal();
}
const showPreview = () => {
    const image = upImgEl.files[0];
    if (!image) return;
    const reader = new FileReader();
    reader.onload = event => {
        previewImg.src = event.target.result;
        previewImg.classList.add('show');
    }
    reader.readAsDataURL(image);
}
const numberCheckHandler = (e) => {
    const allowedKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
    ];
    if (allowedKeys.includes(e.key)) {
        return;
    }
    const numberCheckinput = /^[0-9]$/;
    if (!numberCheckinput.test(e.key)) {
        e.preventDefault();
        errorHandler('Number Box May Not Contain Characters');
        return false;
    }
}
numberBoxEl.addEventListener('keydown', numberCheckHandler);
upImgEl.addEventListener('change', showPreview);
addBtnEl.addEventListener('click', addContactHandler);