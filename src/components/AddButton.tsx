"use client"
// Import necessary dependencies
import React from "react";
import Image from "next/image";
import plusSign from "../../public/plus.svg"
import axios from "axios";
import { useRouter } from "next/navigation"

interface AddButtonProps {
    userId: string;
}


// Create the Card component
const AddButton: React.FC<AddButtonProps> = ({ userId }) => {
    const router = useRouter();

    const makeNewDoc = async () => {
        try {
            const response = await axios.post("/api/document", { userId: userId });
            if (response.data.status == 200) {
                router.push("/editor/" + response.data.docId);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="flex justify-center align-center rounded-2xl w-72 h-96 border-2 border-gray-500 hover:shadow-xl active:scale-95 transition-transform transform m-2" onClick = { makeNewDoc }>
            <div className = "w-1/2 relative">
                <Image src = {plusSign} fill alt = "Plus sign"/>
            </div>
        </div>
    );
};

// Export the component for use in other parts of the application
export default AddButton;