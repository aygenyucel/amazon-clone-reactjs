import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{cart}, dispatch] = useStateValue();
    console.log('REMOVEDDDD ', cart);


    const removeFromCart = () => { 
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>

        <div className='checkoutProduct__image'>
            <img src={image} />
        </div>
        
        

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon/>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove from Basket</button>
        </div>


    </div>
  )
}

export default CheckoutProduct