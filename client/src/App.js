import React, { useState } from "react";
import useCharacters from "./useCharacters";
import CharactersList from "./CharactersList";
import CharacterDetails from "./CharacterDetails";
import Search from "./Search";

function App() {
  const { characters } = useCharacters();
  const [selected, setSelected] = useState();

  return (
    <div className="App">
      <main>
        <Search characters={characters} setSelected={setSelected} />
        <CharacterDetails selected={selected} setSelected={setSelected} />
      </main>
      <aside className='side-bar'>
        <CharactersList characters={characters} setSelected={setSelected} />
      </aside>
    </div>
  );
}

export default App;
