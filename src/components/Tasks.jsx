import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map(e => <Task key={e.id} task={e} onDelete={onDelete} onReminder={onReminder}/>)}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onReminder: PropTypes.func,
}

export default Tasks
