import { contactsCounterEl, contactsFieldEl, emptyStateMsgEl, state } from "./commun.js";
export const elementHandler = (obj,emptyStateMessage=`No contacts yet. Add your first one ✨`) => {
  if(obj.length == 0){
    contactsFieldEl.innerHTML = ""; 
    emptyStateMsgEl.innerHTML = `<p>${emptyStateMessage}</p>`;
    contactsCounterEl.textContent = `${obj.length} Contacts`
    return;
  }
    
  contactsFieldEl.innerHTML = "";
  obj.forEach(contact => {
    const badge = contact.name.slice(0, 1).toUpperCase();
    //`<img src="${contact.img}"`||``
    const element = `
     <div class="card">
    <div class="avatar">
  ${contact.img ? `<img src="${contact.img}">` : `<div class="avatar-placeholder">${badge}</div>`} 
    </div>
    <h3>${contact.name}</h3>
    <p>${contact.tel}</p>
    <p>${contact.email}</p>

    <div class="actions">
      <button class="edit-btn"><i class="fa fa-pen"></i>E</button>
      <button class="delete-btn"><i class="fa fa-trash"></i>D</button>
    </div>
  </div>`;
    contactsFieldEl.insertAdjacentHTML("beforeend", element);
    contactsCounterEl.textContent = `${obj.length} Contacts`
    emptyStateMsgEl.innerHTML ="";
  }
)
}
