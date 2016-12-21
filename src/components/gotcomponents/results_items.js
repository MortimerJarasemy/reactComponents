import React,{ PropTypes } from 'react'

const ResultsItem = ({ item }) => {
	return(
		<tr>
		  <td>{ item.name }</td>
		  <td>{ item.actor }</td>
		  <td className="center">{ item.seasons.join(', ') }</td>
		  <td className="center">{ item.alive ? 'yes' : 'no' }</td>
		</tr>
	);
}

export default ResultsItem;
