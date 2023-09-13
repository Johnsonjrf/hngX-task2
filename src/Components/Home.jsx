// import React, { useEffect, useState } from 'react'
import HeroBox from './HeroBox'
import Navbar from './Navbar'
// import MovieList from './MovieList'
import image from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png';
import image1 from '../assets/PngItem_1381056 1.svg';
import Footer from './Footer';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from 'react';
import Card from './Card';



const Home = () => {
    
    // include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
    
   const {data:movieLists, error, loading} = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=850136383d9112b1fa4ef05d1d27c587')
    // console.log(movieLists)
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <div className='container'>
        <div className='hero-section'>
            <Navbar />
            <HeroBox />
        </div>
        <div className='movie-list'>
            <div className='movie-list-heading'>
                <h2>Features Movie</h2>
                <a href='https'>See more</a>
            </div>
                {loading && <h2>Loading...</h2>}
                <h2>{error}</h2>
            <div className='movieList-containers'>

                <Card movieLists={movieLists} isClicked={isClicked} handleClick={handleClick}/>
            </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default Home