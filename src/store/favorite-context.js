import React,{createContext,useState} from "react"

const FavoriteContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetup)=>{},
    removeFavorite:(meetupId)=>{},
    isItemFavorite:(meetupId)=>{}
})

export const FavoriteContextProvider=(props)=>{
    const [userFavorites,setUserFavorites]=useState([])

    const addUserFavorites=(favoriteMeetup)=>{
        setUserFavorites(prevFav=>{
            return prevFav.concat(favoriteMeetup)
        })
    }

    const removeUserFavorites=(meetupId)=>{
        setUserFavorites(prevFav=>{
            return prevFav.filter(item=>item.id!==meetupId)
        })
    }

    const itemIsFavorite=(meetupId)=>{
        return userFavorites.some(meetup=>meetup.id===meetupId)
    }

    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addUserFavorites,
        removeFavorite:removeUserFavorites,
        isItemFavorite:itemIsFavorite
    }

    return(
        <FavoriteContext.Provider value={context}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContext