import React from 'react';

const urls = {
	science: 'https://vignette.wikia.nocookie.net/civilization/images/7/79/Civ6Science.png/',
	culture: 'https://vignette.wikia.nocookie.net/civilization/images/2/2a/Civ6Culture.png/',
	gold: 'https://vignette.wikia.nocookie.net/civilization/images/b/bc/Civ6Gold.png/',
	faith: 'https://vignette.wikia.nocookie.net/civilization/images/8/82/Civ6Faith.png/',
	production: 'https://vignette.wikia.nocookie.net/civilization/images/7/74/Civ6Production.png/',
	food: 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Civ6Food.png/',
	housing: 'https://vignette.wikia.nocookie.net/civilization/images/a/ae/Housing6.png/',
	amenity: 'https://vignette.wikia.nocookie.net/civilization/images/6/65/Amenities6.png/',
	movement: 'https://vignette.wikia.nocookie.net/civilization/images/8/89/Civ6Movement.png/',
	tourism: 'https://vignette.wikia.nocookie.net/civilization/images/5/5b/Tourism6.png/',
	'combat strength': 'https://vignette.wikia.nocookie.net/civilization/images/b/b6/Civ6StrengthIcon.png/',
	'ranged strength': 'https://vignette.wikia.nocookie.net/civilization/images/d/da/Civ6RangedStrength.png/',
	'bombard strength': 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Bombard_Strength_%28Civ6%29.png/',
	'anti-air strength': 'https://vignette.wikia.nocookie.net/civilization/images/2/28/Anti-Air_Strength_%28Civ6%29.png/',
	'religious strength': 'https://vignette.wikia.nocookie.net/civilization/images/2/22/ReligiousStrength6.png/',
	range: 'https://vignette.wikia.nocookie.net/civilization/images/9/9e/Civ6Range.png/',
	trader: 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/',
	'trade route': 'https://vignette.wikia.nocookie.net/civilization/images/0/0f/TradeRoute6.png/',
	visibility: 'https://vignette.wikia.nocookie.net/civilization/images/c/ce/DiplomaticVisibility6.png/',
	'trading post': 'https://vignette.wikia.nocookie.net/civilization/images/7/72/Trading_Post_%28Civ6%29.png/',
	population: 'https://vignette.wikia.nocookie.net/civilization/images/f/f8/Citizen6.png/',
	relic: 'https://vignette.wikia.nocookie.net/civilization/images/c/c5/Relic6.png/',
	artifact: 'https://vignette.wikia.nocookie.net/civilization/images/8/87/Artifact6.png/',
	sculpture: 'https://vignette.wikia.nocookie.net/civilization/images/5/56/Sculpture6.png/',
	portrait: 'https://vignette.wikia.nocookie.net/civilization/images/9/99/Portrait6.png/',
	'diplomatic favor': 'https://vignette.wikia.nocookie.net/civilization/images/c/c4/Diplomatic_Favor_%28Civ6%29.png/',
	eureka: 'https://vignette.wikia.nocookie.net/civilization/images/5/52/Eureka6.png/',
	inspiration: 'https://vignette.wikia.nocookie.net/civilization/images/1/13/Inspiration6.png/',
	envoy: 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Envoy6.png/',
	power: 'https://vignette.wikia.nocookie.net/civilization/images/5/59/Power_%28Civ6%29.png/',
	horses: 'https://vignette.wikia.nocookie.net/civilization/images/9/9b/Horses_%28Civ6%29.png/',
	iron: 'https://vignette.wikia.nocookie.net/civilization/images/7/78/Iron_%28Civ6%29.png/',
	niter: 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Niter_%28Civ6%29.png/',
	coal: 'https://vignette.wikia.nocookie.net/civilization/images/d/d8/Coal_%28Civ6%29.png/',
	oil: 'https://vignette.wikia.nocookie.net/civilization/images/d/de/Oil_%28Civ6%29.png/',
	aluminum: 'https://vignette.wikia.nocookie.net/civilization/images/0/06/Aluminum_%28Civ6%29.png/',
	uranium: 'https://vignette.wikia.nocookie.net/civilization/images/a/a5/Uranium_%28Civ6%29.png/',
	'great general': 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/General6.png/',
	'great admiral': 'https://vignette.wikia.nocookie.net/civilization/images/1/1a/Admiral6.png/',
	'great engineer': 'https://vignette.wikia.nocookie.net/civilization/images/8/8b/Engineer6.png/',
	'great writer': 'https://vignette.wikia.nocookie.net/civilization/images/3/3f/Writer6.png/',
	'great musician': 'https://vignette.wikia.nocookie.net/civilization/images/0/00/Musician6.png/',
	'great scientist': 'https://vignette.wikia.nocookie.net/civilization/images/8/84/Scientist6.png/',
	'great prophet': 'https://vignette.wikia.nocookie.net/civilization/images/d/d3/Prophet6.png/',
	'great artist': 'https://vignette.wikia.nocookie.net/civilization/images/7/75/Artist6.png/',
	'great merchant': 'https://vignette.wikia.nocookie.net/civilization/images/4/45/Merchant6.png/',
	campus: 'https://vignette.wikia.nocookie.net/civilization/images/1/18/Campus_%28Civ6%29.png/',
	canal: 'https://vignette.wikia.nocookie.net/civilization/images/f/fd/Canal_%28Civ6%29.png/',
	dam: 'https://vignette.wikia.nocookie.net/civilization/images/5/50/Dam_%28Civ6%29.png/',
	'holy site': 'https://vignette.wikia.nocookie.net/civilization/images/a/a8/Holy_Site_%28Civ6%29.png/',
	'theater square': 'https://vignette.wikia.nocookie.net/civilization/images/4/44/Theater_Square_%28Civ6%29.png/',
	encampment: 'https://vignette.wikia.nocookie.net/civilization/images/2/24/Encampment_%28Civ6%29.png/',
	harbor: 'https://vignette.wikia.nocookie.net/civilization/images/d/df/Harbor_%28Civ6%29.png/',
	'commercial hub': 'https://vignette.wikia.nocookie.net/civilization/images/f/fe/Commercial_Hub_%28Civ6%29.png/',
	'industrial zone': 'https://vignette.wikia.nocookie.net/civilization/images/0/0b/Industrial_Zone_%28Civ6%29.png/',
	'entertainment complex': 'https://vignette.wikia.nocookie.net/civilization/images/c/cb/Entertainment_Complex_%28Civ6%29.png/',
	'water park': 'https://vignette.wikia.nocookie.net/civilization/images/2/2c/Water_Park_%28Civ6%29.png/',
	aqueduct: 'https://vignette.wikia.nocookie.net/civilization/images/f/f9/Aqueduct_%28Civ6%29.png/',
	neighborhood: 'https://vignette.wikia.nocookie.net/civilization/images/3/31/Neighborhood_%28Civ6%29.png/',
	aerodrome: 'https://vignette.wikia.nocookie.net/civilization/images/c/c7/Aerodrome_%28Civ6%29.png/',
	spaceport: 'https://vignette.wikia.nocookie.net/civilization/images/7/7d/Spaceport_%28Civ6%29.png/',
	'government plaza': 'https://vignette.wikia.nocookie.net/civilization/images/b/b3/Government_Plaza_%28Civ6%29.png/'
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
