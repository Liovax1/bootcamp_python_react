import React from 'react';

const PlayerRow = ({ id, name, score }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{score}</td>
        </tr>
    );
};

export default PlayerRow;
