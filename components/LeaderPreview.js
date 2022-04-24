import React, { useContext } from 'react';
import { GlobalContext } from '../pages/_app';

const LeaderPreview = (props) => {
	const context = useContext(GlobalContext);
	const disabled = context.disabledLeaders.includes(props.leader);

	return (
		<li className={'civ' + (disabled ? ' disabled' : '')}>
			<img src={`/images/leader/${props.leader.replaceAll(' ', '_')}.png`} alt={props.leader + ' icon'} />
			<div>
				<h3 className={disabled ? 'disabled' : ''}>{props.leader}</h3>
				<button
					className={(disabled ? 'enable' : 'disable') + '-btn'}
					onClick={() => {
						context.dispatchLeader({
							leader: props.leader,
							type: disabled ? 'REMOVE_LEADER' : 'ADD_LEADER'
						});
					}}>
					{disabled ? 'Enable' : 'Disable'}
				</button>
			</div>
		</li>
	);
};

export default LeaderPreview;
