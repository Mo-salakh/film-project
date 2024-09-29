import WatchI from '../img/watch-i.png'


export function PopularFilmInfo(props) {

    let { originalTitle , overview } = props.popularFilminfo
    let { originalTitle: InitialTitle, overview:initialOverview } = props.initialFilm

    return (
        <div className="header_contant">
            <h1 className="header-title title">{originalTitle ? originalTitle : InitialTitle}</h1>
            <p className="header-paragraph">{overview ? overview : initialOverview}</p>
            <span className="header-rating"></span>
            <button className="watch-btn btn"><img src={WatchI} alt="Watch Icon"/>Watch Now</button>
            <button className="trailer-btn btn">Trailer</button>
        </div>
    )
}