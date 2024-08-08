import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Iv23liSmxjrzBpNZoNIO',
      clientSecret: '9af2e7ce0e8625515703aa857d9428e4ee684130',
    }),
  ],
  secret : 'asfsasaf2fsdv23ef23',
  adapter : MongoDBAdapter(connectDB),
};

export default NextAuth(authOptions)