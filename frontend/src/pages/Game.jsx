import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useCreateGame from "../hooks/useCreateGame"; 
import { useParams } from 'react-router-dom';
import './Game.css';


export default function Game() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { getPlayers } = useCreateGame();

    const { players = [{ name: "Player 1" }, { name: "Player 2" }], gameName = "Game" } = location.state || {};
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);
    const [playerIndex, setPlayerIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [diceCount, setDiceCount] = useState(1);
    const [turnsLeft, setTurnsLeft] = useState(3);
    const [scoreBoard, setScoreBoard] = useState([]);
    const [gameEnded, setGameEnded] = useState(false);
    const [winners, setWinners] = useState([]);
    


    useEffect(() => {
        async function fetchPlayers() {
            if (!location.state) { 
                try {
                    const data = await getPlayers(id);
                    setCurrentPlayer(data.players[0]);
                    setScoreBoard(data.players.map(player => ({ name: player.name, score: 0 })));
                } catch (error) {
                    console.error("Erreur récupération joueur :", error);
                }
            }
        }
        fetchPlayers();
    }, [id, location.state, getPlayers]);

    const rollDice = () => {
        if (turnsLeft > 0 && score < 21) {
            const roll = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
            const rollAdd = roll.reduce((a, b) => a + b, 0);
            const newScore = score + rollAdd;
            setScore(newScore);
            setTurnsLeft(turnsLeft - 1);
    
            if (newScore >= 21 || turnsLeft === 1) {
                endTurn(newScore);
            }
        }
    };
    
    const endTurn = (finalScore) => {
        const updatedScoreBoard = [...scoreBoard];
        const playerIndexInBoard = updatedScoreBoard.findIndex(player => player.name === currentPlayer.name);
    
        if (playerIndexInBoard !== -1) {
            updatedScoreBoard[playerIndexInBoard].score = finalScore;
        } else {
            updatedScoreBoard.push({ name: currentPlayer.name, score: finalScore });
        }
    
        setScoreBoard(updatedScoreBoard);
    
        const playersWith21 = updatedScoreBoard.filter(player => player.score === 21);
    
        if (playersWith21.length === 1) {
            setWinners(playersWith21);
            setGameEnded(true);
            return;
        } else if (playersWith21.length > 1) {
            alert("Égalité, un nouveau tour est nécessaire entre les joueurs qui ont fait 21.");
            setWinners(playersWith21);
            setScore(0);
            setTurnsLeft(3);
            return;
        }
    
        if (playerIndex + 1 === players.length) {
            const closestPlayer = updatedScoreBoard.reduce((winner, player) => {
                if (player.score <= 21 && player.score > (winner?.score || 0)) {
                    return player;
                }
                return winner;
            }, null);
    
            setWinners([closestPlayer]);
            setGameEnded(true);
        } else {
            const nextIndex = (playerIndex + 1) % players.length;
            setPlayerIndex(nextIndex);
            setCurrentPlayer(players[nextIndex]);
            setScore(0);
            setTurnsLeft(3);
        }
    };
    
    
    

    return (
        <div className="Game">
            <div className="GameDiv">   
                <h2>Blackjack - {gameName}</h2>
                <p><span>{currentPlayer.name}</span></p>
                <p className="score">Score : {score}</p>
                <select value={diceCount} onChange={(e) => setDiceCount(parseInt(e.target.value))}>
                    <option value={1}>1 Dé</option>
                    <option value={2}>2 Dés</option>
                    <option value={3}>3 Dés</option>
                </select>
                <div className="actionTour">
                    <button onClick={rollDice}>Throw Dices</button>
                    <button onClick={() => endTurn(score)}>End turn</button>
                </div>
                <h2>ScoreBoard</h2>
                <ul>
                    {scoreBoard.map((entry, index) => (
                        <li key={index}>{entry.name}: {entry.score}</li>
                    ))}
                </ul>
                {gameEnded && (
    <div>
        <h2>Winners :</h2>
        {winners.length > 1 ? (
            <p>Égalité entre : {winners.map(winner => winner.name).join(", ")}</p>
        ) : (
            <p>Le gagnant est : {winners[0].name} avec un score de {winners[0].score}</p>
        )}

        <button className="home" onClick={() => navigate("/")}>Menu principal</button>
    </div>
)}
            </div>
        </div>
    );
}