"use server"
import * as z from 'zod';
import {ResetSchema} from "../schemas/intex";
import { getUserByEmail } from "@/data/user";
import { todo } from 'node:test';

export const reset = async (values:z.infer<typeof ResetSchema>)=>{
    const validatedFields = ResetSchema.safeParse(values);
    if(!validatedFields.success){
        return {error:"Invaild email!"}

    }
    const {email} = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser){
        return {error:"Email does not exist"}
    }

// todo:Generate Token

    return {success:'Resend email  Sent!'}




}