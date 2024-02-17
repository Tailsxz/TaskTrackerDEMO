import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'

const App = () => {
  //Remember, any useStates and hooks in general should be at the top of your functional component!!!
  const [showingAddForm, setShowingAddForm] = useState(false);
  const [tasks, setTasks] = useState([
  ]);

  useEffect(() => {
    //Setting up our fetch function for the tasks stored in db.json, passing in an empty dependency array as we only need this to run once on the initial mount/render.
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:7722/tasks')
      const data = await res.json()
      console.log(data);
    }

    fetchTasks();
    //clean up to wipe the tasks when this component as a whole is unmounted, just for practice recognizing the practical uses of the clean up function :D. Will not be useful in this context as the Task Tracker itself is the application and not apart of some other component.
    return () => {
      setTasks([]);
    }
  }, [])



  //Add Task, accepts an object, which we pass as an object literal with our states(the current form inputs) as props.
  function handleAdd(task) {
    const id = tasks.length + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask]);
  }

  //Delete Task
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder, depending on which task was clicked, will set the task object to its current properties while overriding the reminder to be the opposite of what it currently is, which we will check the current reminder value and apply a class if it is true.
  function handleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onShowAddForm={() => setShowingAddForm(!showingAddForm)} showAdd={showingAddForm}/>
      {showingAddForm && <AddTask onAdd={handleAdd} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}onDelete={handleDelete} onReminder={handleReminder}/> : <p>You have no tasks left.</p>}
    </div>
  )
}

export default App
