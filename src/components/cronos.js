import React, { Component, PropTypes } from 'react' ;
import { extractTimeParts } from '../lib/utils';

const Button= (props)=> (
	<div className="handlers">
		<button onClick={ props.onStart }>Start</button>
		<button onClick={ props.onStop }>Stop</button>
	</div>
);

Button.propTypes = {
	onStart: React.PropTypes.func,
	onStop: React.PropTypes.func
}

const Screen= (props) => (
	<div className="display">
		<span className="min">{props.minutes}:</span>
		<span className="sec">{props.seconds}:</span>
		<span className="msec">{props.milliseconds}</span>
	</div>
)

class Cronos extends Component{
	constructor(){
		super();
		this.state = {
			isRunning:false,
			start: 0,
			current: 0
		}
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
	}
	handleStart(){
		if(this.state.isRunning){
			return
		}
		this.setState({
			isRunning:true,
			start:Date.now(),
			current:Date.now()
		})
		this._interval = setInterval(()=>{
			this.setState({
				current:Date.now()
			})
		}, 100)
	}
	handleStop(){
		if(this.state.isRunning){
			clearInterval(this._interval);
			this.setState({
				isRunning:false,
			})
	}
		//time freeze >> refer to sci-fi
		else{
		//this timewarps to 0 >> refer to sci-fi
			this.setState({
				start: 0,
				current: 0
			})
		}
	}
	render(){
		const {start,current} = this.state
		const {
				minutes,
				seconds,
				milliseconds
			  } = extractTimeParts(current-start)
		return(
			<div className="crono">
				<div className="body">
						<Screen
						minutes = {minutes}
						seconds = {seconds}
						milliseconds = {milliseconds}/>
						<div className="container">
							<div className="handlers">
								<Button onStart={ this.handleStart }
							 			onStop={ this.handleStop } />
							</div>
						</div>
				</div>
			</div>
		)
	}
}
export default Cronos;
