import React from "react";

function CharactersList({ characters, setSelected, setError }) {
  return (
    <div>
      {characters.map((char) => (
        <div
          className="menu-item"
          key={char.name}
          onClick={() => {
            setError();
            setSelected(char);
          }}
        >
          <p>{char.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
