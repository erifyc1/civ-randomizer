import React from 'react';
import './App.css';
import FCivPreviewCard from './components/FCivPreviewCard';

const civs = ['Gayrald Fagdrada', 'Wilfag Laurigay', 'Gilgaymesh', 'Alexander the Gayte', 'Faggy Roosevelt', 'Faghelmina'];

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				{civs.map((civ, i) => (
					<FCivPreviewCard key={i} civ={civ} description="Large Gay" secondaryDescription="Ultra Gay" />
				))}
			</div>
		);
	}
}
