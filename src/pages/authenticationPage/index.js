import React, { useContext, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { FormLogin } from '../../components/formLogin'
import { FormSignup } from '../../components/formSignup'
import { PrecautionsSection } from '../../components/precautionsSection'
import { DatasField, Slogan, ButtonAlterForm, AlterFormField } from './style'

export const AuthenticationPage = withRouter((props) => {
  const [showLogin, setShowLogin] = useState(true)
  const { user } = useContext(AuthContext)

  if (user) {
    return <Redirect to='./home' />
  }

  return (
    <>
      <DatasField>
        <Slogan>
          <h1>
            COVID-19{' '}
            <span>
              <i>Statistics</i>
            </span>
          </h1>
        </Slogan>
        {showLogin ? <FormLogin /> : <FormSignup />}

        {showLogin ? (
          <>
            <AlterFormField>
              <h3>Ainda não é cadastrado ?</h3>
              <u>
                <span
                  onClick={() => {
                    if (showLogin == true) {
                      setShowLogin(false)
                    } else {
                      setShowLogin(true)
                    }
                  }}
                >
                  Cadastre-se
                </span>
              </u>
            </AlterFormField>
          </>
        ) : (
          <>
            <AlterFormField>
              <h3>Já tem uma conta ?</h3>

              <u>
                <span
                  onClick={() => {
                    if (showLogin == true) {
                      setShowLogin(false)
                    } else {
                      setShowLogin(true)
                    }
                  }}
                >
                  Faça login
                </span>
              </u>
            </AlterFormField>
          </>
        )}
      </DatasField>

      <PrecautionsSection />
    </>
  )
})
