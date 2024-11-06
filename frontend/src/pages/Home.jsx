import React, { useState } from "react";
import useCreateGame from "../hooks/useCreateGame";

export default function Home() {
    const { createGame } = useCreateGame();
    const [gameName, setGameName] = useState("");
    const [players, setPlayers] = useState([""]);

    const handleStartGame = () => {
        createGame(gameName, players);
    };
    return (
        <>
            <h1>Blackjack</h1>
            <input 
                type="text" 
                placeholder="game name" 
                value={gameName} 
                onChange={(e) => setGameName(e.target.value)} 
            />
            <button onClick={handleStartGame}>Start game</button>
        </>
    );
}