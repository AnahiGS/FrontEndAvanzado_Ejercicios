import { createContext, useState, useEffect, useContext } from "react";
import canciones from '@/assets/listaCanciones.json'

// 1 Creación del contexto vacío
const SongContext = createContext()
 // 2 Creación del componente Proveedor del contexto
function SongProvider (props) {
  const [list, setList] = useState ([])
  const [loading, setLoading] = useState (true)
  const [selectedSong, setSelectedSong] = useState({})
  const [search, setSearch] = useState('')

  useEffect( () =>{
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    },2000)
  })

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// 3 Consumir el contexto

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

export {
  SongProvider,
  useSongContext
}

// 5 uso de cpntext, vamos a ir al componente superior como Home y envolver a los componentes que necesitaran utiliozar la info de contexto
