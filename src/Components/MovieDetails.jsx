import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import img from '../assets/tv.svg'
import img1 from  '../assets/Home.svg'
import img2 from '../assets/Movie Projector.svg'
import img3 from '../assets/TV Show.svg'
import img4 from '../assets/Calendar.svg'
import img5 from '../assets/Star.svg'
import img6 from '../assets/List.svg'
import img7 from '../assets/Logout.svg'
import poster from '../assets/Rectangle 37.png'

const MovieDetails = () => {

  const {id} = useParams();
  const {data:movie, loading, error} = useFetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=850136383d9112b1fa4ef05d1d27c587')
  console.log(movie)

  return (
    <div className='movie-details-page'>
        {loading && <div>Loading...</div> }
        {error && <div>{error}</div>}
        {movie && (
          <div className='movie-details'>
            <div className='left-sidebar'>
              <a href='https' className='official-logo'><img src={img} alt='w'/><h2>MovieBox</h2></a>
              <div className='sidebar-links'>
                <a href='http'><img src={img1} alt='w'/><span>Home</span></a>
                <a href='http'><img src={img2} alt='w'/><span>Movies</span></a>
                <a href='http'><img src={img3} alt='w'/><span>TV series</span></a>
                <a href='http'><img src={img4} alt='w'/><span>Upcoming</span></a>
              </div>
              <div className='advert'>
                <p>Play movie quizes and earn free tickets</p>
                <span>For people are playing now</span>
                <a href='https' className='start-btn'>start playing</a>
              </div>
              <a className='log-out' alt='https'><img src={img7} alt='w'/> <span>Log out</span></a>
            </div>
            <div className='main-content'>
              <div className='main-row1'>
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}` } className='backpage-poster'></img>
                </div>
                <p data-testid='movie-title'>{movie.title} . <span data-testid='movie-release-date'>{movie.release_date}</span></p>
              </div>
              <div className='main-row2'>
                <div className='sub-row1'>
                  <p className='overview' data-testid='movie-overview'>{movie.overview}</p>
                  <p>Director: Joseph Kosinaki</p>
                  <p>Writers: Jim Cash, Jack Epps jr, Peter Craig</p>
                  <p>Stars: Tom Cruise, Jenifer Conolly, Miles Tailor</p>
                  <div>
                    <button>Top rated movie #65</button>
                    <p>Awards 9 nominations</p>
                  </div>
                </div>
                <div className='sub-row2'>
                  <div className='explore-btns'>
                    <a href='http'>See showtimes</a>
                    <a href='http'>More watch options</a>
                  </div>
                  
                  <div className='mixed-posters'>
                    <img src={poster} alt='hhh'/>
                    <a alt='https' className='attribute'><img src={img6} /> <span>The best movies and shows in september</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
    </div>
  )
}

export default MovieDetails