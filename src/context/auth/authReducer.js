import { types, typesRegister } from "./types";

export const authReducer = ( state, action ) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            }
            case types.authLogout:
                return {
                    isLoggedIn: false,
                    user: null
                }
                case typesRegister.register:
                    return {
                        email: action.payload.email,
                        password: action.payload.password,
                    }
        default:
            return state;
    }
}