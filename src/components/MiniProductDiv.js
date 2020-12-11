import { useDispatch, useSelector } from 'react-redux'
import { addOne, deleteOne, deleteProduct } from '../BLL/shopping-cart-reducer'

// компонент товаров добавленых в корзину
export const MiniProductDiv = (props) => {
  
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.product)
  
  let isDisabled = false
  product.forEach((item) => {
    if(item.name === props.name && item.quantity === 0) isDisabled = true
  })

  return <div className='miniProductDiv'>
    <div>{props.name}</div>
    <div>{`${props.price}$/шт`}</div>
    <button className='circle' onClick={() => dispatch(deleteProduct(props.name))} >✖</button>
    <div></div>
    <div><img src={props.photo} alt={props.name} /></div>
    <button className='minus' onClick={() => dispatch(deleteOne(props.name))} >-</button>
    <div>{props.quantity}</div>
    <button disabled={isDisabled} className='plus' onClick={() => dispatch(addOne(props.name))} >+</button>
  </div>
}
