// import React, {
//     useEffect,
//     useState,
//     useContext
//   } from 'react';
// import { useParams } from 'react-router-dom';
// import AppContext from '../../AppContext/Context';
// import './Evolutions.css';
  
//   const PokemonEvolutions = () => {
//     const { setToPokelist } = useContext(AppContext);
//     const [evolutions, setEvolutions] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//       fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
//         .then((r) => r.json())
//         .then((rPokemon) => {
//           setToPokelist(rPokemon);
//           setEvolutions(rPokemon);
//         });
//     }, [id, setToPokelist]);
//     console.log(fetch)

//     if (!evolutions) {
//       return null;
//     }
    
//     return (
//      <div className="PokemonEvolutions">
//          <h1>{evolutions.id}</h1>
//           <h3>Evolutions</h3>
//           {/*<ul className="PokemonView__EvolutionChain">
//             {evolutions.chain.evolves_to.map((evolves) => (
//             <li>{evolves.chain.species}</li>
//           ))}
//             </ul>*/}
//     </div>
//     );
//   };
  
// export default PokemonEvolutions;