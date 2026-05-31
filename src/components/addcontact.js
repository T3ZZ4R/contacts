import {
    state,
    nameBoxEl,
    numberBoxEl,
    emailBoxEl,
    upImgEl,
    addBtnEl,
    previewImg
} from "./commun.js";

const addContactHandler = () => {

    const contact = {
        "name": nameBoxEl.value,
        "tel": numberBoxEl.value,
        "email": emailBoxEl.value,
        "img": previewImg.src
    };
    state.contacts.push(contact);
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
upImgEl.addEventListener('change', showPreview);
addBtnEl.addEventListener('click', addContactHandler);