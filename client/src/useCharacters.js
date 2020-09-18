import { useState, useEffect } from "react";
import axios from "axios";

function useCharacters() {
  const initialUrl = "https://swapi.dev/api/people/";
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(initialUrl);

  useEffect(() => {
    if (nextUrl) {
      axios.get(nextUrl).then((res) => {
        setNextUrl(res.data.next);
        setCharacters((prev) => [...prev, ...res.data.results]);
      });
    }
  }, [nextUrl]);
  return {
    characters,
  };
}

export default useCharacters;
