import { deleteBtns, deleteMsg, state, updateLocal } from "./commun.js";
import { errorHandler } from "./error.js";
import { elementHandler } from "./inners.js";

export const deleteHandler = event => {
    const btnClicked = event.target.closest('.delete-btn')
    if (!btnClicked) return;
    const selectedCard = btnClicked.closest('.card');
    const name = selectedCard.querySelector('.name');
    deleteMsg.classList.add('show');
    const confirmDelete = (e, name) => {
        const action = e.target.value;
        if (action == 'confirm') {
            deleteMsg.classList.remove('show');
            state.contacts = state.contacts.filter(contact => contact.name !== name);
            errorHandler(`${name} Is Succsesfully Removed`, 'lightgreen', 'black')
            updateLocal();

        }
        if (action == 'cancel') {
            deleteMsg.classList.remove('show');
        }
    }

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (event => {
            confirmDelete(event, name.textContent)
        }))

    })
}