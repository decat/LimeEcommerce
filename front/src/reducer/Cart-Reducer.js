import { VIEW_CART , ADD_INVITADO_CART, DELETE_INVITADO_CART, DELETE_INVITADO_PRODUCT, HISTORY_CART } from '../constants'

const initialState = {
    carts: [],
    orders : {} ,
    products: JSON.parse(localStorage.getItem('cartInvitado')).length ? [...JSON.parse(localStorage.getItem('cartInvitado'))] : [],
}

export default ( state = initialState, action) => {
    switch(action.type){
        case VIEW_CART:
            return {...state, orders: action.orders}
        case HISTORY_CART:
            return { ...state, carts: action.carts }
        case ADD_INVITADO_CART :
            localStorage.setItem('cartInvitado', JSON.stringify([...state.products, action.product]))
            return {...state , products:[...state.products, action.product]}
        case DELETE_INVITADO_CART : 
        localStorage.setItem('cartInvitado', JSON.stringify([]))
            return{...state, products:[]}
        case DELETE_INVITADO_PRODUCT : 
            localStorage.setItem('cartInvitado', JSON.stringify([...state.products.filter(product=>product.id != action.productId)]))
            return{...state, products:[...state.products.filter(product=>product.id != action.productId)]}
        default:
            return state
        }
}