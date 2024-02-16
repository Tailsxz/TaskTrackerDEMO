import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map(e => <Task key={e.id} task={e} onDelete={onDelete}/>)}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.function,
}

export default Tasks
