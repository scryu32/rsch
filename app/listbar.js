'use client'

import { useState } from "react";
import hutao from '@/public/HuTao/HuTao_emoji1.png'
import Image from 'next/image'

export function ListBar() {
    const [isShown, setIsShown] = useState(false);

    const toggleShow = (event) => {
        event.preventDefault();
        setIsShown(!isShown);
    };

    const handleLinkClick = (event) => {
        event.stopPropagation();  // 부모 요소로의 이벤트 전파를 막음
    };

    return (
        <div>
            <button className={`nav-button ${isShown ? '' : 'showbar'}`} onClick={toggleShow}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className={`black-background ${isShown ? 'show' : ''}`} onClick={toggleShow}>
                <div className={`list-bar ${isShown ? 'show-abc' : ''}`}>
                    <div className='list-bar-objects'>
                        <a className="logo-img" href="/" onClick={handleLinkClick}>
                            <Image src={hutao} width="50" height="50" className="img-logo-list" alt="Logo-img"></Image>
                        </a>
                    </div>
                    <div className='list-bar-objects'>
                        <a href="/" onClick={handleLinkClick}>
                            <h4>Rsch Site</h4>
                        </a>
                    </div>
                    <div className='list-bar-objects'>
                        <a href="/projects" onClick={handleLinkClick}>
                            <p>Project</p>
                        </a>
                    </div>
                    <div className='list-bar-objects'>
                        <a href="/comments" className="not-Logo" onClick={handleLinkClick}>
                            <p>Comments</p>
                        </a>
                    </div>
                    <div className='list-bar-objects'>
                        <a href="https://www.instagram.com/coding_sc/" target="_batch" onClick={handleLinkClick}>
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className='list-bar-objects'>
                        <a href="https://github.com/scryu32/rsch" target="_batch" onClick={handleLinkClick}>
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
