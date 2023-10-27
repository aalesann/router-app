import { useContext } from "react"
import { AuthContext } from '../context/AuthContext';
import { Navigate } from "react-router-dom";


export const PublicRoutes = ({ children }) => {

  // Acceder a la información del contexto
  const { isLogged } = useContext(AuthContext)


  return ( !isLogged )
          ? children
          : <Navigate to={'/'} />
}
