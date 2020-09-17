import React from "react";

function CharactersList({ characters, setSelected }) {
  return (
    <div>
        {characters.map((char) => (
          <div className='menu-item'
            key={char.name}
            onClick={() => {
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
