import React from 'react';
import LeaderPreview from './LeaderPreview';

const LeaderList = (props) => {
	return (
		<ul id="civ-list">
			{props.civs.map((civ, i) => (
				<LeaderPreview key={i} civ={civ} />
			))}
		</ul>
	);
};

export default LeaderList;
