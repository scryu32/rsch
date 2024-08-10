import { Backgrrrrr } from './Backgroud'
import Link from 'next/link'
import Cards from './cards';

export default function MainPage(){
  const cardItems = [
    { title: 'What I Do?', description: '현재는 프론드엔드 위주로 공부하고있습니다. 할줄 아는 언어들은 Python과 JS 할줄알고, C++ 조금 할줄 압니다. 프레임워크는 Next.js 사용할줄알고, 나중에 Django 배울 예정입니다. 이 프로젝트 완성하면 React랑 크롤링 공부해서 취미로 외주 받을 계획입니다.', cardclass : 'first-card', imgsrc: './Images/htmlimg.png'},
    { title: 'What I Interested In?', description: '가장 관심있는 분야는 AI입니다. AI에서 가장 공부 많이한 분야는 Fine-tuning이나 프롬프트 엔지니어링같이 AI 다루는쪽 위주로 공부했습니다. 사이트에 있는 챗봇도 이 두 기술로 만든겁니다. 나중에 선형대수나 AI 좀 더 공부하면 직접 챗봇모델 만들어볼 예정입니다.', cardclass : 'second-card', imgsrc: './Images/AI_icon.png'},
    { title: 'About ChatBot', description: '챗봇 모델은 사진에있는 호두라는 친구고, 말투를 Fine-tuning으로 훈련시켰습니다. 프롬프트에는 설정이나 수행할수있는 일들 넣었습니다. 나중에 RVC나 Diffussion 공부하면 음성도 집어넣을 계획이고, 최종적으로 이 친구로 빅스비 강화버전 만드는게 목표입니다.', cardclass : 'third-card', imgsrc: './HuTao/HuTao_emoji2.png'},
  ];
  return (
    <div className="main-page">

      <Backgrrrrr/>

      <div className='back-doc-box'>

        <div className="doc-box">

          <Cards items={cardItems} />

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