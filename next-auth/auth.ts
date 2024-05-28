import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"

 
export const { handlers, auth,signIn,signOut } = NextAuth({
  callbacks:{
    async session({token,session}){
      console.log({sessionToken:token})
      return session;
    },
    async jwt({token}){
      console.log(token)
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})