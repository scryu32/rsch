'use client'

import { useState } from "react";

export default function DeleteButton(props) {
    const handleDeleteClick = async () => {
        const userConfirmed = window.confirm('정말로 글을 삭제하시겠습니까?');
        console.log(userConfirmed)
        if (userConfirmed) {
            try {
                await fetch('/api/post/delete', {
                    method: 'DELETE',
                    body: JSON.stringify(props),
                });
            } catch (error) {
                console.error('삭제 요청 중 오류 발생:', error);
                alert('삭제 요청 중 오류가 발생했습니다.');
            }
            window.location.href = '/comments';
        } else {
            alert('삭제가 취소되었습니다.');
            window.location.href = '/comments';
        }
    };

    return (
        <div className="edit-btn"> 
            <button className="dlbtn" onClick={handleDeleteClick}>
                삭제
            </button>
        </div>
    );
}
