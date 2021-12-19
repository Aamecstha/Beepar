import React, { useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import Nav from '../components/Nav'

const Cart = () => {
    const selector = useSelector(store => store)
    const dispatch=useDispatch()

    const getTotal = () => {
        let total = 0
        selector.cartItems.map(item => (
            total += Number(item.price)
        ) 
        )
        return total
    }

    return (
        <div>
            <Nav />
            <div className="container container-fluid mt-5">
                <div className="col-12 m-2 p-2 shadow-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selector.cartItems.map((item) => (
                                <tr>
                                    <td>{item.title}</td>
                                    <td><img src={item.image} width="100px" height="100px" /></td>
                                    <td>${item.price}</td>
                                    <td><button className="btn btn-danger" onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:item})}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="container-fluid d-flex align-items-end flex-column px-5">
                        <h3>Total: ${getTotal()}</h3>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart
