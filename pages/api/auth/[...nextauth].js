import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { connectDB } from '@/util/database';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent', // 사용자에게 동의를 요청하여 항상 새로운 토큰을 발급받습니다.
          access_type: 'offline', // 오프라인 액세스를 허용합니다.
          response_type: 'code', // 권한 코드를 요청합니다.
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === 'google') {
        return profile.email_verified && profile.email.endsWith('@gmail.com');
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
