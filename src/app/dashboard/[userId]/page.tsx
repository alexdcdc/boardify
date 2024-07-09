'use client'
import React from 'react';
import Card from '../../../components/Card';
import AddButton from '../../../components/AddButton';
import axios from "axios";
import { useRouter } from 'next/navigation';
import Image from "next/image"
import plusSign from '../../../../public/plus.svg'

export default function Home({ params }: { params: { userId: string } }) {

    const router = useRouter();
    const { userId } = params;
    const numCards = 20;
    const nameList = [];

    const makeNewDoc = async () => {
        try {
            const response = await axios.post('/api/document', { userId: userId });
            console.log('Response:', response.data);
            if (response.data.status == 200) {
                router.push("/editor/" + response.data.docId);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    for (let i = 1; i <= numCards; i++) {
        nameList.push(`Example Card ${i}`)
    }
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold p-4">User ID: {userId}</p>
            <div className="flex flex-wrap items-start min-h-screen bg-gray-100">
                <div className="flex justify-center align-center rounded-2xl w-72 h-96 border-2 border-gray-500 hover:shadow-xl active:scale-95 transition-transform transform m-2" onClick={makeNewDoc}>
                    <div className="w-1/2 relative">
                        <Image src={plusSign} fill alt="Plus sign" />
                    </div>
                </div>
                {nameList.map((name, i) =>
                    <Card
                        key={i}
                        posterName={name}
                        editedHoursAgo=""
                        imageUrl="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                    />
                )}
            </div>
        </div>

    );
}