import React from 'react';
import Card from '../../components/Card';

export default function Home() {
    const numCards = 20;
    const nameList = [];
    for (let i = 1; i <= numCards; i++) {
        nameList.push(`Example Card ${i}`)
    }
    return (
        <div className="flex flex-wrap items-start min-h-screen bg-gray-100">
            {nameList.map((name, i) =>
                <Card
                    key = {i}
                    posterName={name}
                    editedHoursAgo="x"
                    imageUrl="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                />
            )}
        </div>

    );
}