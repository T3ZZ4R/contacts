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
import { elementHandler } from "./inners.js";

const addContactHandler = () => {
    const nameChecked =nameBoxEl.value=="";
    const numberChecked = numberBoxEl.value=="";
    console.log(nameChecked , numberChecked);
    if(nameChecked){
errorBoxEl.classList.add('show');
    }
    const contact = {
        "name": nameBoxEl.value,
        "tel": numberBoxEl.value,
        "email": emailBoxEl.value,
        "img": previewImg.src
    };
    state.contacts.push(contact);
    const stringOfList = JSON.stringify(state.contacts)
    // localStorage.setItem("contact", stringOfList);


    nameBoxEl.value = "";
    emailBoxEl.value = "";
    numberBoxEl.value = "";
    upImgEl.value="";
    previewImg.removeAttribute("src");
    previewImg.classList.remove("show");
    elementHandler();
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