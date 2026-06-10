import { state } from "./commun.js";
import { errorHandler } from "./error.js";
import { elementHandler } from "./inners.js";
 export const storage={
    getFromLocal(){
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
errorHandler('Somthing Happend For recive data');
        }
    }  
    },
    updateLocal(){
    const stringOfList = JSON.stringify(state.contacts)
    localStorage.setItem("contact", stringOfList);
    elementHandler(state.contacts)
}
 }