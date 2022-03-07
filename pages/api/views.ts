import { connectToDatabase } from "../../utils/mongodb";

const handler = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const { page } = req.body;

    await db.collection("views").updateOne({ page }, { $inc: { views: 1 } });

    res.status(201).end();
  } catch (err) {
    res.status(400).json(err);
  }
};

export default handler;
