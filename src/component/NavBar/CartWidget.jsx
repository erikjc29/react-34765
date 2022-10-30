import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'
import "./cartwidget.css" 
function CartWidget() {
  const {getTotalItemCount}= useContext(cartContext);

  return (
    <div className='cont-cart'>
        <Link to="/cart" className='link'>
          <img className="header-carrito" src="https://img.icons8.com/ios-glyphs/30/000000/add-shopping-cart.png" alt="Carrito"/>
        
        <strong className='num-cart'>{
        getTotalItemCount() > 0 && getTotalItemCount()
        }</strong>
        </Link>

    </div>
  )
}

export default CartWidget