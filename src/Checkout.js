import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';


function Checkout() {
  const[{ cart, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg' alt=''/>

            <div>
              <h3>Hello, {user? `${user.email}` : 'Guest'}</h3>
              <h2 className='checkout__title'>
                Your Shopping basket
              </h2>

            </div>
            
            <FlipMove>
              {cart.map(item => (
                  <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                  />
              ))}
            </FlipMove>
            
            
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout