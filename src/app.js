require("../dist/index.scss");

import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/counter';
import Salutations from './components/salutations';
import Cronos from './components/cronos';
import Searchengine from './components/gotcomponents';


var username = {
	name: 'Mortimer',
	secondname: 'Jarasemy'
}

ReactDom.render(<Salutations text='Hello' user={ username }/>, document.getElementById('app'));
ReactDom.render(<Counter/>, document.getElementById('counterdiv'));
ReactDom.render(<Cronos/>, document.getElementById('cronos'));
ReactDom.render(<Searchengine/>, document.getElementById('gotsearchengine'));
