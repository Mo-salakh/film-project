import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { PopularFilmInfo } from "../components/PopularFilmInfo";
import { PopularList } from "../components/PopularList";
import { useNavigate } from "react-router-dom";

function Header(props) {

    let { popularFilms, favorites, setClicked, isClicked } = props
    const [initialFilm, setInitialFilm] = useState([])
    const [posterPath, setPosterPath] = useState('')
    const [popularFilminfo, setPopularFilmInfo] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        popularFilms.map((film,index) => {
           return setInitialFilm(popularFilms[0])
        })
    }, [popularFilms])


    function getPosterPath(id) {
        const film = popularFilms.find(film => film.id === id)
        if(film) {
            setPosterPath(film.backdropPath)
            setPopularFilmInfo(film)
        }
    } 

    function navigateToPopularFilm() {
        console.log(popularFilminfo)
        navigate(`/film/${popularFilminfo.id}`);
       
    }

    return (
        <header className="header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath ? posterPath : initialFilm.backdropPath})` }} onClick={navigateToPopularFilm}>
            <Navbar favorites={favorites} setClicked={setClicked} isClicked={isClicked} />
            <PopularFilmInfo popularFilminfo={popularFilminfo} initialFilm={initialFilm} />
            <PopularList popularFilms={popularFilms} getPosterPath={getPosterPath}/>
        </header>
    )
}

export {  Header  }


// style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}