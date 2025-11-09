
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomPage';
import PokemonListPage from './components/PokemonListPage/PokemonListPage';
import PokemonDetailPage from './components/PokemonDetailPage/PokemonDetailPage';
import { useEffect, useState } from 'react';
import type { Pokemon, PokemonRoot } from './types';

function App() {
 
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  const getIdFromUrl = (url : string) : number => {
    return Number(url.replace("https://pokeapi.co/api/v2/pokemon/","").substring(-1))
  }

  const loadPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data : PokemonRoot = await response.json();
    setPokemon(data.result.map((pokemon) => {
      return {...pokemon, id: getIdFromUrl(pokemon.url!)}
    }))
  }

  useEffect(() => {
    loadPokemon()
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        },
        {
          path: "pokemon",
          element: <PokemonListPage/>
        },
        {
          path: "pokemon/:id",
          element: <PokemonDetailPage/>
        }
      ]
    }
  ])

  console.log(pokemon)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;