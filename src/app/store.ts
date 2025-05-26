import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    // Add your slices here later, e.g. pokemon: pokemonReducer
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
