import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { API_KEY } from "../config";

function Layout() {

    const [popularFilms, setPopularFilms] = useState([])
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>  {
        fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc', {
            headers: {
                "Authorization":API_KEY
            }
        })
        .then(respo => respo.json()) 
        .then(result => setPopularFilms(result.results.splice(0,14).map(element => {
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
        fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc', {
            headers: {
                "Authorization":API_KEY
            }
        })
        .then(respo => respo.json()) 
        .then(result => setFilms(result.results.splice(0,14).map(element => {
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

    return (
        <>
        <Header popularFilms={popularFilms} />
        <Main films={films}/>
        </>
    );


}

export { Layout };

