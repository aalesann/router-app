import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

export const PrivatesRoutes = ({ children }) => {

    // Acceder a la información del contexto para saber si el usuario está autenticado
    const { isLogged } = useContext(AuthContext);


  return (!isLogged)
            ? (
                <Navigate to={'/auth/login'} />
            )
            : (
                children
            )
}
