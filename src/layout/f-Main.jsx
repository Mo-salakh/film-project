import Star from '../img/star.png'
import { Comment } from '../components/Comment'

function FMain(props) {

    let { movie } = props

    console.log(movie);
    

    return (
        <main className="f-main">
        <section className="f-info">
            <div className="f-info_poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.originalTitle} /> {/*src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.originalTitle}  */}
            </div>
            <div className="f-info_data">
                <h4 className='f-info_title'>{movie.title}</h4> {/*{movie.title}*/}
                <p className="f-info_subtitle">{movie.overview}</p> {/*{movie.overview}*/}
                <div className="f-info_rating">
                    <span > <img src={Star} alt="star" /> {movie.vote_average}</span> {/* {movie.vote_average} */}
                </div>
                <dl className="f-info_details">
                    <dt>Type</dt>
                    <dd>{movie.media_type}</dd> {/*{movie.media_type}*/}
                </dl>
                <dl className="f-info_details">
                    <dt>Release Date</dt>
                    <dd>{movie.release_date}</dd> {/*{movie.release_date}*/}
                </dl>
                <dl className="f-info_details">
                    <dt>Genres</dt>
                    <dd>{movie.genre_ids.join(',')}</dd> {/*{movie.genre_ids.join(',')}*/}
                </dl>
            </div>
        </section>
        <Comment />
    </main>
    )
}

export {  FMain  }


//src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.originalTitle}