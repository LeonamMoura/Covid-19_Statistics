import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { firebaseConfig } from '../../auth/config'
import { AuthContext } from '../../auth/authContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const LoginPage = withRouter((props) => {
  const { history } = props

  const loginFunction = useCallback(
    async (event) => {
      event.preventDefault()

      const { email, password } = event.target.elements

      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
      } catch (error) {
        toast.error(
          'Opa! Parece que você errou a senha... Mas não se preocupe, tente mais uma vez',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }
        )
      }
    },
    [history]
  )

  const { user } = useContext(AuthContext)

  if (user) {
    return <Redirect to='./' />
  }

  return (
    <>
      <h1>Logar</h1>
      <form onSubmit={loginFunction}>
        <label>Email</label>
        <input placeholder='email' type='email' name='email' required />

        <label>Senha</label>
        <input placeholder='senha' type='password' name='password' required />

        <button type='submit'>Entrar</button>
      </form>

      <ToastContainer />
    </>
  )
})
