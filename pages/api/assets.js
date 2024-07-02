import dbConnect from '../../lib/dbConnect';
import Asset from '../../models/Asset';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const assets = await Asset.find({});  // Fetch all assets from the database
      res.status(200).json(assets);
    } catch (error) {
      res.status(500).json({ error: error.message });  // Handle any errors during fetch
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });  // Handle incorrect request methods
  }
}
