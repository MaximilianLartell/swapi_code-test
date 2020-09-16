import React, { useState, useEffect } from "react";
import axios from "axios";

function useCharacter(selected) {
  const [character, setCharacter] = useState({});

  const getHomeworld = () => {
    if (selected.homeworld) {
      axios.get(selected.homeworld).then((res) => {
        setCharacter((prev) => ({ ...prev, homeworld: res.data.name }));
      });
    } else {
      setCharacter((prev) => ({ ...prev, homeworld: "unknown" }));
    }
  };

  const getFilms = () => {
    if (selected.films.length > 0) {
      let films = [];
      selected.films.forEach((filmUrl) => {
        axios
          .get(filmUrl)
          .then((res) => {
            films.push(res.data.title);
          })
          .then((data) => setCharacter((prev) => ({ ...prev, films })));
      });
    } else {
      setCharacter((prev) => ({ ...prev, films: "unknown" }));
    }
  };

  const getSpecies = () => {
    if (selected.species.length > 0) {
      axios.get(selected.species[0]).then((res) => {
        setCharacter((prev) => ({ ...prev, species: res.data.name }));
      });
    } else {
      setCharacter((prev) => ({ ...prev, species: "unknown" }));
    }
  };

  const getStarships = () => {
    if (selected.starships.length > 0) {
      let starships = [];
      selected.starships.forEach((starshipUrl) => {
        axios
          .get(starshipUrl)
          .then((res) => {
            starships.push(res.data.name);
          })
          .then((data) => setCharacter((prev) => ({ ...prev, starships })));
      });
    } else {
      setCharacter((prev) => ({ ...prev, starships: "unknown" }));
    }
  };

  const getVehicles = () => {
    if (selected.vehicles.length > 0) {
      let vehicles = [];
      selected.vehicles.forEach((vehicleUrl) => {
        axios
          .get(vehicleUrl)
          .then((res) => {
            vehicles.push(res.data.name);
          })
          .then((data) => setCharacter((prev) => ({ ...prev, vehicles })));
      });
    } else {
      setCharacter((prev) => ({ ...prev, vehicles: "unknown" }));
    }
  };

  useEffect(() => {
    if (selected) {
      setCharacter({
        name: selected.name,
        height: selected.height,
        birth_year: selected.birth_year,
        eye_color: selected.eye_color,
        gender: selected.gender,
        hair_color: selected.hair_color,
        height: selected.height,
        mass: selected.mass,
        skin_color: selected.skin_color,
        });
      getHomeworld();
      getFilms();
      getSpecies();
      getStarships();
      getVehicles();
    }
  }, [selected]);

  return {
    character,
  };
}

export default useCharacter;
