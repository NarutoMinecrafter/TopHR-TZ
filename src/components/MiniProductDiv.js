import keyboardMicro from './images/keyboard-micro.png'

// компонент товаров добавленых в корзину
export const MiniProductDiv = () => {
  return <div className='miniProductDiv'>
    <div>{'название'}</div>
    <div>{'цена/шт'}</div>
    <button className='circle'>✖</button>
    <div></div>
    <div><img src={keyboardMicro} alt='клавиатура' /></div>
    <button className='minus'>{'-'}</button>
    <div>{'1'}</div>
    <button className='plus'>{'+'}</button>
  </div>
}
