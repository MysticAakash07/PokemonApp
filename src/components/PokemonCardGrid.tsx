import { pokemonTypeInterface, userPokemonsType } from "../utils/Types"
import { IoGitCompare } from "react-icons/io5"
import { FaPlus, FaTrash } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { addToCompare, setCurrentPokemon } from "../app/slices/PokemonSlice"
import { setPokemonTab, setToast } from "../app/slices/AppSlice"
import { addPokemonToList } from "../app/reducers/addPokemonToList"
import { removePokemonFromUserList } from "../app/reducers/removePokemonFromUserList"
import { pokemonTabs } from "../utils/Constants"

function PokemonCardGrid({ pokemons }: { pokemons: userPokemonsType[] }) {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsType) => (
            <div className="pokemon-card" key={data.id}>
              <div className="pokemon-card-list">
                {location.pathname.includes("/pokemon") ||
                location.pathname.includes("/search") ? (
                  <FaPlus
                    className="plus"
                    onClick={() =>
                      dispatch(
                        addPokemonToList({
                          ...data,
                          types: Array.isArray(data.types)
                            ? data.types
                            : [data.types],
                        }),
                      )
                    }
                  />
                ) : (
                  <FaTrash
                    className="trash"
                    onClick={async () => {
                      await dispatch(
                        removePokemonFromUserList({ id: data.firebaseId! }),
                      )
                      dispatch(setToast("Pokemon removed successfully"))
                    }}
                  />
                )}
              </div>
              <div className="pokemon-card-compare">
                <IoGitCompare
                  onClick={() => {
                    dispatch(addToCompare(data))
                    dispatch(setToast(`${data.name} has been Added to Compare`))
                  }}
                />
              </div>
              <h3 className="pokemon-card-title">{data.name}</h3>
              <img
                src={data.image}
                alt="pokemon image"
                className="pokemon-card-image"
                loading="lazy"
                onClick={() => {
                  dispatch(setPokemonTab(pokemonTabs.description))
                  dispatch(setCurrentPokemon(undefined))
                  navigate(`/pokemon/${data.id}`)
                }}
              />
              <div className="pokemon-card-types">
                {(Array.isArray(data.types) ? data.types : [data.types]).map(
                  (type: pokemonTypeInterface, index: number) => {
                    const keys = Object.keys(type)
                    return (
                      <div className="pokemon-card-types-type" key={index}>
                        <img
                          src={type[keys[0]].image}
                          alt="pokemon type"
                          className="pokemon-card-types-type-image"
                          loading="lazy"
                        />
                        <h6 className="pokemon-card-types-type-text">
                          {keys[0]}
                        </h6>
                      </div>
                    )
                  },
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PokemonCardGrid
