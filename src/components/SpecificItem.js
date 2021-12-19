import React from 'react'
import ItemList from './ItemList'

const SpecificItem = (props) => {
    return (
        <div className="container-fluid p-3">
        <div>
            <h3>{props.title}</h3>
        </div>
        <div className="col-md-12 col-12 d-flex flex-wrap">
            <ItemList items={props.items}/>
        </div>
        </div>
    )
}

export default SpecificItem
