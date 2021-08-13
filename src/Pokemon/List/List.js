import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { usePokemon } from '../../AppContext/Provider'
import './List.css';

const PokemonList = () => {
  const [search, setSearch] = useState('');
  const { pokemons, pokemonListHandler } = usePokemon();

  const s = search && search.toLowerCase();
  const filtered =
    !pokemons || !s
      ? pokemons
      : pokemons.filter(({ name }) =>
          name.toLowerCase().includes(s)
        );

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((r) => r.json())
      .then((json) => {
        pokemonListHandler(json.results);
      });
  }, []);

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />

      {filtered && (
        <ul className="PokemonsList">
          {filtered.map(({ name }) => (
            <Card key={name} name={name} />
          ))}
        </ul>
      )}

      {/*<div className="Pokemonimage">
        <img
          src={pokemons.sprites.front_default}
          alt={pokemons.name}/>
          </div>*/}
    </>
  );
};

export default PokemonList;