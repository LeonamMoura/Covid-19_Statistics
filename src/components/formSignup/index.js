import React, { useCallback, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { firebaseConfig } from '../../auth/config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form, InputField } from './style'

export const FormSignup = withRouter((props) => {
  const { history } = props
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    axios({
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/help/countries',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': 'c228db00f3msh5ee5fe3e92df7d7p1ca913jsn297c12b0fb18',
        useQueryString: true
      },
      params: {
        format: 'json'
      }
    })
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.log(error)
        history.replace('/')
      })
  }

  const signUpFunction = useCallback(
    async (event) => {
      event.preventDefault()
      const {
        name,
        email,
        password,
        country,
        pass_confirm
      } = event.target.elements
      try {
        if (password.value !== pass_confirm.value) {
          throw new Error('Senha não coincide')
        }

        if (password.value.lenght < 6 || pass_confirm.value.lenght < 6) {
          throw new Error('A senha deve ter no mínimo 6 caracteres')
        }

        if (country.value === 'Selecione') {
          throw new Error('Você deve selecionar um país')
        }

        const result = await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)

        const userId = result.user.uid
        const db = firebaseConfig.database().ref('users').child(userId)

        db.set({
          name: name.value,
          email: email.value,
          country: country.value
        })

        history.push('/home')
      } catch (error) {
        toast.dark(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        history.replace('/')
      }
    },
    [history]
  )

  return (
    <>
      <Form onSubmit={signUpFunction}>
        <h2>Crie sua conta</h2>

        <InputField>
          <label>País</label>
          <select name='country'>
            <option>Selecione</option>
            {countries.map((country) => (
              <option>{country.name}</option>
            ))}
          </select>
        </InputField>

        <InputField>
          <label>Nome</label>
          <input
            placeholder='Digite seu nome completo'
            type='text'
            name='name'
            required
          />
        </InputField>

        <InputField>
          <label>E-mail</label>
          <input
            placeholder='exemplo@email.com'
            type='email'
            name='email'
            required
          />
        </InputField>

        <InputField>
          <label>Senha</label>
          <input
            placeholder='No mínimo 6 caracteres'
            type='password'
            name='password'
            required
          />
        </InputField>

        <InputField>
          <label>Confirmar senha</label>
          <input
            placeholder='Confirme sua senha'
            type='password'
            name='pass_confirm'
            required
          />
        </InputField>

        <button type='submit'>Cadastrar</button>
      </Form>
      <ToastContainer />
    </>
  )
})
