import React, { useContext, useReducer } from 'react';
import { GlobalContext } from '../App';

const reducer = (prevState) => !prevState;

const CivPreview = (props) => {
	const [disabled, toggleDisabled] = useReducer(reducer, false);
	const context = useContext(GlobalContext);

	return (
		<li
			className={'civ' + (disabled ? ' disabled' : '')}
			onClick={() => {
				toggleDisabled();
				context.dispatchCiv(props.civ.name);
			}}>
			<img src={props.civ.icon} alt={props.civ.name + ' icon'} />
			<div>
				<h3>{props.civ.name}</h3>
				{disabled && <p>Disabled</p>}
			</div>
		</li>
	);
};

export default CivPreview;
