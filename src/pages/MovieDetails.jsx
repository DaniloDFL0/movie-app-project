import { useParams, NavLink, Link, Outlet } from "react-router-dom"

import { useState, useEffect } from "react"

import { getMovieDetailsById, getMovieCredits } from "../api"

import { FaArrowDown, FaArrowUp, FaArrowLeft } from "react-icons/fa"

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([])  
  const [movieCredits, setMovieCredits] = useState([])
  const [formatRuntime, setFormatRuntime] = useState("")
  const [isCast, setIsCast] = useState(false)
  const [showOutlet, setShowOutlet] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
        const data = await getMovieDetailsById(id)
        setMovieData(data)
        
        if(data.runtime && data.release_date){
            const hours = Math.floor(data.runtime / 60)
            const minutes = data.runtime % 60
            const year = data.release_date.slice(0, 4)

            setFormatRuntime(`${hours} h ${minutes} min, ${year}`)
        }
    }

    fetchData()
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
        const data = await getMovieCredits(id)
        setMovieCredits(data)
    }

    fetchData()
  }, [id])

  setTimeout(() => {
    setShowOutlet(true)
  }, 2000)

  return (
    <div className="pt-36 pb-10">
        <div className="max-w-7xl mx-auto bg-slate-900 pb-32 pt-20 xl:px-32 max-xl:px-20 rounded-xl relative">
            <Link to=".." className="flex items-center gap-3 text-white font-roboto text-xl absolute top-5 left-8"><FaArrowLeft size={20}/> Back to movies</Link>
            <div className="flex gap-10 max-xl:flex-col">
                <div className="text-white flex gap-20 max-xl:flex-col-reverse">
                    <div className="font-roboto text-right max-xl:text-left">
                        <h1 className="uppercase text-2xl tracking-wide mb-2">genre</h1>
                        {movieData.genres && (
                            <ul className="max-xl:flex max-xl:flex-wrap gap-2">
                                {movieData.genres.map((genre) => (
                                    <li key={genre.id} className="text-2xl font-light tracking-wide">{genre.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="font-roboto">
                        <h1 className="text-4xl">{movieData.title}</h1>
                        <p className="mt-4 text-2xl">{formatRuntime}</p>
                        <p className="font-light text-xl mt-5 leading-relaxed mb-8">{movieData.overview}</p>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl border inline px-4 py-3 rounded-full">{movieData.status}</h2>
                            <h2 className="text-2xl">{movieData.release_date}</h2>
                        </div>
                    </div>
                </div>
                <img className="w-[320px] rounded-xl" src={movieData.poster_path && `https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="No image" />
            </div>
            <div className="mt-10">
                <div className="text-white font-roboto text-2xl">
                    <ul className="flex gap-10">
                        <li>
                            <button onClick={() => setIsCast(!isCast)}>
                                <NavLink to="." className={`flex items-center gap-2 transform duration-100 ease-in-out ${isCast ? "text-amber-500" : "text-white"}`}>Cast {isCast ? <FaArrowUp size={20}/> : <FaArrowDown size={20}/>}</NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
                {isCast && showOutlet && (<Outlet context={{ movieCredits }}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieDetails