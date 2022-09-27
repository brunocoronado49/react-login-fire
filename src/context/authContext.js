import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) throw new Error("No existe auth provider")
  return context
}

export function AuthProvider({ children }) {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <authContext.Provider value={{signUp}}>
      {children}
    </authContext.Provider>
  )
}