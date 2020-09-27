import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './auth/authContext'
import HomePage from './pages/homePage'
import { AuthenticationPage } from './pages/authenticationPage'
import { PrivateRoute } from './auth/privateRoute'
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AuthenticationPage} />
          <PrivateRoute exact path='/home' component={HomePage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
