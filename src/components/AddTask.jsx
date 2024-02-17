import PropTypes from 'prop-types'
import { useState } from 'react'
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('');

  function onSubmit(e){
    e.preventDefault()

    if(!text) {
      alert('Task content is required...');
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" id="task" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="dateTime">Day & Time</label>
        <input type="text" id="dateTime" placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" id="reminder" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}

AddTask.propTypes = {
  onAdd: PropTypes.func
}

export default AddTask
