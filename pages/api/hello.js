// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../utils/db";
import nc from "next-connect";

import { data } from "../../utils/data";
import User from "../../models/User";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
