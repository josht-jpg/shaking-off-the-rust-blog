import { connectToDatabase } from "../../utils/mongodb";

const handler = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const { address } = req.body;

    await db.collection("subscribers").insertOne({ address });

    res.status(201).end();
  } catch (err) {
    res.status(400).json(err);
  }
};

export default handler;
