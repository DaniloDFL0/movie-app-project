import { useOutletContext } from "react-router-dom"

const TvShowSeasons = () => {
  const { tvShowData } = useOutletContext()

  return (
    <div className="mt-4">
        <div className="flex flex-wrap gap-5">
            {tvShowData.seasons && tvShowData.seasons.map((season) => (
                <div key={season.id} className="max-w-[200px]">
                    <img className="rounded-xl" src={season.poster_path ? `https://image.tmdb.org/t/p/w200${season.poster_path}` : `https://via.placeholder.com/200x300`}/>
                    <p className="text-lg text-white font-roboto text-center">{season.name}</p>
                    <p className="text-lg text-white font-roboto text-center">Air date: {season.air_date}</p>
                    <p className="text-lg text-white font-roboto text-center">Episodes: {season.episode_count}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TvShowSeasons