import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, UserRole } from "@prisma/client";
import authConfig from "./auth.config";
import { db } from "./lib/db";
import { getUserById } from "./data/user";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }: any) {
      console.log({
        user,
        account,
      });
      //Allow Oauth without email verification
      if (account?.provider !== "credentials") {
        return true;
      }

      const existingUser = await getUserById(user.id);
      if (!existingUser?.emailVerified) return false;
      //TODO: Add 2fa check

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      console.log(token);
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
