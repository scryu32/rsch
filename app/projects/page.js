import Link from "next/link";

export default function Projects(){
    return (
        <div className="container">
            <Link href="/projects/chatting">
                <div className="card projectcard">
                    <h4>호두 인공지능 챗봇</h4>
                    <img src="../HuTao/HuTao_emoji1.png"></img>
                    <p>첫번째 프로젝트, 인공지능 챗봇입니다.<br/> 
                    가상의 게임 캐릭터의 성격을 가진 챗봇입니다.
                    </p>
                </div>
            </Link>
        </div>
    )
}