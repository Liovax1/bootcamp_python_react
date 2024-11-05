import React from 'react';

const CounterButton = ({ score, onScoreChange }) => {
    return (
        <div>
            <button onClick={() => onScoreChange(score + 1)}>+</button>
            <span>{score}</span>
            <button onClick={() => score > 0 && onScoreChange(score - 1)}>-</button>
        </div>
    );
};

export default CounterButton;