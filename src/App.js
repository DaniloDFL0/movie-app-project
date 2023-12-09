import { Routes, Route } from "react-router-dom"

import Movies from "./pages/Movies"
import Genres from "./pages/Genres"
import TvShows from "./pages/TvShows"
import Trends from "./pages/Trends"
import GenreMovies from "./pages/GenreMovies"
import MovieDetails from "./pages/MovieDetails"
import Cast from "./pages/Cast"
import TvShowDetails from "./pages/TvShowDetails"
import TvShowSeasons from "./pages/TvShowSeasons"

import Layout from "./components/Layout"
import TvShowLayout from "./components/TvShowLayout"

import { useState, createContext } from "react"

export const AppContext = createContext()

const App = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <AppContext.Provider value={{inputValue, setInputValue}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />} />
            <Route path="movie/:id" element={<MovieDetails />}>
              <Route index element={<Cast />}/>
            </Route>
            <Route path="tvshows" element={<TvShowLayout />}>
              <Route index element={<TvShows />}/>
              <Route path=":id" element={<TvShowDetails />}>
                <Route index element={<TvShowSeasons />}/>
              </Route>
            </Route>
            <Route path="trending" element={<Trends />}/>
            <Route path="genres" element={<Genres />}>
              <Route path=":id" element={<GenreMovies />}/>
            </Route>
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
