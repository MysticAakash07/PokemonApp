// getPokemonImages.ts
export const importImages = (imageGlob: Record<string, any>) => {
  const images: Record<string, string> = {}

  for (const path in imageGlob) {
    const fileName = path.split("/").pop()?.split(".")[0] || ""
    images[fileName] = imageGlob[path].default
  }

  return images
}

// Vite's import.meta.glob for default and shiny Pokémon images
export const images = importImages(
  import.meta.glob("../assets/pokemons/shiny/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
)

export const defaultImages = importImages(
  import.meta.glob("../assets/pokemons/default/*.{png,jpg,jpeg,svg}", {
    eager: true,
  }),
)
