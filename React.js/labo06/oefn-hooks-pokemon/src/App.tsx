import { useEffect, useState } from 'react'

interface PokemonProps {
  limit?: number;
}

const Pokedex = ({limit=151} : PokemonProps) => {

  const [name, setName] = useState("")
  const [pokemonList, setPokemonList] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [currentLimit, setCurrentLimit] = useState(limit)
  const [newLimit, setNewLimit] = useState(limit)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${currentLimit}`);
        const data = await response.json();
        const names = data.results.map((pokemon : any) => pokemon.name)
        setPokemonList(names)
      } catch(e) {
        console.log("fout bij fetchen van data: ", e)
      } finally {
        setLoading(false)
      }
    };

    fetchPokemon();
    
  }, [currentLimit]);


  const handleSetLimit = () => {
    setCurrentLimit(newLimit)
  }

  return(
    <>
      <label>Geef de naam van de Pokémon:</label>
      <br />
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      
      <br />
      <div>Hier de list van pokemons:</div>

      <br />
      { loading ? (

        <div>Pokemon list is loading...</div>

      ) : (
        <ul>
          {pokemonList
          .filter((pokemon) => (
            pokemon.toLowerCase().includes(name.toLowerCase())
          ))
          .map((pokemon) => (
            <li key={pokemon}>{pokemon}</li>
          ))
        }
        </ul>)
      }

      <label>Geef de limit in:</label>
      <br />
      <br />
      <input type="number" value={newLimit} onChange={(e) => setNewLimit(Number(e.target.value))}/>
      <button onClick={handleSetLimit}>submit</button>
    </>
  )
};

function App() {
  
  return (
    <>
      <Pokedex/>
    </>
  )
}

export default App
