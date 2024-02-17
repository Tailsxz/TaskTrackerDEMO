import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'

const App = () => {
  //Remember, any useStates and hooks in general should be at the top of your functional component!!!
  const [showingAddForm, setShowingAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    //Setting up our fetch function for the tasks stored in db.json, passing in an empty dependency array as we only need this to run once on the initial mount/render.
    const getTasks = async () => {
      try {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
      setStatus('success');
      } catch (err) {
        console.error(err);
        setStatus('failed');
      }
    }
    getTasks();
    //clean up to wipe the tasks when this component as a whole is unmounted, just for practice recognizing the practical uses of the clean up function :D. Will not be useful in this context as the Task Tracker itself is the application and not apart of some other component.
    return () => {
      setTasks([]);
    }//maybe we should add tasks to dependency arrow so when we add/delete we can update the task list on the server by sending the fetch but also update the UI dynamically without a full page refresh/refetching from server. Wait that would force the refetch so we should keep it empty then.
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:7722/tasks');
    const data = await res.json();
    setStatus('pending');
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:7722/tasks/${id}`);
    const data = await res.json();
    setStatus('pending');
    return data;
  }



  //Add Task, accepts an object, which we pass as an object literal with our states(the current form inputs) as props.
  async function handleAdd(task) {
    // const id = tasks.length + 1
    // const newTask = {id,...task}
    // setTasks([...tasks, newTask]);
    const res = await fetch('http://localhost:7722/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json();
    //so our POST request to json-server when succesful, the response sent back is the object we added itself. So here we just simply append it to the current tasks to reflect the changes in the UI. Found this out by logging the data variable, what I don't like is that it is creating a random id for our data which doesn't align with the numeric incremented id system we've been using for tasks.
    setTasks([...tasks, data]);
  }

  //Delete Task
  async function handleDelete(id) {
    await fetch(`http://localhost:7722/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder, depending on which task was clicked, will set the task object to its current properties while overriding the reminder to be the opposite of what it currently is, which we will check the current reminder value and apply a class if it is true. 
  //Now to refactor into a PUT request!
  async function handleReminder(id) {
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:7722/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json();
    console.log(data);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title='Task Tracker' onShowAddForm={() => setShowingAddForm(!showingAddForm)} showAdd={showingAddForm}/>
        {showingAddForm && <AddTask onAdd={handleAdd} />}
        <Routes>
          <Route path='/' element={
            <>
              {/* not a part of tutorial, but we added a status state to only show you have no tasks left AFTER the successful fetch. This ensures that the paragraph doesn't show that initially when the status is idle. But now we have access to more robust fetch error handling */}
              {tasks.length > 0 ? <Tasks tasks={tasks}onDelete={handleDelete} onReminder={handleReminder}/> : status === 'success' && <p>You have no tasks left</p>}
            </>}>
          </Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
