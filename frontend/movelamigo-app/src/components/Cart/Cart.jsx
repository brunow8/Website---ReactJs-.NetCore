import { useContext } from 'react'
import CartContext from './CartContext'
import formatCurrency from 'format-currency'
import CartItem from './CartItem';

const Cart = () =>{

    const { showCart, cartItems, showHideCart } = useContext(CartContext)

    let opts = {format: '%s%v', symbol: '€'};
    return (
        <>
            {showCart && (
                <div className='cart_wrapper'>
                    <div style={{textAlign: 'right'}}>
                        <i style={{cursor: "pointer"}} className="fa fa-times-circle" aria-hidden='true' onClick={showHideCart}></i>
                    </div>
                    <div className='cart_innerWrapper'>
                        {console.log(cartItems.length)}
                        {console.log("fds")}
                        {cartItems.length === 0 ? (<h4>O carrinho está vazio.</h4>) : (
                            <ul>
                                {cartItems.map(item => (
                                    <CartItem key={item._id} item= {item}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='Cart_cartTotal'>
                        <div>
                            Cart Total
                        </div>
                        <div></div>
                        <div style={{marginLeft: 5}}>
                            {formatCurrency(cartItems.reduce((amount, item) => item.price + amount, 0), opts)}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Cart