import React from 'react';

const CivCard = (props) => {
	return (
		<>
			<div className="outer">
				<div>
					<h2>{props.civ.name}</h2>
					<img src={props.civ.icon} alt={props.civ.name + ' icon'} />
				</div>
				<div>
					<h2>{props.civ.leader.name}</h2>
					<img src={props.civ.leader.portrait} alt={props.civ.leader.name} />
				</div>
			</div>
			<h3>{props.civ.abilityName}</h3>
			<p>{props.civ.ability}</p>
			<h3>{props.civ.leader.abilityName}</h3>
			<p>{props.civ.leader.ability}</p>
			{props.civ.infrastructure.map((inf, i) => (
				<React.Fragment key={i}>
					<h3>
						{inf.name} {inf.replaces === null ? (inf.district === null ? '(Unique Improvement)' : '(Unique Building)') : `(Replaces ${inf.replaces})`}
					</h3>
					<ul>
						{inf.effects.map((effect, i) => (
							<li key={i}>{effect}</li>
						))}
					</ul>
				</React.Fragment>
			))}
			{props.civ.unit.map((unit, i) => (
				<React.Fragment key={i}>
					<h3>
						{unit.name} {unit.replaces === null ? '(Unique Unit)' : `(Replaces ${unit.replaces})`}
					</h3>
					<ul>
						{unit.special.map((special, i) => (
							<li key={i}>{special}</li>
						))}
					</ul>
				</React.Fragment>
			))}
		</>
	);
};

export default CivCard;
