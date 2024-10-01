import addI from '../img/add-i.png'
import { Link } from 'react-router-dom'

function MoviesList(props) {    
    const { films } = props

    return (
        <ul className="movies_list">
                {films.map((film, index) => {
                    return (
                        <>
                        <Link to={`film/${film.id}`} key={index}>                
                            <li className="movies_item">
                                <img className="movies_img" src={`https://image.tmdb.org/t/p/w500${film.posterPath}`} alt={film.originalTitle} />
                                <div className="movies_rating"><p>{film.voteAverage}</p></div>
                                <p className="movies_title">{film.originalTitle}</p>
                                <div className="add_to-list"><span style={{backgroundImage: `url(${addI})` }}></span><button>Add to my list</button></div>
                            </li>
                        </Link>
                        </>
                    )
                })}
        </ul>
    )
}


export {  MoviesList  }