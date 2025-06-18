import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // conditional className based on reverse prop
  // if reverse is true, add 'reverse' class
  // return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>)

  // conditional inline styles based on reverse prop
  // if reverse is true, set backgroundColor to 'rgba(0,0,0,0.4)' and color to '#fff'
  return <div className='card' style={{
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  }}>{ children }</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card