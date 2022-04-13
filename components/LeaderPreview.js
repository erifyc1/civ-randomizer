import React, { useContext } from 'react';
import { GlobalContext } from '../pages/_app';

const LeaderPreview = (props) => {
	const context = useContext(GlobalContext);

	return (
		<li
			className={'civ' + (context.disabledLeaders.includes(props.leader) ? ' disabled' : '')}
			onClick={() => {
				context.dispatchLeader({
					leader: props.leader,
					type: context.disabledLeaders.includes(props.leader) ? 'REMOVE_LEADER' : 'ADD_LEADER'
				});
			}}>
			<img src={`/images/leader/${props.leader}.png`} alt={props.leader + ' icon'} />
			<div>
				<h3>{props.leader}</h3>
				{context.disabledLeaders.includes(props.leader) && <p>Disabled</p>}
			</div>
		</li>
	);
};

export default LeaderPreview;
