import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useReducer, useState } from 'react';
import LeaderCard from '../components/LeaderCard';
import LeaderList from '../components/LeaderList';
import { GlobalContext } from './_app';

const reducer = (prevLeaders, action) => {
	switch (action.type) {
		case 'ADD_LEADER':
			return [...prevLeaders, action.leader];
		case 'REMOVE_LEADER':
			return prevLeaders.filter((leader) => leader !== action.leader);
		default:
			return prevLeaders;
	}
};

const baseGameCivs = [
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
const riseAndFallCivs = ['Cree', 'Netherlands', 'Georgia', 'Korea', 'Mapuche', 'Mongolia', 'Scotland', 'Zulu'];
const gatheringStormCivs = ['Canada', 'Hungary', 'Inca', 'Mali', 'Māori', 'Ottomans', 'Phonecia', 'Sweden'];
const newFrontierCivs = ['Maya', 'Gran Colombia', 'Ethiopia', 'Byzantium', 'Gaul', 'Babylon', 'Vietnam', /*kublai khan*/ 'Portugal'];

const Index = () => {
	const [disabledLeaders, dispatchLeader] = useReducer(reducer, []);
	const [leaders, setLeaders] = useState([]);
	const [selectedLeader, setSelectedLeader] = useState(null);
	const [baseGameEnabled, setBaseGameEnabled] = useState(true);
	const [riseAndFallEnabled, setRiseAndFallEnabled] = useState(true);
	const [gatheringStormEnabled, setGatheringStormEnabled] = useState(true);
	const [newFrontierEnabled, setNewFrontierEnabled] = useState(true);

	useEffect(() => {
		axios('/api').then((res) => {
			setLeaders(res.data);
		});
	}, []);

	return (
		<GlobalContext.Provider value={{ dispatchLeader, disabledLeaders }}>
			<h1>Civ Randomizer</h1>
			<Head>
				<title>Civ Randomizer</title>
			</Head>
			<button
				id="randomize-button"
				onClick={() => {
					const availableLeaders = leaders.filter((leader) => !disabledLeaders.includes(leader));
					if (availableLeaders.length !== 0) {
						const idx = Math.floor(availableLeaders.length * Math.random());
						axios(`/api?leader=${availableLeaders[idx].name}`).then((res) => {
							const leader = res.data;
							setSelectedLeader(leader);
							dispatchLeader({
								type: 'ADD_LEADER',
								leader: leader.name
							});
						});
					}
				}}>
				Randomize!
			</button>
			<div id="toolbar">
				<span>
					<img src="/images/icon/general/BG.png" alt="Base Game Civs" />
					<label className={baseGameEnabled ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setBaseGameEnabled(!baseGameEnabled);
								baseGameCivs.forEach((leader) => dispatchLeader({ type: baseGameEnabled ? 'ADD_LEADER' : 'REMOVE_LEADER', leader }));
							}}
							checked={baseGameEnabled}
						/>
						<span></span>
					</label>
				</span>
				<span>
					<img src="/images/icon/general/R&F.png" alt="Rise &amp; Fall Civs" />
					<label className={riseAndFallEnabled ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setRiseAndFallEnabled(!riseAndFallEnabled);
								riseAndFallCivs.forEach((leader) => dispatchLeader({ type: riseAndFallEnabled ? 'ADD_LEADER' : 'REMOVE_LEADER', leader }));
							}}
							checked={riseAndFallEnabled}
						/>
						<span></span>
					</label>
				</span>
				<span>
					<img src="/images/icon/general/GS.png" alt="Gathering Storm Civs" />
					<label className={gatheringStormEnabled ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setGatheringStormEnabled(!gatheringStormEnabled);
								gatheringStormCivs.forEach((leader) => dispatchLeader({ type: gatheringStormEnabled ? 'ADD_LEADER' : 'REMOVE_LEADER', leader }));
							}}
							checked={gatheringStormEnabled}
						/>
						<span></span>
					</label>
				</span>
				<span>
					<img src="/images/icon/general/NF.png" alt="New Frontier Pass Civs" />
					<label className={newFrontierEnabled ? 'checked' : ''}>
						<input
							type="checkbox"
							onChange={() => {
								setNewFrontierEnabled(!newFrontierEnabled);
								newFrontierCivs.forEach((leader) => dispatchLeader({ type: newFrontierEnabled ? 'ADD_LEADER' : 'REMOVE_LEADER', leader }));
							}}
							checked={newFrontierEnabled}
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
					<LeaderList leaders={leaders} />
				</div>
				<div id="chosen-civ">{selectedLeader && <LeaderCard leader={selectedLeader} />}</div>
			</div>
		</GlobalContext.Provider>
	);
};

export default Index;
