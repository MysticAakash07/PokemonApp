import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { removeFromCompare } from "../app/slices/PokemonSlice"
import { pokemonTypes } from "../utils/getPokemonTypes"
import {
  userPokemonsType,
  pokemonTypeInterface,
  pokemonStatType,
} from "../utils/Types"
import { FaPlus } from "react-icons/fa"
import { addPokemonToList } from "../app/reducers/addPokemonToList"

function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType
  isEmpty?: boolean
}) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const createStatsArray = (
    types: pokemonTypeInterface[] = [],
    statType: pokemonStatType,
  ) => {
    const statsArray: { name: string; image: string }[] = []
    const statsSet = new Set<string>()

    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0]
      const statList = type[key]?.[statType]

      if (Array.isArray(statList)) {
        statList.forEach((stat: string) => {
          // @ts-ignore
          const typeData = pokemonTypes[stat]
          if (!statsSet.has(stat) && typeData) {
            statsArray.push({ name: stat, image: typeData.image })
            statsSet.add(stat)
          }
        })
      }
    })

    return statsArray
  }

  const getStats = () => {
    if (!pokemon?.types) return null
    return (
      <>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Strength</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "strength").map(
              (stat: { image: string }, idx: number) => (
                <div className="pokemon-type" key={idx}>
                  <img
                    src={stat.image}
                    alt="Pokemon Type"
                    className="pokemon-type-image"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Resistance</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "resistance").map(
              (stat: { image: string }, idx: number) => (
                <div className="pokemon-type" key={idx}>
                  <img
                    src={stat.image}
                    alt="Pokemon Type"
                    className="pokemon-type-image"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Vulnerable</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "vulnerable").map(
              (stat: { image: string }, idx: number) => (
                <div className="pokemon-type" key={idx}>
                  <img
                    src={stat.image}
                    alt="Pokemon Type"
                    className="pokemon-type-image"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Weakness</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types, "weakness").map(
              (stat: { image: string }, idx: number) => (
                <div className="pokemon-type" key={idx}>
                  <img
                    src={stat.image}
                    alt="Pokemon Type"
                    className="pokemon-type-image"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Add Pokemon to Comparison</h3>
        </div>
      )}
      {pokemon && (
        <div className="compare-element">
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon.name}</h3>
              <img
                src={pokemon?.image}
                alt="pokemon"
                className="compare-image"
              />
            </div>
            <div className="pokemon-types-container">
              <div className="pokemon-types">
                <h4 className="pokemon-type-title">Type</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type)
                      return (
                        <div className="pokemon-type" key={index}>
                          <img
                            src={type[keys[0]].image}
                            alt="pokemon type"
                            className="pokemon-type-image"
                          />
                        </div>
                      )
                    },
                  )}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="compare-actions-buttons">
            <button
              className="compare-btn"
              onClick={() => dispatch(addPokemonToList(pokemon))}
            >
              Add
            </button>
            <button
              className="compare-btn"
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            >
              View
            </button>
            <button
              className="compare-btn"
              onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CompareContainer
