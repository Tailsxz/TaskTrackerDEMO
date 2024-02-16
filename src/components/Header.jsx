import PropTypes from 'prop-types'
const Header = ({ name = 'Bob' }) => {
  return (
    <header>
      <h1>Hello {name}, from Vite</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header;