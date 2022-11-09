import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Secret from './pages/Secret'
import SignUp from './pages/SignUp'

function App () {
  return (
    <>
      <Home />
      <Login />
      <SignUp />
      <Secret />
    </>
  )
}

export default App
