import {AuthState} from "../@types/UserState";
import AppActionsTypes from "../@types";

const initialState: AuthState={
    auth:{
        username: '',
        accessToken: '',
        refreshToken: '',
        userType: '',
        expiresIn: 0
    }
}
const authReducer=(state= initialState, action:AppActionsTypes): AuthState=>{

    switch (action.type) {
        case 'SET_AUTH':
            console.log("action.payload=====",action.payload)
            return {...state, auth: action.payload}
        case 'CLEAR_AUTH':
            return initialState
        default:
            return initialState
    }
}
export default authReducer
