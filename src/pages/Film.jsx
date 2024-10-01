import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../config'
import { FHeader } from '../layout/f-Header';
import { FMain } from '../layout/f-Main';

export function Film(props) {

    let { id } = useParams();
    let idRef = useRef();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <>
                <Helmet>
                    <body className='Film-page' />
                </Helmet>
                <div className="loader"></div>
        </>
    )
    }

    return (
        <>
            <Helmet>
                <body className='Film-page' />
            </Helmet>
            <FHeader movie={movie} />
            <FMain movie={movie} />
        </>
    );
}
