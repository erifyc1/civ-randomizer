import React from 'react';
import iconify from '../utils/iconify';

const LeaderCard = (props) => {
	return (
		<>
			<div className="outer">
				<div>
					<h2>{props.leader.civilization}</h2>
					<img src={`/images/civilization/${props.leader.civilization.replaceAll(' ', '_')}.png`} alt={props.leader.civilization + ' icon'} />
				</div>
				<div>
					<h2>{props.leader.name}</h2>
					<img src={`/images/leader/${props.leader.name.replaceAll(' ', '_')}.png`} alt={props.leader.name} />
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
					<ul>
						{inf.production && (
							<li>
								<h4>Production Cost:</h4> {iconify(inf.production)}
							</li>
						)}
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
					<ul>
						<li>
							<h4>Combat Strength:</h4> {iconify(unit.strength)}
						</li>
						<li>
							<h4>Movement:</h4> {iconify(unit.movement)}
						</li>
						{unit.ranged && (
							<li>
								<h4>Ranged Strength:</h4> {iconify(unit.rangedStrength)}
							</li>
						)}
						<li>
							<h4>Production Cost:</h4> {iconify(unit.production)}
						</li>
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
