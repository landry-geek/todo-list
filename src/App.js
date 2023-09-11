import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Boutons from "./Components/Boutons";
import Listes from "./pages/Listes";
import "./App.css";
import { useState } from "react";


function App() {
  const [Taches,setTaches]=useState([])
  function handleAddTachesPrim(tache){
    setTaches([...Taches, tache])
  }
  function handleDeleteTaches(name){
    setTaches(Taches.filter(task=>task.nameTask !== name))
  }
  return (
    <div className="Ecran">
      <Routes>
        <Route path="/" element={<Home handleAddTachesPrim={handleAddTachesPrim}/> } />
        <Route path="/listes" element={<Listes Taches={Taches} handleDeleteTaches={handleDeleteTaches}/> } />
      </Routes>
      <Boutons />
    </div>
  );
}

export default App;
