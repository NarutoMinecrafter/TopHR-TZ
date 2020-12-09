import './App.css'
import shoppingСart from './images/shopping-cart.svg'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import { ProductDiv } from './components/ProductDiv'
import { DescriptionProduct } from './components/DescriptionProduct'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { MiniProductDiv } from './components/MiniProductDiv'

const App = () => {

  const pathname = useLocation().pathname

  useEffect(() => {}, [pathname])

  const [isActive, setIsActive] = useState(false)

  const product = useSelector(state => state.products)

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
          <MiniProductDiv />
          <div className="purchase">
            <div>{'(сумма всех вещей в корзине)'}</div>
            <br />
            <div>К оплате: {'300'}$</div>
            <button className='button dGrin'>Оформить заказ</button>
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
