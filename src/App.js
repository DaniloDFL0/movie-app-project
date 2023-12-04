import { Routes, Route } from "react-router-dom"

import Movies from "./pages/Movies"
import Genres from "./pages/Genres"
import TvShows from "./pages/TvShows"
import Trends from "./pages/Trends"

import Layout from "./components/Layout"

import { useState, createContext } from "react"

export const AppContext = createContext()

const App = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <AppContext.Provider value={{inputValue, setInputValue}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Movies />}/>
            <Route path="tvshows" element={<TvShows />}/>
            <Route path="trending" element={<Trends />}/>
            <Route path="genres" element={<Genres />}/>
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
