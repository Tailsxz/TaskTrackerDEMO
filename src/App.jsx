import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks />
    </div>
  )
}

export default App
