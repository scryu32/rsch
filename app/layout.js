import { Inter } from "next/font/google";
import "./globals.css";
import "./nomalize.css";
import Image from 'next/image'
import hutao from '@/public/HuTao/HuTao_emoji1.png'


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className='layout'>
        <nav className="navbar">
          <div>
            <a className="logo-img" href="#">
            <Image src={hutao} width="50" height="50" className="img-logo"></Image>
            </a>
            <a href="#" className="Logo">
              <h4>Rsch Site</h4>
            </a>
            <a href="#" className="not-Logo">
              <p>Chat</p>
            </a>
            <a href="https://www.instagram.com/coding_sc/" className="not-Logo" target="_batch">
              <p>Instagram</p>
            </a>
          </div>
        </nav>
        {children}
        </body>
    </html>
  );
}
