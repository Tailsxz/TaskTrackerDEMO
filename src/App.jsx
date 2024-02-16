import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'

const App = () => {
  //Remember, any useStates and hooks in general should be at the top of your functional component!!!
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={handleDelete}/>
    </div>
  )
}

export default App
