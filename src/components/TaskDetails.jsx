import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Button from './Button'

// So traversy was saying that in the v5 Router, there was a thing called redirect, which has been directly replaced with navigate, so that's what we will be bringing in and learning to use! Theres also a useNavigate hook! let's learn it!

function TaskDetails() {
  const [status, setStatus] = useState('idle');
  const [task, setTask] = useState({})

  //useParams returns a params object which has properties being the parameters of the specified url, which we defined in our routes for the taskdetails as /tasks/:id so we can access the params of id with params.id, this is new with v6 Router!!! Before we had to use match? Which we shouldnt worry about learning, but if we run into a legacy codebase using it we will know it exists and what it is used for! :D
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //So here, since this useEffect is calling our fetch, we want to set the status to pending to rerender and show the loading state AFTER executing this entire callback. This means that the fetch will initiate, and we will rerender showing the loading state, the fetchTask function will pause execution of our async function until the fetch has been successful, this is why during the loading state our application is still responsive, because it is not being blocked! The fetchTask async function will resume execution once we recieved the fetched data, in which we either set the status state to error or success, which will trigger another rerender! Beautiful!! Since we only want the fetch to initial on the initial render of this TaskDetails component, we can set an empty dependency array, otherwise it will initiate the fetch the same task each single render. I am getting linted though as eslint react hooks is recognizing my fetch depends on params.id which it thinks is a state.
    setStatus('pending');
    const fetchTask = async () => {
    const res = await fetch(`http://localhost:7722/tasks/${params.id}`);
    if (res.status === 404) {
      setStatus('ENOENT');
      return
    }

    const data = await res.json();


    setTask(data)
    setStatus('success');
    }
    
    fetchTask();
  }, [])

  if (status === 'ENOENT') {
    // return <Navigate to='/' />
    //the navigate hook returns a function, it accepts either the string route or a number corresponding to the number of pages we wish to navigate the user back to. So in this use case there is an edge case, if the user randomly decides to enter a random task into the url from here it navigates back to the previous task details they were on instead of the home page. Also, if the user randomly went to this taskdetails page there is nothing to navigate back to, so lets explicitly navigate back to home.
    // navigate(-2)
    navigate('/');
  }

  if (status === 'pending') {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button onClick={() => navigate(-1)} text='Go Back'/>
    </div>
  )
}

export default TaskDetails