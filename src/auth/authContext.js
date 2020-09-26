import React, { useEffect, useState, createContext } from 'react'
import { firebaseConfig } from './config'

export const AuthContext = createContext({ user: null })

export const AuthProvider = (props) => {
  const { children } = props
  const [user, setUser] = useState(null)
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user)
      setWaiting(false)
    })
  }, [])

  if (waiting) {
    return <>Carregando...</>
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
