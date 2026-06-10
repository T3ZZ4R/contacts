import { elementHandler } from "./inners.js";

//global
export const searchBoxEl = document.querySelector("#searchInput");
export const nameBoxEl = document.querySelector("#nameInput");
export const numberBoxEl = document.querySelector("#phoneInput");
export const emailBoxEl = document.querySelector("#emailInput");
export const upImgEl = document.querySelector("#avatarInput");
export const addBtnEl = document.querySelector("#addContactBtn");
export const contactsFieldEl = document.querySelector("#contactsContainer");
export const emptyStateMsgEl = document.querySelector("#emptyState")
export const contactsCounterEl = document.querySelector("#contactCounter");
export const previewImg = document.querySelector("#avatarPreview");
export const errorBoxEl = document.querySelector(".error-toast");
export const errorMsg = document.querySelector("#errorMessage");
export const deleteMsg = document.querySelector('.delete-toast');
export const deleteBtns = document.querySelectorAll('.delete-action')
//states
export const state = {
    "contacts": [],
    "searched": [],
    "inEdit": [],
    "pendingToDeleteId": null
};
//get items from local storage
const getFromLocal = () => {
    try {
        const data = localStorage.getItem("contact");
        if (!data) return;
        const jsonifyData = JSON.parse(data);
        state.contacts = jsonifyData;
        elementHandler(state.contacts);
    }
    catch {
        err => {
            console.log(err);

        }
    }
}
getFromLocal();
export const updateLocal = () => {
    const stringOfList = JSON.stringify(state.contacts)
    localStorage.setItem("contact", stringOfList);
    elementHandler(state.contacts)
}