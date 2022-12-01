import { types } from "./types";

export const authReducer = ( state, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
        default:
            return state;
    }
}