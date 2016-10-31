import React, { Component, PropTypes } from 'react';



var myStyle = {
	color: '#FFA07A',
	backgroundColor: '#fff',
	height: '40px',
	backgroundColor:'#ffffff',
	boxShadow: '0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8',
	borderRadius: '3px',
}


class Salutations extends Component {
	render(){
	const{ text, user } = this.props;
	return(
			// <h1 React Works in hot</h1>
			<div style={myStyle}>
			<div className="textcontainer">
 				{ text },{ user.name + ' ' + user.secondname }			 </div>
 			</div>
		)
	}
}

Salutations.propTypes = {
	text: PropTypes.string,
	user: PropTypes.shape({
		name: PropTypes.string,
		secondname: PropTypes.string
	})
}

export default Salutations;
