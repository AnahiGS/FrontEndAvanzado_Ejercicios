// Reglas para crear un Hook

// Custom hook es una función que utiliza otros hooks de React
// 1. Siempre usar la palabra 'use' al nombrarlo: useForm 
// 2. Siempre deben de ser funciones ( a partir de react v16 usamos hooks)
// 3. Siempre debe de usar al menos un Hook de React (useState, useEffect, useRef, etc...)
// 4. Deben de ser reutilizables, no son para casos específicos
import {useEffect, useState} from 'react'

function useForm (callback, defaults) {
  // estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)
  // Cargar los valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

// Función que se ejecuta cuando se escucha un cambio en el input
  const handleInputChange = (event) => {
    const { name, value } = event.target 
    // es lo mismo que const name = event.target.name y const value = event.target.value
    console.log(name, value)
    setInput({ ...input, [name]: value}) // estoy comparando la info que ya tengo con el estado único de los valores, si hay algún cambio entonces lo modifica, sino no lo hace
  }

  // FUnción que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Evito que se rompa el SPA
    callback (input) // esta es la función que se recibe por parametro
  }

  return {
    input, handleInputChange, handleSubmit
  }
}

export default useForm