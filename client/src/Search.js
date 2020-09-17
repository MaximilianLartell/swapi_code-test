import React, { useState } from "react";
import { SearchInput, Button } from "evergreen-ui";

function Search({ setSelected, characters }) {
  const [value, setValue] = useState("");

  const filterCharacters = () => {
    const re = new RegExp("\\b" + value + "\\b", "i");
    const match = characters.find((char) => char.name.search(re) !== -1);
    if (match && value !== "") {
      setSelected(match);
    }
    if (value === "") {
      setValue(`Please enter a name`);
    }
    if (!match) {
      setValue(`${value} not found`);
    }
  };

  return (
    <div className="search-field">
      <h3>Search for a character below, or select one from the list</h3>
      <SearchInput onChange={(e) => setValue(e.target.value)} value={value} />
      <Button onClick={() => filterCharacters()}>Search</Button>
    </div>
  );
}

export default Search;
