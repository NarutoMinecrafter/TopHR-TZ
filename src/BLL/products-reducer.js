import Keyboard from '../images/keyboard.png'
import Pillow from '../images/pillow.png'
import Mouse from '../images/mouse.png'

const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, debitis sint! Doloribus quod in asperiores possimus error lias totam nihil nemo! Obcaecati dolorem asperiores repellat mollitia eligendi voluptatum aut. Obcaecati, modi odio esseipisci aliquid ipsam nulla porro. Veniam, blanditiis.'

const initialState = {
    product: [
        {
            photo: Keyboard,
            name: 'клавиатура',
            price: 25,
            quantity: 56,
            desc: description
        },
        {
            photo: Pillow,
            name: 'Подушка',
            price: 50,
            quantity: 2,
            desc: description
        },
        {
            photo: Mouse,
            name: 'мышка',
            price: 11,
            quantity: 12,
            desc: description
        },
    ]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_ELEMENT': return {
            ...state,
            product: state.product.map((u) => {
                if (u['name'] === action.name) {
                    return { ...u, quantity: u['quantity'] - action.n }
                }
                return u
            })
        }
        case 'ADD_ELEMENT': return {
            ...state,
            product: state.product.map((u) => {
                if (u['name'] === action.name) {
                    return { ...u, quantity: u['quantity'] + action.n }
                }
                return u
            })
        }
        default: return state
    }
}

export const deleteElement = (name, n) => ({ type: 'DELETE_ELEMENT', name, n })
export const addElement = (name, n) => ({ type: 'ADD_ELEMENT', name, n })

export default productsReducer