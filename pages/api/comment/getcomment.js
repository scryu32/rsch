import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(call, answ){

    let cont_id = JSON.parse(call.query.id)._id;

    
    const db = (await connectDB).db("forum");
    const result = await db.collection('comments').find({ parent : cont_id }).toArray();
    answ.status(200).json(result);

    
}
