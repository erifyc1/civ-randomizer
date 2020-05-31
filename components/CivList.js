import React from 'react';
import CivPreview from './CivPreview';

const CivList = (props) => {
	return (
		<ul id="civ-list">
			{props.civs.map((civ, i) => (
				<CivPreview key={i} civ={civ} />
			))}
		</ul>
	);
};

export default CivList;
