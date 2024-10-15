import { useState } from 'react'
import addI from '../img/add-i.png'
import { Link } from 'react-router-dom'

function MoviesList(props) {    
    const { films, getFavorite } = props
    const [added, setAdded] = useState({})

    function handleClick(id) {
        getFavorite(id)
        setAdded(prevElement => ({
            ...prevElement,
            [id]: true
        }))
    }

    return (
        <ul className="movies_list">
                {films.map((film, index) => {
                    return (
                        <>
                            <li className="movies_item"  key={index}>
                                <Link to={`film/${film.id}`}>                
                                <img className="movies_img" src={`https://image.tmdb.org/t/p/w500${film.posterPath}`} alt={film.originalTitle} />
                                </Link>
                                <div className="movies_rating"><p>{film.voteAverage}</p></div>
                                <p className="movies_title">{film.originalTitle}</p>
                                <div className="add_to-list" onClick={() => handleClick(film.id)}>
                                {added[film.id] ? <button>Added</button> : <><span style={{backgroundImage:`url(${addI})`}}></span> <button>Add to favorites</button> </> }
                                </div>
                            </li>
                        </>
                    )
                })}
        </ul>
    )
}


export {  MoviesList  }