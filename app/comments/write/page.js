export default async function Write() {
    return (
    <div className="posting-box">
        <form action="/api/post/new" method="POST">
            <h4>글 작성</h4>
            <input name="title" placeholder="글제목" autoComplete='off'className="title-input-box"/>
            <textarea name="content" placeholder="글내용" autoComplete='off'className="content-input-box"></textarea>
            <button type="submit" className="submit-box">전송</button>
        </form>
    </div>
    )
} 
