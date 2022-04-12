import React from 'react';

const urls = {
	// yield
	science: '/images/icon/yield/Science.png',
	culture: '/images/icon/yield/Culture.png',
	gold: '/images/icon/yield/Gold.png',
	faith: '/images/icon/yield/Faith.png',
	production: '/images/icon/yield/Production.png',
	food: '/images/icon/yield/Food.png',

	// mechanic
	housing: '/images/icon/mechanic/Housing.png',
	amenity: '/images/icon/mechanic/Amenities.png',
	amenities: '/images/icon/mechanic/Amenities.png',
	movement: '/images/icon/mechanic/Movement.png',
	tourism: '/images/icon/mechanic/Tourism.png',
	trader: '/images/icon/mechanic/TradeRoute.png',
	'trade route': '/images/icon/mechanic/TradeRoute.png',
	'diplomatic visibility': '/images/icon/mechanic/DiplomaticVisibility.png',
	gossip: '/images/icon/mechanic/Gossip.png',
	'trading post': '/images/icon/mechanic/Trading_Post.png',
	population: '/images/icon/mechanic/Population.png',
	'diplomatic favor': '/images/icon/mechanic/Diplomatic_Favor.png',
	eureka: '/images/icon/mechanic/Eureka.png',
	inspiration: '/images/icon/mechanic/Inspiration.png',
	envoy: '/images/icon/mechanic/Envoy.png',
	power: '/images/icon/mechanic/Power.png',
	sight: '/images/icon/mechanic/Sight.png',

	// combat
	'combat strength': '/images/icon/combat/Combat_Strength.png',
	'ranged strength': '/images/icon/combat/Ranged_Strength.png',
	'bombard strength': '/images/icon/combat/Bombard_Strength.png',
	'anti-air strength': '/images/icon/combat/Anti-Air_Strength.png',
	'religious strength': '/images/icon/combat/Religious_Strength.png',
	range: '/images/icon/combat/Range.png',
	promotion: '/images/icon/combat/Promotion.png', 

	// great works
	relic: '/images/icon/great_works/Relic.png',
	sculpture: '/images/icon/great_works/Sculpture.png',
	portrait: '/images/icon/great_works/Portrait.png',
	artifact: '/images/icon/great_works/Artifact_Ancient.png',
	'classical artifact': '/images/icon/great_works/Artifact_Classical.png',
	'medieval artifact': '/images/icon/great_works/Artifact_Medieval.png',
	'renaissance artifact': '/images/icon/great_works/Artifact_Renaissance.png',
	'industrial artifact': '/images/icon/great_works/Artifact_Industrial.png',

	// strategic
	horses: '/images/icon/strategic/Horses.png',
	iron: '/images/icon/strategic/Iron.png',
	niter: '/images/icon/strategic/Niter.png',
	coal: '/images/icon/strategic/Coal.png',
	oil: '/images/icon/strategic/Oil.png',
	aluminum: '/images/icon/strategic/Aluminum.png',
	uranium: '/images/icon/strategic/Uranium.png',

	// great people
	'great general': '/images/icon/great_people/General.png',
	'great admiral': '/images/icon/great_people/Admiral.png',
	'great engineer': '/images/icon/great_people/Engineer.png',
	'great writer': '/images/icon/great_people/Writer.png',
	'great musician': '/images/icon/great_people/Musician.png',
	'great scientist': '/images/icon/great_people/Scientist.png',
	'great prophet': '/images/icon/great_people/Prophet.png',
	'great artist': '/images/icon/great_people/Artist.png',
	'great merchant': '/images/icon/great_people/Merchant.png',

	// district
	campus: '/images/icon/district/Campus.png',
	canal: '/images/icon/district/Canal.png',
	dam: '/images/icon/district/Dam.png',
	'holy site': '/images/icon/district/Holy_Site.png',
	'theater square': '/images/icon/district/Theater_Square.png',
	encampment: '/images/icon/district/Encampment.png',
	harbor: '/images/icon/district/Harbor.png',
	'commercial hub': '/images/icon/district/Commercial_Hub.png',
	'industrial zone': '/images/icon/district/Industrial_Zone.png',
	'entertainment complex': '/images/icon/district/Entertainment_Complex.png',
	'water park': '/images/icon/district/Water_Park.png',
	aqueduct: '/images/icon/district/Aqueduct.png',
	neighborhood: '/images/icon/district/Neighborhood.png',
	aerodrome: '/images/icon/district/Aerodrome.png',
	spaceport: '/images/icon/district/Spaceport.png',
	'government plaza': '/images/icon/district/Government_Plaza.png'
};

/**
 * @param {string} text
 */
export default function iconify(text) {
	const tokens = [];
	let str = text;

	while (str.match(/<[\w\s]+>/)) {
		const match = str.match(/<[\w\s]+>/);
		const idx = match.index;
		tokens.push(str.slice(0, idx));
		const repl = str.slice(idx, idx + match[0].length).slice(1, -1);
		tokens.push(<img src={urls[repl.toLowerCase()]} alt={repl} />);
		str = str.slice(idx + match[0].length);
	}
	tokens.push(str);

	return tokens;
}
