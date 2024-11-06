import React from "react";
import PlayerTable from "../components/PlayerTable";

export default function Blackjack({ players }) {
    return (
        <>
            <h1>Blackjack</h1>
            <PlayerTable players={players} />
        </>
    );
}

