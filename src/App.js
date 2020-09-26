import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './auth/authContext'
import HomePage from './pages/homePage'
import { LoginPage } from './pages/loginPage'
import { SignUpPage } from './pages/signUpPage'
import { PrivateRoute } from './auth/privateRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' exact component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
