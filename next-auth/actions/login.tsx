"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas/intex";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByEmail } from "@/data/verification-token";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const {email,password} = validatedFields.data;



  const existingUser = await getUserByEmail(email);
  if(!existingUser || !existingUser.email || !existingUser.password) {
    return {error:"Email does not exist!"}
  }
  if(!existingUser.emailVerified){
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    )
    return {success:"Confirmation email sent!"}
  }



  try {
    await signIn("credentials",{
      email,
      password:password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if(error instanceof AuthError){
      switch(error.type){
        case "CredentialsSignin":
          return {error: "Invaild credientials"}
        default:{
          return {error:"Somethig went wrong "}
        }
      }
      throw error;
    }
  }
};
