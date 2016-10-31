import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/counter';
import Salutations from './components/salutations';
import Cronos from './components/cronos';

var username = {
	name: 'Remington',
	secondname: 'Smise'
}

ReactDom.render(<Salutations text='Hello' user={ username }/>, document.getElementById('app'));
ReactDom.render(<Counter/>, document.getElementById('counterdiv'));
ReactDom.render(<Cronos/>, document.getElementById('cronos'));
