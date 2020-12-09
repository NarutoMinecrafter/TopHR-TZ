import shoppingСart from './images/shopping-cart.svg'
import { MiniProductDiv } from "./components/MiniProductDiv"

// боковая панелт корзины
export const ShoppСart = () => {
  return <div className='shoppСart'>
    <img src={shoppingСart} alt='корзина' className='shoppingСart' />
    <br />
    <MiniProductDiv />
    <div className="purchase">
      <div>{'(сумма всех вещей в корзине)'}</div>
      <br />
      <div>К оплате: {'300'}$</div>
      <button className='button dGrin'>Оформить заказ</button>
    </div>
  </div>
}
