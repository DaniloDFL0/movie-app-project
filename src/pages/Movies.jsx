import { getMovies } from "../api"

import { useState, useEffect, useContext } from "react"

import { AppContext } from "../App"

const Movies = () => {
  const [moviesData, setMoviesData] = useState([])
  const { inputValue } = useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies(inputValue)
      setMoviesData(data)
      console.log(data)
    }

    fetchData()
  }, [inputValue])

  return (
    <div className="pt-36 pb-10 max-w-[96rem] mx-auto grid grid-cols-4 gap-y-12 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center">
      {moviesData.map((movieData) => (
        <div key={movieData.id} className="w-[300px]">
          <div className="relative">
            <img className="rounded-xl w-full h-[500px]" src={movieData.poster_path && `https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={`No image found for ${movieData.title}`}/>
          </div>
          <h2 className="text-xl font-roboto break-words mt-3 font-medium text-center text-white">{movieData.title}</h2>
        </div>
        )
      )}
    </div>
  )
}

export default Movies