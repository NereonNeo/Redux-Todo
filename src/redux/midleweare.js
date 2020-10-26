
import{CREATE_POST} from "./types";
import{showAlert} from "./actions";
const forbidden = ['fuck','spam','php','kill','Сука']
export function spamWordsMiddleware({dispatch}){
    return function (next){
        return function (action){
            if(action.type === CREATE_POST) {
                const filterToString = forbidden.toLocaleString().toLowerCase().split(',');
                const found = filterToString.filter(w => action.payload.title.includes(w))
                if(found.length){ // found
                    return dispatch(showAlert('Вы спамер,идите лесом 🖕🖕🖕 '))
                }
            }
            return next(action)
        }
    }
}