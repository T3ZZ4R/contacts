import { emailBoxEl, nameBoxEl, numberBoxEl, previewImg } from "./commun.js"
export const updateFilds={
    setValue (value){ 
    if (value==="empty") {
     nameBoxEl.value="";
     numberBoxEl.value ="";
     emailBoxEl.value="";   
     previewImg.removeAttribute('src');
     previewImg.classList.remove('show')
    }
    else{ 
    nameBoxEl.value=value.name;
    numberBoxEl.value=value.tel;
    emailBoxEl.value=value.email;
 if (value.img) {
        previewImg.src = value.img;
        previewImg.classList.add('show');
    }
    else {
        previewImg.removeAttribute('src');
        previewImg.classList.remove('show')
    }
}},
getValue(value){
const contact={
    "id":value.id?value.id:crypto.randomUUID(),
    "name":nameBoxEl.value,
    "tel":numberBoxEl.value,
    "email":emailBoxEl.value,
    "img":previewImg.src
};
return contact;
}
}