import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { API_KEY , getPopularFilms, getRatedFilms } from "../config";

function Layout() {

    const [popularFilms, setPopularFilms] = useState([])
    const [films, setFilms] = useState([])

    useEffect(() =>  {
        fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
                "Authorization":'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDE0YjY5M2UxZjM2ZjdiY2UyMTY4ZGEyMTg2MmNiNiIsIm5iZiI6MTcyNzQ3MDU0NC45NTEyNjIsInN1YiI6IjY2ZjZmODU5Njc1Nzk4ZTkyZTkxZmU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UeJh7WOuE_PfSupWyrpnjbRhfx9kEgCjsJcftth5DiQ'
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
    }, [])


    useEffect(() => {
        
    },[])

    return (
        <>
        <Header popularFilms={popularFilms} />
        <Main films={films} />
        <Footer />
        </>
    );


}

export { Layout };