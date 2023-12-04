import { getMovieGenres, getMoviesByGenre } from "../api"

import { useState, useEffect } from "react"

import Button from "../components/Button"

const Genres = () => {
  const [movieGenres, setMovieGenres] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [moviesByGenre, setMoviesByGenre] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieGenres()

      const slicedData = data.slice(0, 5)
      const slicedData2 = data.slice(8, 9)
      const slicedData3 = data.slice(13, 14)

      setMovieGenres(slicedData.concat(slicedData2, slicedData3))
      console.log(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMoviesByGenre(selectedMovie)
      setMoviesByGenre(data)
      console.log(data)
    }

    fetchData()
  }, [selectedMovie])

  const handleClick = (genreId) => {
    setSelectedMovie(genreId)
  }

  return (
    <div className="pt-32">
      <div className="max-w-6xl px-8 mx-auto max-md:px-12 flex flex-wrap gap-3">
        {movieGenres.map((movieGenre) => (
          <Button key={movieGenre.id} genreName={movieGenre.name} handleClick={() => handleClick(movieGenre.id)}/>
        ))}
      </div>
      <div>
        {selectedMovie && moviesByGenre.map((movieByGenre) => (
          <div key={movieByGenre.id} className="text-white">{movieByGenre.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Genres