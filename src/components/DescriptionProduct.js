import keyboardSmall from './images/keyboard-small.png'

// компонент описания продуктов
export const DescriptionProduct = () => {
  return <div className="DescriptionProduct margin195">
    <div className='sImages'>
      <div>
        <img src={keyboardSmall} alt='клавиатура' />
      </div>
      <div>
        <img src={keyboardSmall} alt='клавиатура' />
      </div>
      <div>
        <img src={keyboardSmall} alt='клавиатура' />
      </div>
      <div>
        <img src={keyboardSmall} alt='клавиатура' />
      </div>
    </div>
    <div className='bImage'>
      <div className="points">
        <div className='point activ'></div>
        <div className='point'></div>
        <div className='point'></div>
        <div className='point'></div>
      </div>
    </div>
    <div className='pName'>
      <div>{'название'}</div>
      <div>{'цена/шт'}</div>
      <div>{'Всего'}</div>
      <br />
      <br />
      <br />
      <button className='button dGrin'>Добавить в корзину</button>
    </div>
    <div className='pDescription'>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, debitis sint! Doloribus quod in asperiores possimus error
        lias totam nihil nemo! Obcaecati dolorem asperiores repellat mollitia eligendi voluptatum aut. Obcaecati, modi odio esse
        ipisci aliquid ipsam nulla porro. Veniam, blanditiis.
      </h1>
    </div>
  </div>
}
