import PropTypes from 'prop-types';

function Header({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95'
}) {
	const headerStyle = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyle}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

// 邏輯運算寫法
// function Header(props) {
//   const text = props.text || 'Feedback UI';
//   const bgColor = props.bgColor || 'rgba(0,0,0,0.4)';
//   const textColor = props.textColor || '#ff6a95';

//   const headerStyle = {
//     backgroundColor: bgColor,
//     color: textColor,
//   };

//   return (
//     <header style={headerStyle}>
//       <div className='container'>
//         <h2>{text}</h2>
//       </div>
//     </header>
//   );
// }


// React v18 以前的寫法
// Header.defaultProps = {
// 	text: 'Feedback UI',
// 	bgColor: 'rgba(0,0,0,0.4)',
// 	textColor: '#ff6a95',
// };

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}


export default Header