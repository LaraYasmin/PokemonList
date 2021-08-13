import React, { useState, useContext } from 'react';

const AppContext = React.createContext({
  pokemons: [],
  selectedPokemon: null,
})

export const AppProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  
  const pokemonListHandler = (pokemonsList) => setPokemons(pokemonsList);
  const pokemonSelectHandler = (name) => setSelectedPokemon(name);

  return (
    <AppContext.Provider 
      value={{ 
        pokemons, 
        selectedPokemon, 
        pokemonListHandler, 
        pokemonSelectHandler 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const usePokemon = () => { 
  const context = useContext(AppContext);
  return context;
}