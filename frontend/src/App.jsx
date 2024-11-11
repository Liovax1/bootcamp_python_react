// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import Game from "./pages/Game";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();
    return (
      
      <>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toto">Toto</Link>
          </li>
        </ul> */}

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </>
  );
}
export default App;


