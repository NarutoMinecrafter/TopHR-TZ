import { addElement, deleteElement } from './products-reducer'

const shoppingCartReducer = (state = {product: []}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT' : return {
            ...state, product: state.product.length > 0 ? [action.product, ...state.product] : [action.product] 
        }
        case 'SYNCHRONIZATION' : return {
            ...state, product: action.state
        } 
        case 'DELETE_PRODUCT' : return {
            ...state,
            product: state.product.map((u) => {
                if (u['name'] === action.name) {
                    return { ...u, quantity: 0 }
                }
                return u
            })
        }
        case 'PLUS_ONE_PRODUCT': return {
            ...state,
            product: state.product.map((u) => {
                if (u['name'] === action.name) {
                    return { ...u, quantity: u['quantity'] + 1 }
                }
                return u
            })
        }
        case 'MINUS_ONE_PRODUCT': return {
            ...state,
            product: state.product.map((u) => {
                if (u['name'] === action.name) {
                    return { ...u, quantity: u['quantity'] - 1 }
                }
                return u
            })
        }
        case 'CLEAR' : return {
            ...state, product: [...state.product.splice()]
        }
        case 'ADD_TO_LOCALsTORAGE' : {
            localStorage.setItem('cart', JSON.stringify(state.product))
            return state
        }
        default: return state
    }
}

const addProduct = (product) => ({type: 'ADD_PRODUCT', product})
export const synchronization = (state) => ({type: 'SYNCHRONIZATION', state})
const plusOneProduct = (name) => ({type: 'PLUS_ONE_PRODUCT', name})
const minusOneProduct = (name) => ({type: 'MINUS_ONE_PRODUCT', name})
export const deleteProduct = (name) => ({type: 'DELETE_PRODUCT', name})
export const clear = () => ({type: 'CLEAR'})
export const addToLocalStorage = () => ({type: 'ADD_TO_LOCALsTORAGE'})

export const addToSpocCar = (product) => (dispatch) => {
    dispatch(addProduct(product))
    dispatch(deleteElement(product.name, 1))
}

export const addOne = (name) => (dispatch) => {
    dispatch(plusOneProduct(name))
    dispatch(deleteElement(name, 1))
}

export const deleteOne = (name) => (dispatch) => {
    dispatch(minusOneProduct(name))
    dispatch(addElement(name, 1))
}

export default shoppingCartReducer