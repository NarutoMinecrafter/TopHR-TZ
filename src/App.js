import './App.css'
import shoppingСart from './images/shopping-cart.svg'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { ProductDiv } from './components/ProductDiv'
import { DescriptionProduct } from './components/DescriptionProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { MiniProductDiv } from './components/MiniProductDiv'
import { clear } from './BLL/shopping-cart-reducer'

const App = () => {

  const pathname = useLocation().pathname

  useEffect(() => {}, [pathname])
  const dispatch = useDispatch()

  const [isActive, setIsActive] = useState(false)

  const product = useSelector(state => state.products.product)
  const shopProduct = useSelector(state => state.shoppingСart.product)

  let a = shopProduct.map((item) => item.quantity*item.price)
  let sum = 0
  for (let i = 0; i <= a.length; i++) {
    if(a[i]) sum += a[i]
  }

return<div className='wrapper'>
    <header>
      {pathname !== '/' && <Link to='/'> <div className='back' >{'< на главную'}</div> </Link> }
      <span>
        {'Главная'}
      </span>
      <img src={shoppingСart} alt='корзина' className='shoppingСart' onClick={() => setIsActive(!isActive)}/>
      {isActive && (
        <div className='shoppСart'>
          <img src={shoppingСart} alt='корзина' className='shoppingСart' onClick={() => setIsActive(!isActive)} />
          <br />
          {shopProduct.map(p => p.quantity > 0 ? <MiniProductDiv photo={p.photo} name={p.name} price={p.price} quantity={p.quantity} key={p.name}/> : <></> )}
          <div className="purchase">
            <div>{'(сумма всех вещей в корзине)'}</div>
            <br />
            <div>К оплате: {sum}$</div>
            <button disabled={sum <= 0} className='button dGrin' onClick={() => dispatch(clear())} >Оформить заказ</button>
          </div>
        </div>
      )}
    </header>
    <main>
      <Switch>
        <Route exact path='/'>
          {product.map(p => <ProductDiv 
            isActive={isActive} photo={p.photo} name={p.name} price={p.price} quantity={p.quantity} key={p.name}
          /> )}
        </Route>
        {product.map(p => <Route path={`/product/${p.name}`} render={() => <DescriptionProduct 
          isActive={isActive} photo={p.photo} name={p.name} price={p.price} quantity={p.quantity} desc={p.desc} key={p.name} 
        /> } /> )}
        <Route path='*' render={() => <>404 NOT FOUND</>} />
      </Switch>
    </main>
  </div>
}

export default App
