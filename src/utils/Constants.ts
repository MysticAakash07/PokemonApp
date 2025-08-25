export const pokemonAPI = "https://pokeapi.co/api/v2"
export const pokemonsRoute = `${pokemonAPI}/pokemon?limit=5000`
export const pokemonRoute = `${pokemonAPI}/pokemon`
export const pokemonSpeciesRoute = `${pokemonAPI}/pokemon-species`
export const pokemonTabs = {
  description: "description",
  evolution: "evolution",
  locations: "locations",
  moves: "moves",
}
export function getOppositeColor(hex: string): string {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  return brightness > 125 ? "#000000" : "#FFFFFF"
}
