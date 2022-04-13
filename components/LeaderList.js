import React from 'react';
import LeaderPreview from './LeaderPreview';

const LeaderList = (props) => {
	return (
		<ul id="civ-list">
			{props.leaders.map((leader, i) => (
				<LeaderPreview key={i} leader={leader} />
			))}
		</ul>
	);
};

export default LeaderList;
