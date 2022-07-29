import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="bg-white w-80">
      <h2>{pokemon?.name}</h2>
      <img src={pokemon?.sprites.other[official-artwork].front_default} alt="" />
    
    
    
    </div>
  )
}

export default PokeCard