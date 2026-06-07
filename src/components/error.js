import { errorBoxEl, errorMsg } from "./commun.js";
export const errorHandler = (message,color='#ff4d6d',textColor='white') => {
errorBoxEl.style.background=color;
errorBoxEl.style.color=textColor;
    errorBoxEl.classList.add('show');
    errorMsg.textContent = message;
    setTimeout(() => {
        errorBoxEl.classList.remove('show');
    }, 3000)
}
//if want want handke it call it and give your message