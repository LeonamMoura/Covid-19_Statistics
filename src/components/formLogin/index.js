import React, { useCallback } from 'react'
import { firebaseConfig } from '../../auth/config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { InputField, Form } from './style'

export const FormLogin = (props) => {
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
  return (
    <>
      <Form onSubmit={loginFunction} autocomplete='off'>
        <h2>Acesse sua conta</h2>
        <InputField>
          <label>Email</label>
          <input placeholder='email' type='email' name='email' required />
        </InputField>

        <InputField>
          <label>Senha</label>
          <input placeholder='senha' type='password' name='password' required />
        </InputField>

        <button type='submit'>Entrar</button>
      </Form>

      <ToastContainer />
    </>
  )
}
