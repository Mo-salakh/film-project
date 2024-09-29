import nextI from '../img/next-i.png'
import { useRef } from "react"

function PopularList(props) {

    const { popularFilms, getPosterPath } = props
    let values = Object.values(popularFilms)

    const filmRef = useRef(null)

    function next() {
        filmRef.current.scrollLeft += 204
    }
    
    function prev() {
        filmRef.current.scrollLeft -= 204
    }

    return (
        <div className="popular-films-contant">
            <h2 className="h-movies_title">Popular Movies</h2>
            <ul className="h-movies_list" ref={filmRef}>
            {values.map((element, index) => {
                return (
                    <li className="h-movies_item" key={index} onClick={() => getPosterPath(element.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500${element.posterPath}`} alt={element.originalTitle} />
                    </li>
                ) 
            })}
            </ul>
            <div className="next-film" style={{backgroundImage: `url(${nextI})` }} onClick={next}></div>  
            <div className="prev-film" style={{backgroundImage: `url(${nextI})` }} onClick={prev}></div>  
        </div>
    )
}

export {  PopularList  }