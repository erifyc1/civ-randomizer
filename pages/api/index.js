import { MongoClient } from 'mongodb';

export default async (req, res) => {
	try {
		const client = await MongoClient.connect(process.env.MONGODB_URL);
		const db = client.db('civ');

		res.setHeader('Access-Control-Allow-Origin', '*');
		if (req.query.civ) {
			res.status(200).json(await db.collection('civs').findOne({ name: req.query.civ }));
		} else {
			res.status(200).json(
				(await db.collection('civs').find({}).toArray())
					.map((civ) => ({ name: civ.name, icon: civ.icon }))
					.sort((civ1, civ2) => civ1.name.localeCompare(civ2.name))
			);
		}
	} catch (err) {
		console.log(err);
		res.status(500).send('Error');
	}
};
