import React, { useState, useEffect } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
  // Paso 1: Crear los estados donde se guardará la info que tecleamos
  const [email, setEmail] = useState('') // valores iniciales serán string vacío
  const [password, setPassword] = useState('')
  // Paso 4: Manejar lo que va a suceder cuando se envie mi formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evitar que se recargue la página y no rompa el SPA
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }
  // Paso 2: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
        <form>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@correo.com' id='email' onChange={(event) => { setEmail(event.target.value) }} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='correo@correo.com' id='password' onChange={(event) => { setPassword(event.target.value) }} />
          <button onClick={handleSubmit}> Iniciar Sesión </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
