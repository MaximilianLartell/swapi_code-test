import React, { useState } from "react";
import { Pane, Menu } from "evergreen-ui";
import CharacterDetails from "./CharacterDetails";

function CharactersList({ characters, setSelected }) {

  return (
    <Pane display="flex">
      <Pane width={260} background="beige">
        {characters.map((char) => (
          <Menu.Item
            key={char.name}
            onSelect={() => {
              setSelected(char);
            }}
          >
            {char.name}
          </Menu.Item>
        ))}
      </Pane>
    </Pane>
  );
}

export default CharactersList;
