import React, { useState, useEffect } from 'react'
import logo from '../assets/react.svg'
import useForm from '../hooks/useForm'

const ComplexForm = () => {
  // Paso1: Crear un único estado con toda la info en forma objeto
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  // Paso 2: vamos a simular la petición a una api y llenamos la info de datos
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Francisco',
        apellido: 'Campos',
        edad: 23,
        genero: 'M',
        email: 'hola@gmail.com',
        password: 'hola1234'
      }
      setDatos(info)
    }, 2000) // Para simular la llamada de una API
  })
  const sendData = (data) => {
    console.log (data)
  }
  // paso 4: uso de mi custom hook de useForm, en donde vamos a desestructuras useForm
 const { input, handleInputChange, handleSubmit } = useForm (sendData, datos)


  // Paso 3: crear mi formulario con jsx
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
        <form>
          {/* Paso 3: Guardar cada cambio del input en su estado */}
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            placeholder='Tu nombre'
            id='nombre'
            value={input.nombre}
            onChange={handleInputChange}
          />
          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />
          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Edad' id='edad' value={input.edad} onChange={handleInputChange} />
          <label htmlFor='genero'>Género</label>
          <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
            <option value=''>Elige tu género</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='0'>Otro</option>
          </select>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@correo.com' id='email' value={input.email} onChange={handleInputChange} />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='correo@correo.com' id='password' value={input.password} onChange={handleInputChange} />
          <button onClick={handleSubmit}> Iniciar Sesión </button>
        </form>
      </div>
    </div>
  )
}

export default ComplexForm