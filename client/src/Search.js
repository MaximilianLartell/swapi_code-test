import React, { useState } from "react";
import { Pane, SearchInput, Button, Text } from "evergreen-ui";
import CharacterDetails from "./CharacterDetails";

function Search({ setSelected, characters }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState('Search for a character below, or select one from the list');

  const filterCharacters = () => {
    console.log(value);
    const re = new RegExp("\\b" + value + "\\b", "i");
    const match = characters.find((char) => char.name.search(re) !== -1);
    if (match) {
      setSelected(match);
    } else {
      setMessage(`No character with the name ${value} found`)
    }
  };

  return (
    <Pane>
      <div>
        <Text size={100}>
          {message}
        </Text>
      </div>
      <SearchInput onChange={(e) => setValue(e.target.value)} value={value} />
      <Button onClick={() => filterCharacters()}>Search</Button>
    </Pane>
  );
}

export default Search;
