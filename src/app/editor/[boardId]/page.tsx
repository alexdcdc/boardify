import React from 'react';

export default function Home({ params }: { params: { boardId: string } }) {
    const { boardId } = params;
    return (
        <div className="flex flex-col">
            <p className = "text-2xl font-bold p-4">Board ID: {boardId}</p>
        </div>

    );
}