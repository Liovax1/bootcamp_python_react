import React from 'react';
import PlayerRow from './PlayerRow'
import TableToto from './PlayerTable';

// const playersData = [
//     {
//         id: 1,
//         score: 0,
//         name: "toto",
//     },
//   ];

export default function TableToto({ players }) {
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