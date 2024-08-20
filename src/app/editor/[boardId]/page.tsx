"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ObjectId } from "mongodb";

interface Board {
    ownerId: string;
    name: string;
    lastOpened: string;
}

export default function Home({ params }: { params: { boardId: string } }) {
    const { boardId } = params;
    const [ boardData, updateBoardData ] = useState({
        ownerId: "",
        name: "",
        lastOpened: "",
    });

    const getBoardData = async () => {
        const response = await axios.get("/api/document/" + boardId, { params: params });
        const { doc } = response.data;

        doc.lastOpened = Date.now.toString();
        return doc;
    }

    useEffect(() => {
        const fetchBoardData = async () => {
            const docs = await getBoardData();
            updateBoardData(docs);
        };

        fetchBoardData();
    }, [boardId]); // Fetch documents whenever the userId changes

    return (
        <div className="flex flex-col">
            <p className = "text-2xl font-bold p-4">Name: {boardData.name} Board ID: {boardId}</p>
        </div>

    );
}