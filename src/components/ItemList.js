import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <>
            {props.items.map((item)=>(
                <Item item={item}/>
            ))}
        </>
    )
}

export default ItemList
