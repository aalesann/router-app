import { createContext, useReducer, useState} from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext(null)


export const AuthUser = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext.Provider value={ { 
            isLogged: false,
            dispatch,
            state 
        } }>
            { children }
        </AuthContext.Provider>
    )
}