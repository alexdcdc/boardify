"use client"
import { useRouter } from "next/navigation"
import React, {ChangeEvent, FormEvent, useState} from "react";
import AuthForm from "../../components/AuthForm"
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({})
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const postLogin = async (event: FormEvent<HTMLFormElement>) => {
    console.log(loginDetails);
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", loginDetails);
      console.log("Response:", response.data);
      if (response.data.status == 200) {
        const { session, userId } = response.data;
        document.cookie = `session=${session}; path=/`;
        router.push("/dashboard/" + userId);
        
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const updateLoginDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
    console.log(loginDetails);
  }

  const formFields = [
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'name@company.com',
      autoComplete: 'off',
      value: loginDetails.email,
      onChange: updateLoginDetails,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: '••••••••••',
      autoComplete: 'new-password',
      value: loginDetails.password,
      onChange: updateLoginDetails,
    },
  ];

  return (
    <AuthForm
      title="Log in to boardify"
      subtitle="Log in to boardify."
      formFields={formFields}
      submitButtonText="Log in"
      submitHandler={postLogin}
      footerText="Don&apos;t have an account yet?"
      footerLink="/sign-up"
      footerLinkText="Sign up"
    />
  );
}

