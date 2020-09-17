import React, { useState } from "react";
import useCharacters from "./useCharacters";
import CharactersList from "./CharactersList";
import CharacterDetails from "./CharacterDetails";
import Search from "./Search";

function App() {
  const { characters } = useCharacters();
  const [selected, setSelected] = useState();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <div className="App">
      <main>
        <Search
          setErrorMessage={setErrorMessage}
          characters={characters}
          setSelected={setSelected}
        />
        <CharacterDetails
          errorMessage={errorMessage}
          selected={selected}
          setSelected={setSelected}
        />
      </main>
      <aside className="side-bar">
        <CharactersList
          setErrorMessage={setErrorMessage}
          characters={characters}
          setSelected={setSelected}
        />
      </aside>
    </div>
  );
}

export default App;
