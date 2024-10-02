import { MoviesList } from "../components/MoviesList"

function Main(props) {
    const { films, getFavorite } = props
    return (
        <main className="main">
            <h2 className="main_title title">
                Movies
            </h2>
            <MoviesList films={films} getFavorite={getFavorite} />
        </main>
    )
}

export {  Main  }