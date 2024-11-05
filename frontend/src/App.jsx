// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import React from 'react';
// import MaListe from './components/MaListe';
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Toto from "./pages/Toto";

function App() {
    return (
        // <div className="App">
        //     <h1>Liste</h1>
        //     <MaListe />
        // </div>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toto">Toto</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route patg ="/toto" element={<Toto />}/>
        </Routes>
      </>
    );
}
export default App;




// const players = [
//   {
//       id: 1,
//       score: 0,
//       name: "toto",
//   },
// ];

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
