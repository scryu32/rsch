import { connectDB } from "@/util/database"
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Comments() {

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().sort({ _id: -1 }).toArray();

    return (
      <div className="list-bg">
        <div>
            {
            result.map((a,i)=>{
                return (
                <div key={i} className="contianer-commmm">
                    <Link prefetch={false} href={`comments/${result[i]._id}`} key={i} className="content-links">  
                    <div className="list-item">
                        <h4>{result[i].title}</h4>
                        <p>{result[i].Date}</p>
                    </div>
                    </Link>
                </div>
                )
            })
            }
        </div>
        <Link href={'comments/write'}>
            <div className="Write-btn">
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
        </Link>
      </div>
    )
  } 