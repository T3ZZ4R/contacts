import { errorBoxEl, errorMsg } from "./commun.js";
export const errorHandler = message => {
    errorBoxEl.classList.add('show');
    errorMsg.textContent = message;
    setTimeout(() => {
        errorBoxEl.classList.remove('show');
    }, 1500)
}