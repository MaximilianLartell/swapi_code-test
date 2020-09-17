import { useState, useEffect } from "react";
import axios from "axios";

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://swapi.dev/api/people/");

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
