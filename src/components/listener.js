import { contactsFieldEl, deleteBtns, deleteMsg, state } from "./commun.js";
import { confirmDelete, deleteHandler } from "./delete.js";
import { confirmHandler, editHandler } from "./edit.js";
const init = () => {
    const buttonHandler = e => {
        const editBtn = e.target.closest('.edit-btn');
        if (editBtn) {
            editHandler(e);
        }
        const deleteBtn = e.target.closest('.delete-btn');
        if (deleteBtn) {
            deleteHandler(e);
        }
        const Btns = deleteBtn || editBtn;


        if (Btns) {
            return;
        }
    }
    const modalHandler = e => {
        const btnClicked = e.target.closest('.delete-action');
        if (!btnClicked) return;
        confirmDelete(e)
    }
    deleteMsg.addEventListener('click', modalHandler);

    contactsFieldEl.addEventListener('click', buttonHandler);
}
init();