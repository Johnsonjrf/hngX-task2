import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import image from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import image1 from '../assets/PngItem_1381056 1.svg';

const Card = ({movieLists, isClicked, handleClick}) => {
  return (
    <div className='movieList-container' data-testid='movie-card'>
    {movieLists.map((movie) => (
                
        <div key={movie.id} >
            <div><Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie-poster' alt='poster' data-testid='movie-poster'/></Link></div>
            <div>
                <p className='favourite'>
                    <span data-testid='movie-release-date'>{movie.release_date} </span>
                    <span className={isClicked ? 'change' : 'fa-heart'} onClick={handleClick}><FaHeart /></span>
                </p>
                <p className='movie-title' data-testid='movie-title'>{movie.title}</p>
                <div className='gif-container'>
                    <div><img src={image} alt='thumbnail' /> <span>{movie.popularity}</span></div>
                    <div><img src={image1} alt='thumbnail' /> <span>{movie.popularity}</span></div>
                </div>
                <span>{movie.vote_count}</span>
            </div>
        </div>
       
   
    ))}
    </div>
  )
  
}

export default Card