import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(call, answ) {
    if (call.method == 'DELETE'){
        let session = await getServerSession(call, answ, authOptions);
        const body = JSON.parse(call.body);
        const db = (await connectDB).db('forum');
        let find = await db.collection('post').findOne({ _id : new ObjectId(body.result._id) });
        if (session){
          let findadmin = await db.collection('role').findOne({ email : session.user.email });
          if (find.author == session.user.email) {
            let result = await db.collection('post').deleteOne({ _id : new ObjectId(body.result._id) });
            return answ.status(200).json('삭제완료');
          }else if(findadmin) {
            if (findadmin.role == 'admin') {
              let result = await db.collection('post').deleteOne({ _id : new ObjectId(body.result._id) });
              return answ.status(200).json('삭제완료');
            } else {
              return answ.status(500).json('현재유저와 작성자 불일치');
            }
          } else {
            return answ.status(500).json('현재유저와 작성자 불일치');
          }
        } else {
          return answ.status(500).json('로그인하세요');
        }
    }
}