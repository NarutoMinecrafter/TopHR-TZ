import { useDispatch, useSelector } from 'react-redux'
import { addOne, addToSpocCar } from '../BLL/shopping-cart-reducer'

// компонент описания продуктов
export const DescriptionProduct = (props) => {

    const dispatch = useDispatch()
    const shopProduct = useSelector(state => state.shoppingСart.product)

    const addToCart = () => {
      if (shopProduct.find(item => item.name === props.name)) {
        dispatch(addOne(props.name))
      } else dispatch(addToSpocCar({name: props.name, price: props.price, photo: props.photo, quantity: 1}))
    }

  return <div className={`DescriptionProduct ${props.isActive &&'margin195'}`}>
    <div className='sImages'>
      <div>
        <img src={props.photo} alt='клавиатура' />
      </div>
      <div>
        <img src={props.photo} alt='клавиатура' />
      </div>
      <div>
        <img src={props.photo} alt='клавиатура' />
      </div>
      <div>
        <img src={props.photo} alt='клавиатура' />
      </div>
    </div>
    <div className='bImage' style={{
        background: `url(${props.photo}) no-repeat`, 
        width: '362px',
        height: '215px',
        position: 'relative',
        gridArea: 'b',
        backgroundSize: '100%',
        borderRadius: '15px'
      }}>
      <div className="points">
        <div className='point activ'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
      </div>
    </div>
    <div className='pName'>
      <div>{props.name}</div>
      <div>{`${props.price} $ / шт`}</div>
      <div>{`Всего: ${props.quantity}`}</div>
      <br />
      <br />
      <br />
      <button className='button dGrin' onClick={addToCart} >Добавить в корзину</button>
    </div>
    <div className='pDescription'>
      <h1>{props.desc}</h1>
    </div>
  </div>
}
