import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');

    let dateIndex = `${year}-${month}-${day}`;

    let session = await getServerSession(req, res, authOptions)
    if (session) {
        req.body.author = session.user.email
        req.body.Date = dateIndex
        if (req.method == 'POST'){
            if (req.body.title == ''){
                return res.status(500).json('제목써라');
            } else if (req.body.content == ''){
                return res.status(500).json('글써라');
            }
            try {
                const db = (await connectDB).db("forum");
                let result = await db.collection('post').insertOne(req.body);
                return res.status(200).redirect('/comments');
            } catch (error) {
                return res.status(500).json('서버오류다');
            }
        }
    } else {
        return res.status(500).json('로그인해라')
    }
}

