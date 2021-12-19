import React,{useContext} from "react"
import {useDispatch} from "react-redux"

const Item=(props)=>{
    const{id,title,image,price}=props.item
    console.log(id,title,image,price)
    const dispatch=useDispatch()

    const addToCart=()=>{
        dispatch({type:"ADD_TO_CART",payload:props.item})
    }

    return(        
        <div className="col-md-2 col-12 m-2 shadow-lg p-2">
            <img src={image} alt=".." style={{width:"100%",height:"200px"}}/>
            <h5 className="text-capitalize">{title}</h5>
            <p>Price: ${price}</p>
            <button className="btn btn-warning" onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default Item