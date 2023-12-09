import { useOutletContext } from "react-router-dom"

const Cast = () => {
  const { movieCredits } = useOutletContext()
  const cast = movieCredits?.cast || []
  console.log(cast)

  return (
    <div className="mt-5">
        <div className="flex flex-wrap gap-5 max-lg:pl-6">
            {cast.map((actor) => (
                <div key={actor.id} className="max-w-[150px]">
                    <img className="rounded-xl" src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : `https://via.placeholder.com/200x300`} alt={`No image for author`}/>
                    <h2 className="text-center text-white font-roboto text-lg mt-2">{actor.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cast