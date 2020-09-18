import { useState, useEffect } from "react";
import { parseCharacter } from "./characterHelper";

function useCharacter(selected) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    parseCharacter(selected, setCharacter);
  }, [selected]);

  return {
    character,
  };
}

export default useCharacter;
