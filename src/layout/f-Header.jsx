import { Link } from "react-router-dom"
import fLogo from '../img/Film-page-logo.svg'
import arrowRight from '../img/arrow-right.png'

function FHeader (props) {

    let { movie } = props
    
    return(
        <header className="f-header">
        <nav className="f-navbar">
            <ul className="f-navbar_list">
                <li className="f-navbar_logo"><Link to={'/'}><img src={fLogo} alt="Logo" /> </Link></li>
                <li className="f-navbar_links">
                    <p className='f-navbar_link link-1'>Movies</p>
                    <p className='f-navbar_link link-2'>TV Shows</p>
                    <p className='f-navbar_link link-3'>Suggest me <img src={arrowRight} alt="arrowRight" /></p>
                </li>
            </ul>
        </nav>
        <div className="f-header_contant" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}> 
            <div className="film-name">
                <span>Movie</span>
                <h3 className='f-title'>{movie.original_title}</h3>
            </div>
        </div>
    </header>
    )
}


export {  FHeader  }


//style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}