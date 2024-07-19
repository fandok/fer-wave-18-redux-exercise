import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import textReducer from "./text/textSlice";
import pokemonReducer from "./pokemon/pokemonSlice";
import cmsReducer from "./cms/cmsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    pokemon: pokemonReducer,
    cms: cmsReducer,
  },
});
