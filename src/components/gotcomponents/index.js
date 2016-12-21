import React, { Component,PropTypes } from 'react';
import Title from './title';
import Results from './results';
import Data from '../data/got';
import Form from './form';

function search(filter, characters){
	if(filterEmpty(filter)) {
		return characters;
	}

	return characters.filter(char => {
		let fName = filter.name.toUpperCase();
		let name = char.name.toUpperCase();
		let actor = char.actor.toUpperCase();
		return (
				//name
				(name.indexOf(fName) !== -1 || actor.indexOf(fName) !== -1) &&
				//family
				(!filter.family || char.family === filter.family) &&
				(filter.seasons.some(x=> char.seasons.indexOf(x) !== -1)) &&
				//alive
				(!filter.onlyAlive || char.alive)
			);
	});
}

function filterEmpty(filter) {
	return !Object.keys(filter).some(prop => {
		return filter[prop] !== "";
	})
}

function extractFamilyNames(characters){
	return characters.reduce((acc,c)=> {
		if(acc.indexOf(c.family) === -1){
			acc.push(c.family);
		}
		return acc;
	},[]).sort();
}
function extractSeasons(characters){
	return characters.reduce((acc,c)=> {
		c.seasons.forEach(n=>{
			if(acc.indexOf(n) === -1){
				acc.push(n);}
		})
		return acc;
	},[]);
}

class Searchengine extends Component{
	constructor(){
		super();
		this.state = {
			characters: Data.characters,
			familyNames: extractFamilyNames(Data.characters),
			allSeasons: extractSeasons(Data.characters),
			filter: {
				name:'',
				family:'',
				seasons:[],
				onlyAlive: false
			}
		};
		this.handleQueryChange = this.handleQueryChange.bind(this);
	}

	handleQueryChange(change){
		const newFilter = Object.assign({}, this.state.filter, change);
		this.setState({
			filter: newFilter
		});
	}

	render(){
		const filter = this.props.filter;
		const characters = search(this.state.filter, this.state.characters);

		return(
			<div className="formcontainer">
				<div className="search-engine">
					<Title text='Got Search'/>
					<Form
					familyNames={ this.state.familyNames }
					allSeasons={ this.state.allSeasons }
					filter={ this.state.filter }
					onQueryChange={ this.handleQueryChange }/>
			    </div>
				<Results items={ characters }/>
			</div>
		)
	}
}

export default Searchengine;
