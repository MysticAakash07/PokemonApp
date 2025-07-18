import { createSlice } from "@reduxjs/toolkit"
import {
  PokemonTypeInitialState,
  generatedPokemonType,
} from "../../utils/Types"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"
import { getPokemonData } from "../reducers/getPokemonData"
import { getUserPokemons } from "../reducers/getUserPokemons"
import { removePokemonFromUserList } from "../reducers/removePokemonFromUserList"

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
  currentPokemon: undefined,
}

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id,
      )

      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop()
        }
        state.compareQueue.unshift(action.payload)
      }
    },

    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id,
      )

      const queue = [...state.compareQueue]
      queue.splice(index, 1)
      state.compareQueue = queue
    },
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload
    })
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      state.userPokemons = action.payload!
    })
    builder.addCase(removePokemonFromUserList.fulfilled, (state, action) => {
      if (!action.payload?.id) {
        console.warn("No valid ID in removePokemonFromUserList payload")
        return
      }
      const userPokemons = [...state.userPokemons]
      const index = userPokemons.findIndex(
        pokemon => pokemon.firebaseId === action.payload?.id,
      )
      if (index !== -1) {
        console.log("Deleted pokeom")
        state.userPokemons.splice(index, 1)
      } else {
        console.warn("Pokemon not found in userPokemons with that firebaseId")
      }
      state.userPokemons = userPokemons
    })
  },
})

export const { addToCompare, removeFromCompare, setCurrentPokemon } =
  PokemonSlice.actions
