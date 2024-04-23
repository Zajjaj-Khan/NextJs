'use client'
import React from 'react'
import { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
const RegisterPage = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const router = useRouter();
    const handleSubmit =async(e)=>{}
    const onPressVerify = async (e) =>{}
return (
    <>
    </>
  )
}

export default RegisterPage