import React, { useEffect, useState, createContext } from 'react'
import { firebaseConfig } from './config'
import Lottie from 'react-lottie'
import { loadingOptions } from '../utils/lottieOptions'
import styled from 'styled-components'

export const AuthContext = createContext({ user: null })

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;
`

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
    return (
      <Container>
        <Lottie options={loadingOptions} height={400} width={400} />
      </Container>
    )
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
