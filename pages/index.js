import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useReducer, useState } from 'react';
import CivCard from '../components/CivCard';
import CivList from '../components/CivList';
import { GlobalContext } from './_app';

const reducer = (prevState, action) => {
	switch (action.type) {
		case 'ADD_CIV':
			return [...prevState, action.civ];
		case 'REMOVE_CIV':
			return prevState.filter((civ) => civ !== action.civ);
		default:
			return prevState;
	}
};

const bgCivs = [
	'America',
	'Arabia',
	'Australia',
	'Aztec',
	'Brazil',
	'China',
	'Egypt',
	'England',
	'France',
	'Germany',
	'Greece',
	'India',
	'Indonesia',
	'Japan',
	'Khmer',
	'Kongo',
	'Macedon',
	'Norway',
	'Nubia',
	'Persia',
	'Poland',
	'Rome',
	'Russia',
	'Scythia',
	'Spain',
	'Sumeria'
];
const rnfCivs = ['Cree', 'Netherlands', 'Georgia', 'Korea', 'Mapuche', 'Mongolia', 'Scotland', 'Zulu'];
const gsCivs = ['Canada', 'Hungary', 'Inca', 'Mali', 'Māori', 'Ottomans', 'Phonecia', 'Sweden'];

const Index = () => {
	const [disabledCivs, dispatchCiv] = useReducer(reducer, []);
	const [civs, setCivs] = useState([]);
	const [selectedCiv, setSelectedCiv] = useState(null);
	const [bg, setBg] = useState(true);
	const [rnf, setRnf] = useState(true);
	const [gs, setGs] = useState(true);

	useEffect(() => {
		axios('/api').then((res) => {
			setCivs(res.data);
		});
	}, []);

	return (
		<GlobalContext.Provider value={{ dispatchCiv, disabledCivs }}>
			<h1>Civ Randomizer</h1>
			<Head>
				<title>Civ Randomizer</title>
			</Head>
			<button
				id="randomize-button"
				onClick={() => {
					const availableCivs = civs.filter((civ) => !disabledCivs.includes(civ.name));
					if (availableCivs.length !== 0) {
						const idx = Math.floor(availableCivs.length * Math.random());
						axios(`/api?civ=${availableCivs[idx].name}`).then((res) => {
							const civ = res.data;
							civ.leader = civ.leader[Math.floor(Math.random() * civ.leader.length)];
							setSelectedCiv(civ);
							dispatchCiv({
								type: 'ADD_CIV',
								civ: civ.name
							});
						});
					}
				}}>
				Randomize!
			</button>
			<div id="toolbar">
				<span>
					<img
						src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/46/9b/df/469bdfbc-8c91-9c6f-5782-21cf38850a94/App.png/1200x630bb.png"
						alt="Base Game Civs"
					/>
					<label className={bg ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setBg(!bg);
								bgCivs.forEach((civ) => dispatchCiv({ type: bg ? 'ADD_CIV' : 'REMOVE_CIV', civ }));
							}}
							checked={bg}
						/>
						<span></span>
					</label>
				</span>
				<span>
					<img src="https://vignette.wikia.nocookie.net/civilization/images/d/d0/R%26F-Only.png/" alt="Rise &amp; Fall Civs" />
					<label className={rnf ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setRnf(!rnf);
								rnfCivs.forEach((civ) => dispatchCiv({ type: rnf ? 'ADD_CIV' : 'REMOVE_CIV', civ }));
							}}
							checked={rnf}
						/>
						<span></span>
					</label>
				</span>
				<span>
					<img src="https://vignette.wikia.nocookie.net/civilization/images/9/96/GS-Only.png/" alt="Gathering Storm Civs" />
					<label className={gs ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setGs(!gs);
								gsCivs.forEach((civ) => dispatchCiv({ type: gs ? 'ADD_CIV' : 'REMOVE_CIV', civ }));
							}}
							checked={gs}
						/>
						<span></span>
					</label>
				</span>
			</div>
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

export default Index;
