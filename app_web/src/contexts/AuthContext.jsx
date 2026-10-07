import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

import { auth, db } from '../services/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        setUser(currentUser)

        if (!currentUser) {
          setProfile(null)
          setLoading(false)
          return
        }

        try {
          const userRef = doc(
            db,
            'users',
            currentUser.uid,
          )

          const userSnapshot = await getDoc(userRef)

          if (userSnapshot.exists()) {
            setProfile(userSnapshot.data())
          } else {
            setProfile(null)
          }
        } catch (error) {
          console.error(
            'Erro ao carregar perfil do usuário:',
            error,
          )

          setProfile(null)
        } finally {
          setLoading(false)
        }
      },
    )

    return unsubscribe
  }, [])

  const role = profile?.role ?? null

  const isManager =
    role === 'manager' || role === 'admin'

  const isAdmin = role === 'admin'

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        role,
        isManager,
        isAdmin,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuth deve ser usado dentro de AuthProvider.',
    )
  }

  return context
}