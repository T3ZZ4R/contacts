import { errorBoxEl, errorMsg } from "./commun.js";
export const errorHandler = message => {
    errorBoxEl.classList.add('show');
    errorMsg.textContent = message;
    setTimeout(() => {
        errorBoxEl.classList.remove('show');
    }, 2500)
}
//if want want handke it call it and give your message