import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { AppSlice } from "./slices/AppSlice"
import { PokemonSlice } from "./slices/PokemonSlice"

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: PokemonSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
})

// Infer RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
