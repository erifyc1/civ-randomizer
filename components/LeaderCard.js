import React from 'react';
import iconify from '../utils/iconify';

const LeaderCard = (props) => {
	return (
		<>
			<div className="outer">
				<div>
					<h2>{props.leader.civilization}</h2>
					<img src={`/images/civilization/${props.leader.civilization}.png`} alt={props.leader.civilization + ' icon'} />
				</div>
				<div>
					<h2>{props.leader.name}</h2>
					<img src={`/images/leader/${props.leader.name}.png`} alt={props.leader.name} />
				</div>
			</div>
			{props.leader.abilities.map((ability) => (
				<>
					<h3>{ability.name}</h3>
					<p>{iconify(ability.description)}</p>
				</>
			))}
			{props.leader.infrastructure.map((inf, i) => (
				<React.Fragment key={i}>
					<h3>
						{inf.name} {inf.replaces === null ? (inf.district === null ? '(Unique Improvement)' : '(Unique Building)') : `(Replaces ${inf.replaces})`}
					</h3>
					{inf.production && (
						<span>
							<h4>Production Cost:</h4> {iconify(inf.production)}
						</span>
					)}
					<ul>
						{inf.effects.map((effect, i) => (
							<li key={i}>{iconify(effect)}</li>
						))}
					</ul>
				</React.Fragment>
			))}
			{props.leader.units.map((unit, i) => (
				<React.Fragment key={i}>
					<h3>
						{unit.name} {unit.replaces === null ? '(Unique Unit)' : `(Replaces ${unit.replaces})`}
					</h3>
					<span>
						<h4>Strength:</h4> {iconify(unit.strength)}
					</span>
					<span>
						<h4>Movement:</h4> {iconify(unit.movement)}
					</span>
					{unit.ranged && (
						<span>
							<h4>Ranged:</h4> {iconify(unit.ranged)}
						</span>
					)}
					<span>
						<h4>Production Cost:</h4> {iconify(unit.production)}
					</span>
					<ul>
						{unit.special.map((special, i) => (
							<li key={i}>{iconify(special)}</li>
						))}
					</ul>
				</React.Fragment>
			))}
		</>
	);
};

export default LeaderCard;
