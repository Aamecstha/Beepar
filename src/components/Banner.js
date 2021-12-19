import React from 'react'

const Banner = (props) => {
    return (
        <div className="col-md-4 col-12">
            <img src={props.imageUrl} width="100%" height="300px"/>
        </div>
    )
}

export default Banner
