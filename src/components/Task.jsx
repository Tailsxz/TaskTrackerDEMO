import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onReminder }) => {
  return (
    <div className='task' onDoubleClick={() => onReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)}style={{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.function,
  onReminder: PropTypes.function,
}

export default Task
