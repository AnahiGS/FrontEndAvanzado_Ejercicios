import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS' },
    { id: 2, nombre: 'Cajero', desc: 'Simulador de cajero autómatico con HTML, CSS y JS' },
    { id: 3, nombre: 'Pokédex', desc: 'Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS, y JS ' }
  ]
  const { pid } = useParams()
  const navigate = useNavigate()
  return (
    <>
      <h3>ID: {proyectos[pid-1].id}</h3>
      <h3>Nombre: {proyectos[pid-1].nombre}</h3>
      <h3>Descripción: {proyectos[pid-1].desc}</h3>
      <button onClick={() => {
        navigate('/portafolio')
        // si quiero ir a la página anterior del historial: navigate(-1)
      }}
      >
        Nos vamos al portafolio
      </button>
    </>
  )
}

export default PortafolioDetalle