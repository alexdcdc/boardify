// Import necessary dependencies
import React from 'react';
import Image from 'next/image';
import plusSign from '../../public/plus.svg'

// Create the Card component
const AddButton: React.FC = () => {
    return (
        <div className="flex justify-center align-center rounded-2xl w-72 h-96 border-2 border-gray-500 hover:shadow-xl active:scale-95 transition-transform transform m-2" onClick = { () => {console.log("beans")} }>
            <div className = "w-1/2 relative">
                <Image src = {plusSign} fill alt = "Plus sign"/>
            </div>
        </div>
    );
};

// Export the component for use in other parts of the application
export default AddButton;