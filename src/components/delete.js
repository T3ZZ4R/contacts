import { deleteBtns, deleteMsg, state} from "./commun.js";
import { errorHandler } from "./error.js";
import { elementHandler } from "./inners.js";
import { storage } from "./local.js";

export const deleteHandler = event => {
    const btnClicked = event.target.closest('.delete-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.closest('.card');
    const id = selectedCard.dataset.id;
    state.pendingToDeleteId = id;
    const name = selectedCard.querySelector('.name');
    deleteMsg.classList.add('show');
}



export const confirmDelete = (e) => {
    const action = e.target.value;
    if (action == 'confirm') {
        const contact = state.contacts.find(contact => contact.id == state.pendingToDeleteId)
        state.contacts = state.contacts.filter(contact => contact.id != state.pendingToDeleteId);
        deleteMsg.classList.remove('show');
        errorHandler(`${contact.name} Is Succsesfully Removed`, 'lightgreen', 'black')
        storage.updateLocal();
        return;
    }
    if (action == 'cancel') {
        deleteMsg.classList.remove('show');
    }
}