import { Link } from 'react-router-dom'

// компонент блока товаров
export const ProductDiv = (props) => {
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
      <button className='button lGrin'>Добавить в корзину</button>
    </div>
  </div>
}
