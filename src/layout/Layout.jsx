import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { API_KEY } from "../config";
import { Favorites } from "../components/Favorites";

function Layout() {

    const [popularFilms, setPopularFilms] = useState([])
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([])
    const [isClicked, setClicked] = useState(false)

    useEffect(() =>  {
        fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=12&sort_by=popularity.desc', {
            headers: {
                "Authorization":API_KEY
            }
        })
        .then(respo => respo.json()) 
        .then(result => setPopularFilms(result.results.splice(9,).map(element => {
            return {
                originalTitle: element.original_title,
                overview: element.overview,
                voteAverage: element.vote_average,
                releaseDate: element.release_date,
                genreIds: element.genre_ids,
                posterPath: element.poster_path,
                backdropPath: element.backdrop_path,
                id : element.id
            }
        })))
        .catch(err => console.error(err.message))
        .finally(() => {
            setLoading(false)
        })
    }, [])


    useEffect(() => {
        fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
                "Authorization":API_KEY
            }
        })
        .then(respo => respo.json()) 
        .then(result => setFilms(result.results.splice(7,).map(element => {
            return  {
                originalTitle: element.original_title,
                overview: element.overview,
                voteAverage: element.vote_average,
                releaseDate: element.release_date,
                genreIds: element.genre_ids,
                posterPath: element.poster_path,
                backdropPath: element.backdrop_path,
                id : element.id
            }
        })))
        .catch(err => console.error(err.message))
        .finally(() => {
            setLoading(false)
        })
    },[])

    if(loading) return (
        <div className="loader"></div>
    )

    function getFavorite(id) {
        const isFavorite = favorites.some(film => film.id === id);
        
        if (!isFavorite) {
            const choosedFilm = films.find(film => film.id === id);
            if (choosedFilm) {
                const newFavoriteFilm = {
                    ...choosedFilm
                };
                setFavorites(prevFilm => [...prevFilm, newFavoriteFilm]);
            }
        }
    }
    function removeFavorite(id) {
        setFavorites(favorites.filter(favorite => favorite.id !== id))
    }

    return (
        <>
        <Header popularFilms={popularFilms} favorites={favorites} setClicked={setClicked} isClicked={isClicked}/>
        {isClicked ? <Favorites favorites={favorites} removeFavorite={removeFavorite} setClicked={setClicked} isClicked={isClicked}  /> : null}    
        <Main films={films} getFavorite={getFavorite}/>
        </>
    );


}

export { Layout };

