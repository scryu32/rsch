'use client';

import bg from '@/public/Images/BackGround.png';

export function Backgrrrrr() {
  return (
    <div className="main-page">
      <div>
        <div className="back-ground-box">
          <h4>Welcome to Rsch Site!</h4>
          <p>Made by 유성찬</p>
        </div>
      </div>

      <style jsx>{`
        .back-ground-box::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url(${bg.src});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          filter: brightness(50%);
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
