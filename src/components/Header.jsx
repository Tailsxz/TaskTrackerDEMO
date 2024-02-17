import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title = '', onShowAddForm, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close Form' : 'Add Form'} onClick={onShowAddForm}/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  onShowAddForm: PropTypes.func,
  showAdd: PropTypes.boolean,
}

export default Header