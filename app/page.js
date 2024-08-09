import bg from '@/public/HuTao/HuTao_Background.png'
import { Backgrrrrr } from './Backgroud'
import Link from 'next/link'

export default function MainPage(){
  return (
    <div className="main-page">

      <Backgrrrrr/>

      <div className='back-doc-box'>

        <div className="doc-box">

          <div className='card'>
            <h4>What I Do?</h4>
            <img src='./Images/htmlimg.png' alt='profile' className='CardImage'></img>
            <p>
              현재는 프론드엔드 위주로 공부하고있습니다.
              할줄 아는 언어들은 Python과 JS 할줄알고, C++ 조금 할줄 압니다.
              프레임워크는 Next.js 사용할줄알고, 나중에 Spring Boot 배울 예정입니다.
              이 프로젝트 완성하면 React랑 크롤링 공부해서 취미로 외주 받을 계획입니다.
            </p>
          </div>

          <div className='card'>
            <h4>What I Interested In?</h4>
            <img src='./Images/AI_icon.png' alt='profile' className='CardImage'></img>
            <p>
              가장 관심있는 분야는 AI입니다.
              AI에서 가장 공부 많이한 분야는 Fine-tuning이나 프롬프트 엔지니어링같이
              AI 다루는쪽 위주로 공부했습니다. 사이트에 있는 챗봇도 이 두 기술로 만든겁니다.
              나중에 선형대수나 AI 좀 더 공부하면 직접 챗봇모델 만들어볼 예정입니다.
            </p>
          </div>

          <div className='card'>
            <h4>About ChatBot</h4>
            <img src='./HuTao/HuTao_emoji2.png' alt='profile' className='CardImage'></img>
            <p>
              챗봇 모델은 사진에있는 호두라는 친구고,
              말투를 Fine-tuning으로 훈련시켰습니다.
              프롬프트에는 설정이나 수행할수있는 일들 넣었습니다.
              나중에 RVC나 Diffussion 공부하면 음성도 집어넣을 계획이고,
              최종적으로 이 친구로 빅스비 강화버전 만드는게 목표입니다.
            </p>
          </div>

        </div>
        <div className='ChatBotGOGO'>
          <h4>챗봇을 사용해보고 싶다면?</h4>
          <Link href="/projects">
            <button>챗봇 바로가기</button>
          </Link>
        </div>
      </div>

    </div>
  )
}