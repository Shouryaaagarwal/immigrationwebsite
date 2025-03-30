import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/backend/db";
import User from "@/models/userModel";

connect()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const user = users.find(user => user.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.status(200).json(user);
}
