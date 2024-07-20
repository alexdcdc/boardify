import React from "react";
import Link from "next/link";
import FormField from "./FormField";
import Image from "next/image"
import logo from "../app/favicon.ico"

interface AuthFormProps {
    title: string;
    subtitle: string;
    formFields: { label: string; type: string; name: string; id: string; placeholder: string; autoComplete?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }[];
    submitButtonText: string;
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    footerText: string;
    footerLink: string;
    footerLinkText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    subtitle,
    formFields,
    submitButtonText,
    submitHandler,
    footerText,
    footerLink,
    footerLinkText,
}) => (
    <div className="flex h-screen">
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 m-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
            <div className="flex flex-row gap-3 pb-4">
                <div>
                    <Image src= {logo} width="50" height = "50" alt="Logo" />
                </div>
                <h1 className="text-3xl font-bold text-[#454545] my-auto">boardify</h1>
            </div>
            <div className="text-sm font-light text-[#6B7280] pb-8">{subtitle}</div>
            <form className="flex flex-col" onSubmit={submitHandler}>
                {formFields.map((field, index) => (
                    <FormField key={index} {...field} />
                ))}
                <button type="submit" className="w-full text-[#FFFFFF] bg-[#2192c6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                    {submitButtonText}
                </button>
                <div className="text-sm font-light text-[#6B7280]">
                    {footerText} <Link href={footerLink} className="font-medium text-[#2192c6] hover:underline">{footerLinkText}</Link>
                </div>
            </form>
        </div>
    </div>
);

export default AuthForm;