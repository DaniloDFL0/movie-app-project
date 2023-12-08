import { useParams } from "react-router-dom"

import { getTvShowDetailsById } from "../api"

import { useState, useEffect } from "react"

const TvShowDetails = () => {
  const [tvShowData, setTvShowData] = useState([])
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
        const data = await getTvShowDetailsById(id)
        setTvShowData(data)
        console.log(data)
    }

    fetchData()
  }, [id])

  return (
    <div className="pt-36 pb-10">
        <div className="max-w-7xl mx-auto bg-slate-900 pb-32 pt-20 xl:px-32 max-xl:px-20 rounded-xl relative">
        <div className="flex gap-10 max-xl:flex-col">
                <div className="text-white flex gap-20 max-xl:flex-col-reverse">
                    <div className="font-roboto text-right max-xl:text-left">
                        <h1 className="uppercase text-2xl tracking-wide mb-2">genre</h1>
                        {tvShowData.genres && (
                            <ul className="max-xl:flex max-xl:flex-wrap gap-2">
                                {tvShowData.genres.map((genre) => (
                                    <li key={genre.id} className="text-2xl font-light tracking-wide">{genre.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="font-roboto">
                        <h1 className="text-4xl">{tvShowData.name}</h1>
                        <p className="mt-4 text-2xl"></p>
                        <p className="font-light text-xl mt-5 leading-relaxed mb-8">{tvShowData.overview}</p>
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl border inline px-4 py-3 rounded-full">{tvShowData.status}</h2>
                            <h2 className="text-2xl">{tvShowData.first_air_date}</h2>
                        </div>
                    </div>
                </div>
                <img className="w-[320px] rounded-xl" src={tvShowData.poster_path && `https://image.tmdb.org/t/p/w300${tvShowData.poster_path}`} alt="No image" />
            </div>
        </div>
    </div>
  )
}

export default TvShowDetails