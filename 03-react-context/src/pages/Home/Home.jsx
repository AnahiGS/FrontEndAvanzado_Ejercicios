import React from 'react'
import './home.css'
import SongList from '@/components/SongList'
import SongDetail from '@/components/SongDetail'
import Header from '@/components/Header'

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div className='izquierdo'>
        <h2>Lado izquierdo</h2>
        <SongList />
      </div>
      <div className='derecho'>
        <h2>Lado derecho</h2>
        <SongDetail />
      </div>
    </div>
  )
}

export default Home