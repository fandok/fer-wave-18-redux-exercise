import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data.results;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const pokemonReducer = pokemonSlice.reducer;

export default pokemonReducer;
