import { useEffect, useRef, useState } from 'react'
import fLogo from '../img/Film-page-logo.svg'
import arrowRight from '../img/arrow-right.png'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../config'

export function Film(props) {

    let { id } = useParams();
    let idRef = useRef();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        // Первый запрос для получения imdb_id
        fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, {
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            idRef.current = data.imdb_id;
            return fetch(`https://api.themoviedb.org/3/find/${idRef.current}?external_source=imdb_id`, {
                headers: {
                    accept: 'application/json',
                    Authorization: API_KEY
                }
            });
        })
        .then(response => response.json())
        .then(data => {
            setMovie(data.movie_results[0]);
        })
        .catch(err => console.error(err));
    }, [id]);
    
    console.log(movie);

    return (


        <>
        <Helmet>
            <body className='Film-page' />
        </Helmet>
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
                    <h1 className='f-title'>Name of movie</h1>
                </div>
            </div>
        </header>
        <main className="f-main">
            <section className="f-info">
                <div className="f-info_poster">
                    <img src="" alt="" />
                </div>
                <div className="f-info_data">
                    <h3 className='f-info_title'></h3>
                    <p className="f-info_subtitle"></p>
                    <div className="f-rating">
                        <p></p>
                    </div>
                    <dl className="f-info_details">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <dl className="f-info_details">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <dl className="f-info_details">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                    <dl className="f-info_details">
                        <dt></dt>
                        <dd></dd>
                    </dl>
                </div>
            </section>
            <section className="f-comment">
                <input type="text" placeholder='Comment' className="f-comment_zone" />
                <button className="f-comment_send">Add</button>
                <ul className="f-comments_list">
                    <li className="f-comments-item"></li>
                </ul>
            </section>
        </main>
        </>
    )

}