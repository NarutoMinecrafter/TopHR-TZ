import { useDispatch, useSelector } from 'react-redux'
import { addElement } from '../BLL/products-reducer'
import { addOne, addToLocalStorage, deleteOne, deleteProduct } from '../BLL/shopping-cart-reducer'

// компонент товаров добавленых в корзину
export const MiniProductDiv = (props) => {


  const f1 = () => {
    dispatch(addElement(props.name, props.quantity))
    dispatch(deleteProduct(props.name))
    dispatch(addToLocalStorage())
  }
  const f2 = () => {
    dispatch(deleteOne(props.name))
    dispatch(addToLocalStorage())
  }
  const f3 = () => {
    dispatch(addOne(props.name))
    dispatch(addToLocalStorage())
  }

  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)
  
  let isDisabled = false
  product.forEach((item) => {
    if(item.name === props.name && item.quantity === 0) isDisabled = true
  })

  return <div className='miniProductDiv'>
    <div>{props.name}</div>
    <div>{`${props.price}$/шт`}</div>
    <button className='circle' onClick={f1} >✖</button>
    <div></div>
    <div><img src={props.photo} alt={props.name} /></div>
    <button className='minus' onClick={f2} >-</button>
    <div>{props.quantity}</div>
    <button disabled={isDisabled} className='plus' onClick={f3} >+</button>
  </div>
}
