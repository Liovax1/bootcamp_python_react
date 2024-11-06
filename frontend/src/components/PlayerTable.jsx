import React from 'react';
import PlayerRow from './PlayerRow';

export default function PlayerTable({ players }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {players?.map((player) => (
                    <PlayerRow
                        key={player.id}
                        id={player.id}
                        name={player.name}
                        score={player.score}
                    />
                ))}
            </tbody>
        </table>
    );
}