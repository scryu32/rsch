import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(call, answ){

    let session = await getServerSession(call, answ, authOptions)

    call.body = JSON.parse(call.body)

    let savee = {
        content : call.body.comment,
        parent : call.body._id._id,
        author : session.user.email
    }

    if (session) {
        if (call.method == 'POST'){
            if (savee.content == ""){
                return answ.status(500).json('댓글내용써라');
            }
            try {
                const db = (await connectDB).db("forum");
                let result = await db.collection('comments').insertOne(savee);
                return answ.status(200).redirect('/detail/'+savee.parent);
            } catch (error) {
                return answ.status(500).json('서버오류다');
            }
        }
    } else {
        return answ.status(500).json('로그인해라')
    }
}

