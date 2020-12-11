import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteElement } from '../BLL/products-reducer'
import { addOne, addToLocalStorage, addToSpocCar } from '../BLL/shopping-cart-reducer'

// компонент блока товаров
export const ProductDiv = (props) => {

  const dispatch = useDispatch()
  const shopProduct = useSelector(state => state.shoppingСart.product)

  const addToCart = () => {
    if (shopProduct.find(item => item.name === props.name)) {
      dispatch(addOne(props.name))
    } else dispatch(addToSpocCar({name: props.name, price: props.price, photo: props.photo, quantity: 1}))
    dispatch(addToLocalStorage())
  }

  useEffect(() => { 
    JSON.parse(localStorage.getItem('cart')).filter(item => {
      if (item.name === props.name && item.quantity > 0 ) dispatch(deleteElement(props.name, item.quantity))
    })
  }, [])

  return <div className={`ProductDiv ${props.isActive &&'margin225'}`}>
    <div>
      <Link to={`product/${props.name}`} >
        <img src={props.photo} alt={'фото товара'} onClick={props.click} />
      </Link>
    </div>
    <div>
      <div>{props.name}</div>
      <div>{`${props.price} $ / шт`}</div>
      <div>{`Всего: ${props.quantity}`}</div>
    </div>
    <div>
      <button disabled={props.quantity <= 0} className='button lGrin' onClick={addToCart}>Добавить в корзину</button>
    </div>
  </div>
}
