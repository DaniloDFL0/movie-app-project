import { HiOutlineSearch } from "react-icons/hi"

import { NavLink, useLocation } from "react-router-dom"

import { useContext } from "react"

import { AppContext } from "../App"

const NavBar = () => {
  const { inputValue, setInputValue } = useContext(AppContext)

  const location = useLocation()

  const getPlaceholderName = () => {
    switch(location.pathname) {
        case "/":
            return "Search for Movies..."
        case "/tvshows":
            return "Search for TV Shows..."
        default:
            return "Search..."
    }
  }

  return (
    <header className="bg-gray-900 w-full flex justify-between items-center py-6 px-4 fixed z-10">
        <nav>
            <ul className="flex items-center gap-5 font-roboto">
                <li className="text-3xl tracking-wider font-medium text-white"><NavLink to="/" className={({isActive}) => isActive ? "text-white" : ""}>Movie App</NavLink></li>
                <li className="text-lg tracking-wide font-normal uppercase"><NavLink to="/" className={({isActive}) => isActive ? "text-white border-b-2 py-1" : "text-amber-500"}>Movies</NavLink></li>
                <li className="text-lg tracking-wide font-normal uppercase"><NavLink to="tvshows" className={({isActive}) => isActive ? "text-white border-b-2 py-1" : "text-amber-500"}>TV Shows</NavLink></li>
                <li className="text-lg tracking-wide font-normal uppercase"><NavLink to="trending" className={({isActive}) => isActive ? "text-white border-b-2 py-1" : "text-amber-500"}>Trending</NavLink></li>
                <li className="text-lg tracking-wide font-normal uppercase"><NavLink to="genres" className={({isActive}) => isActive ? "text-white border-b-2 py-1" : "text-amber-500"}>Genres</NavLink></li>
            </ul>
        </nav>
        <div className="bg-white w-[360px] rounded-full pr-2 flex items-center">
            <input 
                type="text"
                className="font-roboto rounded-full w-full py-2 px-4 cursor-pointer text-black focus:outline-none"
                placeholder={getPlaceholderName()}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <HiOutlineSearch size={30}/>
        </div>
    </header>
  )
}

export default NavBar