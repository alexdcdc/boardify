import React from 'react';
import Card from '../../components/Card';

export default function Home() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card
            posterName="Poster Name"
            editedHoursAgo="x"
            imageUrl="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
            />
       </div>
    );
  }