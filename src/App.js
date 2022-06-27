import React,{useEffect,useState} from 'react';
import './App.css';
import Movie from './component/Movie';
import {BiSearchAlt} from 'react-icons/bi'
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const [search,setSearch] = useState(false)
  const [slider,setSlider] = useState(true)
  useEffect(()=>{
    getMovie(APIURL)
  },[])
  const getMovie = (API) => {
    fetch(API).then(res=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results)
    })
  }
  const handleOnsubmit = (e) => {
    e.preventDefault()
    if(searchTerm) {
      getMovie(SEARCHAPI + searchTerm)
      setSearchTerm("")
      setSlider(false)
    }
  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleSearchClick = () => {
    setSearch(!search)
  }
  return (
    <div className='container'>
    <div className='navbar'>
      <div className='nav-left'>
        <div className='logo'>
          <a href='/'>Tilden</a>
        </div>
        <ul className='show-list'>
          <li className='show-item'>TV shows</li>
          <li className='show-item'>TV Series</li>
          <li className='show-item'>Movies</li>

        </ul>
      </div>
      <div className='nav-right'>
        <button className='btn up-btn'> upgrade</button>
      <div className='search-block'>
          <div className='search-btn' onClick={handleSearchClick}>
          <BiSearchAlt/>
          </div>
        {search && <form onSubmit={handleOnsubmit}>
          <input className='search' type='text' placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
        </form>}
        </div>
      </div>
      </div>
      {slider && <ImageSlider slides={SliderData} />}
    <div className="movie-container">
      {
        movies.length>0 &&
        movies.map((movie)=>(<Movie {...movie} key={movie.id} slider={slider}/>))
      }
    </div>
    </div>
  );
}

export default App;

// #db0000,#000000,#ffffff,#564d4d,#831010