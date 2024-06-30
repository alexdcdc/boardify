'use client'
import { useRouter } from 'next/navigation'
import React, {ChangeEvent, FormEvent, useState} from "react";
import Link from "next/link";
import axios from "axios";


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
    console.log(signUpDetails);
    event.preventDefault();
    try {
      const response = await axios.post('/api/sign-up', signUpDetails);
      console.log('Response:', response.data);
      if (response.data.status == 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const updateSignUpDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value
    });
    console.log(signUpDetails);
  }

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 m-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <div>
            <img src="./favicon.ico" width="50" alt="Logo" />
          </div>
          <h1 className="text-3xl font-bold text-[#454545] text-[#454545] my-auto">boardify</h1>
        </div>
        <div className="text-sm font-light text-[#6B7280] pb-8 ">Sign up for an account on boardify.</div>
        <form className="flex flex-col" onSubmit = {postSignUp}>
        <div className="pb-2">
            <label htmlFor="fname" className="block mb-2 text-sm font-medium text-[#111827]">First Name</label>
            <div className="relative text-gray-400">
              <input name="fname" id="fname" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="John" autoComplete="off" onChange = {updateSignUpDetails}/>
            </div>
          </div>
          <div className="pb-2">
            <label htmlFor="lname" className="block mb-2 text-sm font-medium text-[#111827]">Last Name</label>
            <div className="relative text-gray-400">
              <input name="lname" id="lname" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Doe" autoComplete="off" onChange = {updateSignUpDetails}/>
            </div>
          </div>
          <div className="pb-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">Email</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
              <input type="email" name="email" id="email" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autoComplete="off" onChange = {updateSignUpDetails}/>
            </div>
          </div>
          <div className="pb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span>
              <input type="password" name="password" id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-password" aria-autocomplete="list" value = {signUpDetails.password} onChange = {updateSignUpDetails}/>
            </div>
          </div>
          {/*
          <div className="pb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">Confirm Password</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span>
              <input type="password" name="cpassword" id="cpassword" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-password" aria-autocomplete="list" value = {signUpDetails.password} onChange = {updateSignUpDetails}/>
            </div>
          </div>
          */}
          <button type="submit" className="w-full text-[#FFFFFF] bg-[#2192c6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Sign Up</button>
          <div className="text-sm font-light text-[#6B7280] ">Already have an account? <Link href="/login" className="font-medium text-[#2192c6] hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

