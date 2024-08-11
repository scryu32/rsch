import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DeleteButton from "./Deletebutton";

export default async function Detail(props){

    const session = await getServerSession(authOptions);

    const db = (await connectDB).db("forum");
    const id = props.params.id;
    const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)});
    const simpleData = {
        _id: result._id.toString(), 
        title: result.title,
        content: result.content,
        author: result.author,
    };


    return (
        <div>
            <div className="detail-container-box">
                <h4>{result.title}</h4>
                <p>{result.content}</p>
                <p>작성자: {result.author}</p>
                <DeleteButton result={simpleData}></DeleteButton>
            </div>
        </div>
    )
}