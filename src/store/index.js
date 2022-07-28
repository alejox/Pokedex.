import { configureStore } from '@reduxjs/toolkit';
import pokemons from './slices/pokemons.slices';

export default configureStore({
  reducer: {
    pokemons
	}
})