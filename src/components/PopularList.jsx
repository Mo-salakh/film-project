import nextI from '../img/next-i.png'
import { useEffect, useRef, useState } from "react"

function PopularList(props) {

    const { popularFilms, getPosterPath } = props
    let values = Object.values(popularFilms)

    const filmListRef = useRef(null)
    const filmRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getPosterPath(values[currentIndex].id);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, 6000); 

        return () => clearInterval(intervalId);
    }, [currentIndex, values, getPosterPath]);

    function handleClick(id) {
        getPosterPath(id)
    }


    function next() {
        filmListRef.current.scrollLeft += 204
    }
    
    function prev() {
        filmListRef.current.scrollLeft -= 204
    }

    return (
        <div className="popular-films-contant" onClick={e => e.stopPropagation()}>
            <h2 className="h-movies_title">Popular Movies</h2>
            <ul className="h-movies_list" ref={filmListRef}>
            {values.map((element, index) => {
                return (
                    <li className="h-movies_item" ref={el => (filmRef.current = el)} tabIndex={0} onClick={() =>  handleClick(element.id)}>
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