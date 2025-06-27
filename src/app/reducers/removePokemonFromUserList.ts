import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteDoc, doc } from "firebase/firestore"
import { pokemonListRef } from "../../utils/FirebaseConfig"

export const removePokemonFromUserList = createAsyncThunk(
  "pokemon/remove",
  async ({ id }: { id: string }) => {
    console.log(id);
    try {
      await deleteDoc(doc(pokemonListRef, id))
      return { id }
    } catch (err) {
      console.log(err)
    }
  },
)