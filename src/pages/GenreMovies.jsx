import { useContext } from "react"

import { GenreContext } from "./Genres"

const GenreMovies = () => {
  const { moviesByGenre } = useContext(GenreContext)

  return (
    <div>
      <div className="max-w-7xl grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center mt-10 pb-10 gap-4 mx-auto text-white">
        {moviesByGenre.map((movieByGenre) => (
            <div key={movieByGenre.id} className="w-[300px]">
                <img className="rounded-xl" src={movieByGenre.poster_path && `https://image.tmdb.org/t/p/w300${movieByGenre.poster_path}`}/>
                <h1 className="font-roboto text-xl mt-3 text-center leading-normal break-words">{movieByGenre.title}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default GenreMovies