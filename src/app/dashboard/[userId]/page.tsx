'use client'
import React, { useState, useEffect } from "react";
import Card from "../../../components/Card";
import AddButton from "../../../components/AddButton";
import axios from "axios";

interface Document {
    _id: string
    lastOpened: Date,
    name: string,
    ownerId: string,
    [key: string]: any,
}

export default function Home({ params }: { params: { userId: string } }) {

    const { userId } = params;
    const [docList, updateDocList] = useState<Document[]>([]);

    const getUserDocuments = async () : Promise<Document[]> => {
        const params = {ownerId: userId};
        const response = await axios.get("/api/document", { params: params });
        const { docs } = response.data;

        docs.sort((a: Document, b: Document) => {
            const aDate = new Date(a.lastOpened);
            const bDate = new Date(b.lastOpened);
            return bDate.getTime() - aDate.getTime();
        })

        return docs
    }

    useEffect(() => {
        const fetchDocuments = async () => {
            const docs = await getUserDocuments();
            updateDocList(docs);
        };

        fetchDocuments();
    }, [userId]); // Fetch documents whenever the userId changes


    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold p-4">User ID: {userId}</p>
            <div className="flex flex-wrap items-start min-h-screen bg-gray-100">
                <AddButton userId = {userId}/>
                {docList.map((doc, i) =>
                    <Card
                        key={i}
                        id = {doc._id}
                        posterName={doc.name}
                        lastOpened={new Date(doc.lastOpened)}
                        imageUrl="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
                    />
                )}
            </div>
        </div>

    );
}