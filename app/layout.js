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
            <ul className="nav">
              <li>
                <a className="logo-img" href="#">
                  <Image src={hutao} width="50" height="50" className="img-logo"></Image>
                </a>
              </li>
              <li>
                <a href="#" className="Logo">
                  <h4>Rsch Site</h4>
                </a>
              </li>
              <li>
                <a href="#" className="not-Logo">
                  <p>Project</p>
                </a>
              </li>
              <li>
                <a href="#" className="not-Logo">
                  <p>Comments</p>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/coding_sc/" className="not-Logo" target="_batch">
                  <p>Instagram</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/scryu32/rsch" className="not-Logo" target="_batch">
                  <p>GitHub</p>
                </a>
              </li>
              
            </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
