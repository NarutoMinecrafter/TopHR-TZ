import './App.css'
import shoppingСart from './images/shopping-cart.svg'
import { Route, Switch } from 'react-router-dom'
import { ProductDiv } from './components/ProductDiv'
import { DescriptionProduct } from './components/DescriptionProduct'
import { ShoppСart } from './ShoppСart'

const App = () => {
  return<div className='wrapper'>
    <header>
      <span>
        {'Главнвя'}
      </span>
      <img src={shoppingСart} alt='корзина' className='shoppingСart'/>
      <ShoppСart/>
    </header>
    <main>
      <Switch>
        <Route exact path='/'>
          <ProductDiv/>
          <ProductDiv/>
          <ProductDiv/>
        </Route>
        <Route path='/product' render={() => <DescriptionProduct/>} />
        <Route path='*' render={() => <>404 NOT FOUND</>} />
      </Switch>
    </main>
  </div>
}

export default App
