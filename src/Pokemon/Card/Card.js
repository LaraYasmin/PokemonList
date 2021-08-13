import React from 'react';
import { Link } from 'react-router-dom';

const PokemonAnimal = ({ name }) => {

  if (name.startsWith('bul')) {
    console.log('render');
  }

  return (
    <li key={name}>
      <Link to={`/pokemons/${name}`}>{name}</Link>
    </li>
  );
};

export default React.memo(PokemonAnimal);
