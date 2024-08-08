import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  secret : '',
  adapter : MongoDBAdapter(connectDB),
};

export default NextAuth(authOptions)