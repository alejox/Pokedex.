
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons } from '../../store/slices/pokemons.slices';
import pokedexImg from '../../assets/img/pokedex.png'
import PokeCard from './PokeCard';



const Pokedex = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons()); 
  }, [ dispatch ]);


  const pokemons = useSelector(state => state.pokemons) 

  return (

    <div className='h-screen align-middle'>
      <img className='w-80 mt-10' src={pokedexImg} alt="" />
      
      {pokemons?.map(pokemon => (

        <PokeCard 
        key={pokemon.url}
        url={pokemon.url}
        />

      ))}

    </div>
  )
}


export default Pokedex