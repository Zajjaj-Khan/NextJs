import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { authRoutes, publicRoutes, apiAuthPrefix } from "@/routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
