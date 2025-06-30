import pokeballLoader from "../assets/pokeball-loader.gif"
function Loader() {
  console.log(pokeballLoader)
  return (
    <div className="loader">
      <img src={pokeballLoader} alt="Loading..." />
    </div>
  )
}

export default Loader
