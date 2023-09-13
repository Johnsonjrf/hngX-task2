import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies/:id' element={<MovieDetails />}/>
       </Routes>
    </div>
  );
}

export default App;
