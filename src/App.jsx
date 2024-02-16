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

  //Delete Task
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  function handleReminder(id) {
    console.log(id);
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handleDelete} onReminder={handleReminder}/> : <p>You have no tasks left.</p>}
    </div>
  )
}

export default App
