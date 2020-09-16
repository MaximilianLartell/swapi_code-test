import React, { useEffect, useState } from "react";
import { Pane } from "evergreen-ui";
import useCharacters from "./useCharacters";
import CharactersList from "./CharactersList";
import CharacterDetails from "./CharacterDetails";
import Search from "./Search"
import "./App.css";

function App() {
  const { characters } = useCharacters();
  const [selected, setSelected] = useState();
  console.log("SELECTED", selected);

  useEffect(() => {
    console.log("selecteed", selected);
  }, [characters, selected]);

  return (
    <div className="App">
      <Pane display="flex">
        <CharactersList characters={characters} setSelected={setSelected} />
        <Pane display="flex" flexDirection="column">
          <Search characters={characters} setSelected={setSelected}/>
          <CharacterDetails selected={selected} setSelected={setSelected} />
        </Pane>
      </Pane>
    </div>
  );
}

export default App;
