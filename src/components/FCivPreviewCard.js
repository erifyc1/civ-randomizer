import React, { useState } from 'react';

const FCivPreviewCard = (props) => {
	const [revealed, setRevealed] = useState(false);
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div onClick={() => setRevealed(!revealed)}>
				<h1>{props.civ}</h1>
				<p>{props.description}</p>
				{revealed && <p>{props.secondaryDescription}</p>}
			</div>
			<button onClick={() => setCounter(counter + 1)}>{counter} Clicks</button>
		</>
	);
};

export default FCivPreviewCard;
