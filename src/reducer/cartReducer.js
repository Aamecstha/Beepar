const initialData={
    cartItems:[]
}

function cartReducer(state=initialData,action){
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cartItems:[...state.cartItems.filter(item=>item.title!==action.payload.title)]
            }
        case "CLEAR_CART":
            return{
                cartItems:[]
            }
        default:
            return state
    }
}

export default cartReducer