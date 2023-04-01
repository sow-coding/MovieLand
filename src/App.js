import {useState, useEffect} from 'react'
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from './MovieCards'


/*6bf8f369*/

const apiUrl = "https://omdbapi.com?apikey=6bf8f369"

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        searchMovie("Batman")
    }, [])

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json()
    
        setMovies(data.Search)
    }

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input placeholder='Search for movies' 
                value={searchTerm} 
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
            
                <img src={SearchIcon} alt='search' onClick={() => {
                    searchMovie(searchTerm)
                }}/>

            </div>
        
        {           
           movies?.length > 0
            ? (
            <div className='container'>
               {movies.map((movie) => (
                <MovieCard movie={movie}/>
               ))}
            </div>
            ) : (
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            )
             
        }



        </div>
        
        )
}

export default App