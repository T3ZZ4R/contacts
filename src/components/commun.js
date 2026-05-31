//global
const searchBoxEl=document.querySelector("#searchInput");
const nameBoxEl=document.querySelector("#nameInput");
const numberBoxEl=document.querySelector("#phoneInput");
const emailBoxEl=document.querySelector("#emailInput");
const upImgEl=document.querySelector("#avatarInput");
const addBtnEl=document.querySelector("#addContactBtn");
const contactsFieldEl=document.querySelector("#contactsContainer");
const emptyStateMsgEl=document.querySelector("#emptyState")
const contactsCounterEl=document.querySelector("#contactCounter");
//states
const state={
    "contacts":[]
};

console.log(state.contacts.length);
