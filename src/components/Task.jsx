import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onReminder(task.id)}>
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
      <Link style={{display: 'inline-block'}} to={`/tasks/${task.id}`}><p>Task Details</p></Link>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  onReminder: PropTypes.func,
}

export default Task
