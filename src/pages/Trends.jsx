import { getTrendingMoviesByWeek, getTrendingMoviesByDay, getTrendingTvShowsByWeek, getTrendingTvShowsByDay } from "../api"

import { useState, useEffect } from "react"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { AiFillPlayCircle } from "react-icons/ai"

const Trends = () => {
    const [weekMovies, setWeekMovies] = useState([])
    const [dayMovies, setDayMovies] = useState([])
    const [weekTvShows, setWeekTvShows] = useState([])
    const [dayTvShows, setDayTvShows] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTrendingMoviesByWeek()
        setWeekMovies(data)
        console.log(data)
      }

      fetchData()
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTrendingMoviesByDay()
        setDayMovies(data)
      }

      fetchData()
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTrendingTvShowsByWeek()
        setWeekTvShows(data)
      }

      fetchData()
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getTrendingTvShowsByDay()
        setDayTvShows(data)
      }

      fetchData()
    }, [])


    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
      },
      largeDesktop: {
        breakpoint: { max: 3000, min: 2000 },
        items: 7
      },
      desktop: {
        breakpoint: { max: 2000, min: 1316 },
        items: 6
      },
      tablet: {
        breakpoint: { max: 1316, min: 1090 },
        items: 5
      },
      mobile1: {
        breakpoint: {max: 1090, min: 852},
        items:4
      },
      mobile2: {
        breakpoint: {max: 852, min: 650},
        items:3
      },
      mobile3: {
        breakpoint: {max: 650, min: 435},
        items:2
      },
      mobile4: {
        breakpoint: {max: 435, min: 0},
        items:1
      },
    };

    return (
      <div className="pt-36 pb-10 max-w-[105rem] mx-auto">
        <h1 className="text-4xl font-roboto text-white mb-4 text-center">Trending for Movies</h1>
        <div>
          <h1 className="text-3xl font-roboto mb-4 text-white">Weekly Trending</h1>
          <Carousel responsive={responsive}>
            {weekMovies.map((weekMovie) => (
              <div key={weekMovie.id} className="w-[200px] relative">
                <img className="h-[300px]" src={weekMovie.poster_path && `https://image.tmdb.org/t/p/w200${weekMovie.poster_path}`}/>
                <AiFillPlayCircle size={45} className="absolute bottom-7 left-5 text-white rounded-full"/>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-roboto mb-4 text-white">Trending Today</h1>
          <Carousel responsive={responsive}>
              {dayMovies.map((dayMovie) => (
                <div key={dayMovie.id} className="w-[200px] relative">
                  <img className="h-[300px]" src={dayMovie.poster_path && `https://image.tmdb.org/t/p/w200${dayMovie.poster_path}`}/>
                  <AiFillPlayCircle size={45} className="absolute bottom-7 left-5 text-white rounded-full"/>
                </div>
              ))}
          </Carousel>
        </div>
        <h1 className="text-4xl font-roboto text-white mt-16 mb-4 text-center">Trending for TV Shows</h1>
        <div>
          <h1 className="text-3xl font-roboto mb-4 text-white">Weekly Trending</h1>
          <Carousel responsive={responsive}>
              {weekTvShows.map((weekTvShow) => (
                <div key={weekTvShow.id} className="w-[200px] relative">
                  <img className="h-[300px]" src={weekTvShow.poster_path && `https://image.tmdb.org/t/p/w200${weekTvShow.poster_path}`}/>
                  <AiFillPlayCircle size={45} className="absolute bottom-7 left-5 text-white rounded-full"/>
                </div>
              ))}
          </Carousel> 
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-roboto mb-4 text-white">Trending Today</h1>
          <Carousel responsive={responsive}>
              {dayTvShows.map((dayTvShow) => (
                <div key={dayTvShow.id} className="w-[200px] relative">
                  <img className="h-[300px]" src={dayTvShow.poster_path && `https://image.tmdb.org/t/p/w200${dayTvShow.poster_path}`}/>
                  <AiFillPlayCircle size={45} className="absolute bottom-7 left-5 text-white rounded-full"/>
                </div>
              ))}
          </Carousel> 
        </div>
      </div>
    )
  }
  
  export default Trends