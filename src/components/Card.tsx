// Import necessary dependencies
import React from 'react';

// Define the component props
interface CardProps {
    posterName: string;
    editedHoursAgo: string;
    imageUrl: string;
}

// Create the Card component
const Card: React.FC<CardProps> = ({ posterName, editedHoursAgo, imageUrl }) => {
    return (
        <div className="flex flex-col rounded-2xl w-96 bg-[#ffffff] shadow-xl">
            <figure className="flex justify-center items-center rounded-2xl grow">
                <img
                    src={imageUrl}
                    alt="Card Preview"
                    className="rounded-t-2xl"
                />
            </figure>
            <div className="flex flex-col grow-0 p-8">
                <div className="text-2xl font-bold text-[#374151] pb-6">{posterName}</div>
                <div className="text-lg text-[#374151]">Edited {editedHoursAgo} hours ago</div>
                <div className="flex justify-end pt-6">
                    <button className="bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

// Export the component for use in other parts of the application
export default Card;