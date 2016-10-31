import React, { Component } from 'react';

var buttonStyle = {
	borderRadius:'3px',
	height: '30px',
	width:'120px',
	border:'none'
}

class Counter extends Component {
	constructor(){
		super();
		this.state = {
			clicks: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			clicks: this.state.clicks +1
		})
	}

render(){
		return(
		<button style={buttonStyle} onClick={this.handleClick} > { this.state.clicks } </button>
		);
	}
}

export default Counter;
