import {Auth} from "./UserState";

export const SET_AUTH='SET_AUTH'
export const CLEAR_AUTH='CLEAR_AUTH'

export interface SetAuthAction {
    type: typeof SET_AUTH,
    payload: Auth
}
export interface ClearAuthAction {
    type: typeof CLEAR_AUTH
}

export type AuthActions = SetAuthAction | ClearAuthAction
