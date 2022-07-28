import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonsSlices = createSlice({
  name: 'pokemons',
  initialState: [],
  reducers: {
    setPokemonGlobal: (state, action) => action.payload
  }
})

export const { setPokemonGlobal } = pokemonsSlices.actions;

//Thunk

export const getAllPokemons = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((res) => dispatch(setPokemonGlobal(res.data.results)))
        .catch(err => console.log(err));
        //.finally(() => dispatch(setIsLoading(false)));
}

export default pokemonsSlices.reducer;