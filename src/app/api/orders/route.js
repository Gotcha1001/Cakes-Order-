import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { isAdmin } from "@/utils/auth";
import { UserInfo } from "@/app/models/UserInfo";
import { Order } from "@/app/models/Order";
import { authOptions } from "@/utils/authOptions";

export async function GET(req) {
  mongoose.connect(process.env.MONGODB_URL);
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (_id) {
    return Response.json(await Order.findById(_id));
  }

  if (admin) {
    return Response.json(await Order.find());
  }
  if (userEmail) {
    return Response.json(await Order.find({ userEmail }));
  }
}
