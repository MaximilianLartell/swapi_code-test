import React, { useEffect } from "react";
import { Pane, IconButton, CrossIcon, Text } from "evergreen-ui";
import useCharacter from "./useCharacter";

function CharacterDetails({ selected, setSelected }) {
  const { character } = useCharacter(selected);
  console.log(character);

  const render = () => {
    if (selected) {
      return (
        <Pane>
          <IconButton
            marginBottom={16}
            appearance="minimal"
            icon={CrossIcon}
            onClick={() => setSelected(undefined)}
          />
          <h4>{character.name || selected.noMatch}</h4>
          <p>Birth year: {character.birth_year}</p>
          <p>Homeplanet: {character.homeworld}</p>
        </Pane>
      );
    } 
  };

  useEffect(() => {
    const characterDetails = render();
  });
  return <Pane background="tint2">{render()}</Pane>;
}

export default CharacterDetails;
