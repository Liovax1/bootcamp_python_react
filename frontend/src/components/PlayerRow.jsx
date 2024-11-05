import React from 'react';
export default function RowToto({ id, name, score}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{score}</td>
        </tr>
    );
}



