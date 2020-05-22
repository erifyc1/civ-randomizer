import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import CivCard from './components/CivCard';
import CivList from './components/CivList';

const reducer = (prevState, civ) => {
	return prevState.includes(civ) ? prevState.filter((existingCiv) => existingCiv !== civ) : [...prevState, civ];
};

export const GlobalContext = React.createContext();

const App = () => {
	const [disabledCivs, dispatchCiv] = useReducer(reducer, []);
	const [civs, setCivs] = useState([]);
	const [selectedCiv, setSelectedCiv] = useState(null);

	useEffect(() => {
		axios('https://civ-randomizer-backend.herokuapp.com').then((res) => {
			setCivs(res.data);
		});
	}, []);

	return (
		<GlobalContext.Provider value={{ dispatchCiv }}>
			<h1>Civ Randomizer</h1>
			<button
				id="randomize-button"
				onClick={() => {
					const availableCivs = civs.filter((civ) => !disabledCivs.includes(civ));
					const idx = Math.floor(availableCivs.length * Math.random());
					axios(`https://civ-randomizer-backend.herokuapp.com/?civ=${civs[idx].name}`).then((res) => {
						const civ = res.data;
						civ.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];
						setSelectedCiv(civ);
					});
				}}>
				Randomize!
			</button>
			<div id="main">
				<div id="list">
					<div id="civ-list-title">
						<h2>Civ List</h2>
					</div>
					<CivList civs={civs} />
				</div>
				<div id="chosen-civ">{selectedCiv && <CivCard civ={selectedCiv} />}</div>
			</div>
		</GlobalContext.Provider>
	);
};

export default App;
