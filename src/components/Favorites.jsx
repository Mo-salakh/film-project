function Favorites(props) {

    let { favorites, removeFavorite, setClicked, isClicked } = props

    return (
        <div className="favorites_content">
        <h2 className="favorite_title title">Favorite Movies</h2>
        <ul className="favorites_list">
            {favorites.map(favorite => {
                return (
                    <li className="favorites_item"  key={favorite.id}>           
                        <img className="favorites_img" src={`https://image.tmdb.org/t/p/w500${favorite.posterPath}`} alt={favorites.originalTitle} />
                        <p className="favorite_name">{favorite.originalTitle.slice(0,10)} ...</p>
                        <span className="favorites_item-remove" onClick={() => removeFavorite(favorite.id)}>X</span>
                    </li>
                )
            })}

        </ul>
         <span onClick={() => setClicked(!isClicked)} className="favorites_list-close">X</span>
        </div>
    )

}


export {  Favorites  }