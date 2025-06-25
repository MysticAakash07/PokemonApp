import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { getDocs, query, where } from "firebase/firestore"
import { pokemonListRef } from "../../utils/FirebaseConfig"
import { userPokemonsType } from "../../utils/Types"
import { defaultImages, images } from "../../utils/getPokemonImages"
import { pokemonTypes } from "../../utils/getPokemonTypes"

export const getUserPokemons = createAsyncThunk(
  "pokemon/userList",
  async (args, { getState }) => {
    try {
      const {
        app: { userInfo },
      } = getState() as RootState
      if (!userInfo || !userInfo.email) {
        return
      }
      const fireStoreQuery = query(
        pokemonListRef,
        where("email", "==", userInfo.email),
      )

      const fetchedPokemon = await getDocs(fireStoreQuery)

      if (fetchedPokemon.docs.length > 0) {
        const userPokemons: userPokemonsType[] = []
        fetchedPokemon.forEach(async pokemon => {
          const pokemons = await pokemon.data().pokemon
          let image = images[pokemons.id]
          if (!image) {
            image = defaultImages[pokemons.id]
          }
          const types = pokemons.types.map((name: string) => ({
            // @ts-ignore
            [name]: pokemonTypes[name],
          }))

          userPokemons.push({
            ...pokemons,
            firebaseId: pokemons.id,
            image,
            types,
          })
        })
        return userPokemons
      }
      return []
    } catch (err) {
      console.log(err)
    }
  },
)
