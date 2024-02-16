import { useState } from 'react'
import Header from './components/Header'
import './App.css'

const App = () => {
  const name = 'Tai';
  return (
    <div className="container">
      <Header name={name} />
    </div>
  )
}

export default App
