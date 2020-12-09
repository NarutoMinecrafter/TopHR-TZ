import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import shoppingCartReducer from './shopping-cart-reducer'
import productsReducer from './products-reducer'

let reducers = combineReducers({
    shoppingСart: shoppingCartReducer,
    products:  productsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store