import PropTypes from 'prop-types'
import { useState } from 'react'
const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('');
  return (
    <form className='add-form'>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder='Add Task' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}

AddTask.propTypes = {
}

export default AddTask
