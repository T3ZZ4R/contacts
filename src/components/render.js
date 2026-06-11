import { contactsCounterEl, contactsFieldEl, emptyStateMsgEl} from "./dom.js";
import { updateFilds } from "./field.js";
export const elementHandler = (obj, emptyStateMessage = `No contacts yet. Add your first one ✨`) => {
  if (obj.length == 0) {
    contactsFieldEl.innerHTML = "";
    emptyStateMsgEl.innerHTML = `<p>${emptyStateMessage}</p>`;
    contactsCounterEl.textContent = `${obj.length} Contacts`
    return;
  }

  contactsFieldEl.innerHTML = "";
  obj.forEach(contact => {
    const badge = contact.name.slice(0, 1).toUpperCase();
    const element = `
     <div class="card" data-id=${contact.id}>
    <div class="avatar">
  ${contact.img ? `<img src="${contact.img}">` : `<div class="avatar-placeholder">${badge}</div>`} 
    </div>
    <h3 class="name">${contact.name}</h3>
    <p>${contact.tel}</p>
    <p>${contact.email}</p>

   <div class="actions">
  <button class="edit-btn">
    <img src="./css/edit.png" alt="Edit">
  </button>

  <button class="delete-btn">
    <img src="./css/delete.png" alt="Delete">
  </button>

  <a href="tel:${contact.tel}" class="call-btn">
    <img src="./css/phone.png" alt="Call">
  </a>
</div>
  </div>`;
    contactsFieldEl.insertAdjacentHTML("beforeend", element);

    emptyStateMsgEl.innerHTML = "";
  }
  )
  updateFilds.setValue("empty");
  contactsCounterEl.textContent = `${obj.length} Contacts`;
}

