import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h1>v 1.0.0</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

About.propTypes = {
}

export default About