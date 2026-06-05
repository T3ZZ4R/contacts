import { addBtnEl, emailBoxEl, nameBoxEl, numberBoxEl, previewImg, state } from "./commun.js";

export const editHandler=event=>{
const btnClicked=event.target.closest('.edit-btn')
if(!btnClicked)return;
const selectedCard=btnClicked.parentNode.parentNode;
const name=selectedCard.querySelector('.name');
const contact=state.contacts.forEach(contact=>{
    if(contact.name==name.textContent){
nameBoxEl.value=contact.name;
numberBoxEl.value=contact.tel;
emailBoxEl.value=contact.email;
if(contact.img){ 
previewImg.src=contact.img;
 previewImg.classList.add('show');}
 else{
    previewImg.removeAttribute('src');
    previewImg.classList.remove('show')
 }
 addBtnEl.textContent="CONFIRM";
 addBtnEl.id="confirm-btn";
nameBoxEl.focus();
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});
state.inEdit=contact;


    }
})

// const info=selectedCard.forEach(element => {
//     if (element.nodetype==3) {
//         return element;
//     }
// });
// console.log(info

// );

}