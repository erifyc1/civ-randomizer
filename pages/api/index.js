import { MongoClient } from 'mongodb';

export default async (req, res) => {
	try {
		const client = await MongoClient.connect(process.env.MONGODB_URL);
		const db = client.db('civ');

		res.setHeader('Access-Control-Allow-Origin', '*');
		if (req.query.leader) {
			res.status(200).json(await db.collection('civs').findOne({ name: req.query.leader }));
		} else {
			res.status(200).json(
				(await db.collection('civs').find({}).toArray()).map((leader) => leader.name).sort((leader1, leader2) => leader1.localeCompare(leader2))
			);
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
};
