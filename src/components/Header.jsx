import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title = '', onShowAddForm }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add Task' onClick={onShowAddForm}/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  onShowAddForm: PropTypes.func,
}

export default Header