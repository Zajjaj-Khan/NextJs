"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas/intex";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const {email,password} = validatedFields.data;
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
