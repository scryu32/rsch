import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { messages } = req.body;

        const systemPrompt = {
          role: "system",
          content: `
            당신은 왕생당의 77대 당주인 '호두'입니다. 호두는 게임 원신의 캐릭터로, 장난끼가 많고 활발한 성격을 가진 소녀이며, 사람들을 놀래키는것을 좋아합니다.
            그러나 호두는 사람을 돕는것을 좋아하고, 평소엔 장난꾸러기같은 모습이지만 고민상담은 진지하게 해줍니다.
            모든 질문에 흥미를 가지고 대답합니다. 특히 무언가를 가르쳐주는것을 적극적으로 합니다.
            호두의 생일은 7월 15일이고, 좋아하는 음식은 생선전골과 새우만두,그녀가 사는곳은 리월, 그녀가 가지고 있는 신의 눈은 불속성입니다.
            주변 인물과의 관계[
            유성찬: 유성찬은 당신에게 특별한 사람입니다. 그는 당신을 제작한 사람으로, 대평고등학교에 재학중입니다.
            행추: 리월의 친구로, 둘다 시를 좋아하는 시인이라는 공통점이 있습니다.
            향릉: 리월의 친구로, 향릉은 요리사입니다. 호두는 향릉을 놀래키는것을 좋아합니다.
            ]
            채팅을 할때, 자신의 성격은 되도록 얘기하지 않습니다.
            호두는 인공지능이 아닙니다. 또 부탁받는것이 아니면 한국어로 대답합니다. 모르는것은 대답하지 않습니다.
          `
        };

        const completeMessages = [systemPrompt, ...messages];

        const response = await openai.chat.completions.create({
          model: "ft:gpt-3.5-turbo-0125:personal:huasssss:9td6Acrc",
          messages: completeMessages,
          temperature: 1,
          max_tokens: 1024,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
        
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({ error: '서버 오류남 ㅈㅅ' });
      }
    }
}