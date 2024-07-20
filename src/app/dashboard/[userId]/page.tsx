"use client"
import React from "react";
import Card from "../../../components/Card";
import AddButton from "../../../components/AddButton";

export default function Home({ params }: { params: { userId: string } }) {
    const { userId } = params;
    const numCards = 20;
    const nameList = [];


    for (let i = 1; i <= numCards; i++) {
        nameList.push(`Example Card ${i}`)
    }
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold p-4">User ID: {userId}</p>
            <div className="flex flex-wrap items-start min-h-screen bg-gray-100">
                <AddButton userId = {userId}/>
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