import React,{useContext} from 'react'
import ItemList from '../components/ItemList'
import Nav from '../components/Nav'
import FavoriteContext from '../store/favorite-context'

const Favorites = () => {
    const favoritesCtx=useContext(FavoriteContext)
    const tolalFavorites=favoritesCtx.totalFavorites
    let content=""

    if(tolalFavorites===0){
        content=<p>you dont have any favorites yet RETARD......</p>
    }
    else{
        content=<ItemList items={favoritesCtx.favorites}/>
    }

    return (
        <div>
            <Nav/>
            <h1>this is the favorites page</h1>
            <div className="container d-flex bg-success">
                {content}
            </div>
            
        </div>
    )
}

export default Favorites
