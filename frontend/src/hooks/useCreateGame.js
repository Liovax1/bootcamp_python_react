export default function useCreateGame() {

    const createGame = (gameName, players) => {
        fetch("http://localhost:8000/api/start_game/{id}", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ 
                name: gameName,
                players: players,
            }),
        })

        .then((response) => {
            if (!response.ok) {
                throw new Error("Mauvaise réponse");
            }
            return response.json();
        })

        .then((response) => { 
            console.log(response);
        })

        .catch((error) => {
            console.error(error);
        });
    };

    return { createGame }; 
}