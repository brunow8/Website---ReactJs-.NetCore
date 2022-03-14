import {useContext} from 'react'
import CartContext from './CartContext'
import formatCurrency from 'format-currency'


const CartItem = ({item}) => {

let opts = { format: '%s%v', symbol: '€'}
const { removeItem } = useContext(CartContext)

    return (
        <li className="CartItem_item Cart_li">
            <img src={"https://localhost:5001/images/"+ item.imageName} alt="" className='Cart_li_img'/>
            <div>
                {item.name} {formatCurrency(`${item.price}`, opts)}
            </div>
            <button className='CartItem_button' onClick={() =>  removeItem(item.id)}>Remover</button>
            
        </li>
    )
}
export default CartItem