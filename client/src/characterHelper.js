import axios from "axios";

const getHomeworld = (selected, setCharacter) => {
  if (selected.homeworld) {
    axios
      .get(selected.homeworld)
      .then((res) => {
        setCharacter((prev) => ({ ...prev, homeworld: res.data.name }));
      })
      .catch(() => setCharacter((prev) => ({ ...prev, homeworld: "n/a" })));
  } else {
    setCharacter((prev) => ({ ...prev, homeworld: "n/a" }));
  }
};

const getFilms = (selected, setCharacter) => {
  if (selected.films.length > 0) {
    let films = [];
    selected.films.forEach((filmUrl) => {
      axios
        .get(filmUrl)
        .then((res) => {
          films = [...films, res.data.title];
        })
        .then(() => setCharacter((prev) => ({ ...prev, films })))
        .catch(() => setCharacter((prev) => ({ ...prev, films: ["n/a"] })));
    });
  } else {
    setCharacter((prev) => ({ ...prev, films: "n/a" }));
  }
};

const getSpecies = (selected, setCharacter) => {
  if (selected.species.length > 0) {
    axios
      .get(selected.species[0])
      .then((res) => {
        setCharacter((prev) => ({ ...prev, species: res.data.name }));
      })
      .catch(() => setCharacter((prev) => ({ ...prev, species: "n/a" })));
  } else {
    setCharacter((prev) => ({ ...prev, species: "n/a" }));
  }
};

const getStarships = (selected, setCharacter) => {
  if (selected.starships.length > 0) {
    let starships = [];
    selected.starships.forEach((starshipUrl) => {
      axios
        .get(starshipUrl)
        .then((res) => {
          starships.push(res.data.name);
        })
        .then(() => setCharacter((prev) => ({ ...prev, starships })))
        .catch(() => setCharacter((prev) => ({ ...prev, starships: ["n/a"] })));
    });
  } else {
    setCharacter((prev) => ({ ...prev, starships: "n/a" }));
  }
};

export function parseCharacter(selected, setCharacter) {
  if (selected) {
    setCharacter({
      name: selected.name,
      birth_year: selected.birth_year,
      gender: selected.gender,
    });
    getHomeworld(selected, setCharacter);
    getFilms(selected, setCharacter);
    getSpecies(selected, setCharacter);
    getStarships(selected, setCharacter);
  }
}
