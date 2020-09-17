import React from "react";
import { IconButton, CrossIcon } from "evergreen-ui";
import useCharacter from "./useCharacter";

function CharacterDetails({ selected, setSelected }) {
  const { character } = useCharacter(selected);

  const render = () => {
    if (selected) {
      return (
        <div>
          <div className="card_close-icon">
            <IconButton
              marginBottom={16}
              appearance="minimal"
              icon={CrossIcon}
              onClick={() => setSelected(undefined)}
            />
          </div>
          <div className="card_content">
            <h4>{character.name || selected.noMatch}</h4>
            <p>Birth year: {character.birth_year}</p>
            <p>Homeplanet: {character.homeworld}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Starships</p>
            <ul>
              {character.starships && character.starships !== "n/a" ? (
                character.starships.map((el) => <li key={el}>{el}</li>)
              ) : (
                <li>n/a</li>
              )}
            </ul>
            <p>Appear in:</p>
            <ul>
              {character.films ? (
                character.films.map((el) => <li key={el}>{el}</li>)
              ) : (
                <li>...loading</li>
              )}
            </ul>
          </div>
        </div>
      );
    }
  };

  return <div className='card'>{render()}</div>;
}

export default CharacterDetails;
