import React, { useContext } from 'react';
import { GlobalContext } from '../pages/_app';

const CivPreview = (props) => {
	const context = useContext(GlobalContext);

	return (
		<li
			className={'civ' + (context.disabledCivs.includes(props.civ.name) ? ' disabled' : '')}
			onClick={() => {
				context.dispatchCiv({
					civ: props.civ.name,
					type: context.disabledCivs.includes(props.civ.name) ? 'REMOVE_CIV' : 'ADD_CIV'
				});
			}}>
			<img src={props.civ.icon} alt={props.civ.name + ' icon'} />
			<div>
				<h3>{props.civ.name}</h3>
				{context.disabledCivs.includes(props.civ.name) && <p>Disabled</p>}
			</div>
		</li>
	);
};

export default CivPreview;
