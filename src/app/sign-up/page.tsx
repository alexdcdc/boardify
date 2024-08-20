"use client"
import { useRouter } from "next/navigation"
import React, {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import AuthForm from "../../components/AuthForm"


export default function Home() {
  const router = useRouter()
  const [formErrors, setFormErrors] = useState({})
  const [signUpDetails, setSignUpDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });

  const postSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/sign-up", signUpDetails);
      if (response.data.status == 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const updateSignUpDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value
    });
  }

  const formFields = [
    {
      label: 'First Name',
      type: 'text',
      name: 'fname',
      id: 'fname',
      placeholder: 'John',
      autoComplete: 'off',
      value: signUpDetails.fname,
      onChange: updateSignUpDetails,
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lname',
      id: 'lname',
      placeholder: 'Doe',
      autoComplete: 'off',
      value: signUpDetails.lname,
      onChange: updateSignUpDetails,
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'name@company.com',
      autoComplete: 'off',
      value: signUpDetails.email,
      onChange: updateSignUpDetails,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: '••••••••••',
      autoComplete: 'new-password',
      value: signUpDetails.password,
      onChange: updateSignUpDetails,
    },
  ];

  return (
    <AuthForm
      title="Sign up for an account on boardify"
      subtitle="Sign up for an account on boardify."
      formFields={formFields}
      submitButtonText="Sign Up"
      submitHandler={postSignUp}
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
    />
  )
}

