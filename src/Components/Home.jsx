import HeroBox from './HeroBox'
import Navbar from './Navbar'
import Footer from './Footer';
import useFetch from './useFetch';
import { useState } from 'react';
import Card from './Card';

// https://api.themoviedb.org/3/movie/top_rated?api_key=850136383d9112b1fa4ef05d1d27c587

const Home = () => {
    
    
   const {data:movieLists, error, loading} = useFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=850136383d9112b1fa4ef05d1d27c587')
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