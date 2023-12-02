import { getTvShows } from "../api"

import { AiFillPlayCircle } from "react-icons/ai"

import { useEffect, useState, useContext } from "react"

import { AppContext } from "../App"

const TvShows = () => {
    const [tvShowsData, setTvShowsData] = useState([])
    const { inputValue } = useContext(AppContext)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTvShows(inputValue)
        setTvShowsData(data)
        console.log(data)
      }
      
      fetchData()
    }, [inputValue])

    return (
      <div className="pt-36 pb-10 max-w-[96rem] mx-auto grid grid-cols-4 gap-y-12 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 place-items-center">
      {tvShowsData.map((tvShowData) => (
        <div key={tvShowData.id} className="w-[300px]">
          <div className="relative">
            <img className="rounded-xl w-full h-[500px]" src={tvShowData.poster_path && `https://image.tmdb.org/t/p/w500${tvShowData.poster_path}`} alt={`No image found for ${tvShowData.name}`}/>
            <AiFillPlayCircle size={45} className="absolute bottom-7 left-5 text-white rounded-full"/>
          </div>
          <h2 className="text-xl font-roboto break-words mt-3 font-medium text-center text-white">{tvShowData.name}</h2>
        </div>
      ))}
    </div>
    )
  }
  
  export default TvShows