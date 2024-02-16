import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map(e => <Task key={e.id} task={e}/>)}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array
}

export default Tasks
