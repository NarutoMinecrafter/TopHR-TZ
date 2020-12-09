import keyboard from './images/keyboard.png'

// компонент блока товаров
export const ProductDiv = () => {
  return <div className='ProductDiv margin225'>
    <div>
      <img src={keyboard} alt={'фото товара'} />
    </div>
    <div>
      <div>{'название'}</div>
      <div>{'цена/шт'}</div>
      <div>{'Всего'}</div>
    </div>
    <div>
      <button className='button lGrin'>Добавить в корзину</button>
    </div>
  </div>
}
