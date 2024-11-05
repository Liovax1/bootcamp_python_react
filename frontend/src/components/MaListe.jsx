import React, { useState } from 'react';
export default function MaListe() {

    const [mot, setMot] = useState('');
    const [mots, setMots] = useState([]);

    const ajouterMot = () => {
        if (mot.trim() === '') return;
        setMots([...mots, mot]);
        setMot('');
    };
    return (
        <div>
            <h2>Ajout</h2>
            <input
                type="text"
                value={mot}
                onChange={(e) => setMot(e.target.value)}
                placeholder="Entrez"
            />
            <button onClick={ajouterMot}>Ajouter</button>
            <ul>
                {mots.map((mot, index) => (
                    <li key={index}>{mot}</li>
                ))}
            </ul>
        </div>
    );
}