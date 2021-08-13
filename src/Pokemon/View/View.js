import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../../AppContext/Provider";
import "./View.css";

const PokemonView = () => {
  const { pokemonSelectHandler, selectedPokemon } = usePokemon();
  const { name } = useParams();

  const getPokeEvolution = (pokemon) => {
    return fetch(pokemon.species_evolution.evolution_chain.url)
      .then((r) => r.json())
      .then((evolution) => Object.assign(pokemon, evolution));
  };
  const getPokeSpecies = (pokemon) => {
    return fetch(pokemon.species.url)
      .then((r) => r.json())
      .then((evolution) =>
        Object.assign(pokemon, { species_evolution: evolution })
      );
  };

  useEffect(() => { 
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then(getPokeSpecies)
      .then(getPokeEvolution)
      .then((resultPokemon) => {
        pokemonSelectHandler(resultPokemon);
      });
  }, [name]);
 
  return selectedPokemon ? (
    <div className="PokemonView">
      <h1>{selectedPokemon.name}</h1>
      <div className="circle">
        <img
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
        />
      </div>

      <h2>Type of Pokemon</h2>
      <span>{selectedPokemon.types[0].type.name}</span>

      {<h3>Evolution</h3>}

      {
        <ul className="PokemonView__EvolutionChain">
          {selectedPokemon.chain.evolves_to.map((chain) => (
           <li>{chain.species.name}</li>
          ))}
        </ul>
      }

      {<h4>abilities</h4>}

      {
        <ul className="PokemonView__abilities">
          {selectedPokemon.abilities.map((item) => (
             <><br></br><li>{item.ability.name}</li></>
          ))}
        </ul>
      }

    </div>
  ) : (
    <></>
  );
};

export default PokemonView;
