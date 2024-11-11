import { useCallback } from "react";

function useCreateGame() {
    const createGame = async (gameName, players) => {
        const playerNames = players.map(player => player.name);
        
        const response = await fetch("http://localhost:8000/api/create_game", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: gameName, players: playerNames }),
        });

        if (!response.ok) throw new Error("Erreur lors de la création du jeu");

        return (await response.json()).id;
    };

    const createPlayers = useCallback(async (gameId) => {
        const response = await fetch(`http://127.0.0.1:8000/api/game/${gameId}/players`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Erreur lors de la récupération des joueurs");

        return await response.json();
    }, []);

    return { createGame, createPlayers };
}

export default useCreateGame;