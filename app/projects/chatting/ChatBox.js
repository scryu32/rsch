"use client"

import { useState, useEffect, useRef } from 'react';

export default function ChatBox() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userMessage = { role: 'user', content: input };
        
        setInput('');
    
        try {
            setMessages((prevMessages) => [...prevMessages, userMessage]);
    
            const sessionRes = await fetch('/api/checklogin');
    
            if (!sessionRes.ok) {
                const sessionData = await sessionRes.json();
                if (sessionRes.status === 401) {
                    const assistantMessage = { role: 'assistant', content: '로그인 하세요.' };
                    setMessages((prevMessages) => [...prevMessages, assistantMessage]);
                    return;
                }
                throw new Error(sessionData.message || 'Failed to check login status');
            }
    
            const sessionData = await sessionRes.json();
    
            if (sessionData.session) { 
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ messages: [...messages, userMessage] }),
                });
    
                if (!res.ok) throw new Error('Network response was not ok');
    
                const data = await res.json();
                const assistantMessage = { role: 'assistant', content: data.choices[0].message.content };
    
                setMessages((prevMessages) => [...prevMessages, assistantMessage]);
            } else {
                const assistantMessage = { role: 'assistant', content: '로그인 하세요.' };
                setMessages((prevMessages) => [...prevMessages, assistantMessage]);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="messages-box" style={{overflowY: 'scroll', padding: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`} style={{ marginBottom: '10px', display: 'flex', justifyContent: msg.role === "user" ? 'flex-end' : 'flex-start' }}>
                        <div 
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                backgroundColor: msg.role === "user" ? '#d1e7dd' : '#f8d7da',
                                color: msg.role === "user" ? '#0f5132' : '#721c24'
                            }}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="send-box">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    className="input-box"
                    placeholder="메시지를 입력하세요"
                />
                <input type="submit" value="전송" className="submit-btn" />
            </form>
        </>
    );
}