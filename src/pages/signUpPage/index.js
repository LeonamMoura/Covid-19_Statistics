import React, { useCallback, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { firebaseConfig } from '../../auth/config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const SignUpPage = withRouter((props) => {
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
        history.replace('/signup')
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
        if (password.value != pass_confirm.value) {
          throw new Error('Senha não coincide')
        }

        if (password.value.lenght < 6 && pass_confirm.value < 6) {
          throw new Error('A senha deve ter no mínimo 6 caracteres')
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

        history.push('/')
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
        history.replace('/signup')
      }
    },
    [history]
  )

  return (
    <>
      <form onSubmit={signUpFunction}>
        <label>Nome</label>
        <input
          placeholder='Digite seu nome completo'
          type='text'
          name='name'
          required
        />

        <label>E-mail</label>
        <input
          placeholder='exemplo@email.com'
          type='email'
          name='email'
          required
        />

        <label>País</label>
        <select name='country'>
          {countries.map((country) => (
            <option>{country.name}</option>
          ))}
        </select>

        <label>Senha</label>
        <input
          placeholder='No mínimo 6 caracteres'
          type='password'
          name='password'
          required
        />

        <label>Confirmar senha</label>
        <input
          placeholder='Confirme sua senha'
          type='password'
          name='pass_confirm'
          required
        />

        <button type='submit'>Cadastrar</button>
      </form>
      <ToastContainer />
    </>
  )
})
