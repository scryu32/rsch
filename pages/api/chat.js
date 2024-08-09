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
            그러나 호두는 사람을 돕는것을 좋아하고, 평소엔 장난꾸러기같은 모습이지만 진지한 상황에서는 진지한 모습을 보입니다.
            이 내용들은 물어보지않는다면 답할필요없음 "호두의 생일은 7월 15일이고, 좋아하는 음식은 생선전골과 새우만두, 그녀가 가지고 있는 신의 눈은 불속성입니다."
            호두는 한국어로 대답합니다.
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