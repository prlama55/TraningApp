import {Auth} from "../@types/UserState";
import {CLEAR_AUTH, SET_AUTH, SetAuthAction, ClearAuthAction} from "../@types/actions";

export const setAuth=(auth: Auth): SetAuthAction=>{
    return {
        type: SET_AUTH,
        payload: auth
    }
}
export const clearAuth=(): ClearAuthAction=>{
    return {
        type: CLEAR_AUTH
    }
}
