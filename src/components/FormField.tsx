import React from "react";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
    autoComplete?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    type,
    name,
    id,
    placeholder,
    autoComplete,
    value,
    onChange,
}) => (
    <div className="pb-2">
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-[#111827]">{label}</label>
        <div className="relative text-gray-400">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

export default FormField;
