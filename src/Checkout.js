import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg' alt=''/>

            <h2 className='checkout__title'>
                Your Shopping basket
            </h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
        </div>

        <div className='checkout__right'>
            <h2>The subtotal will go here</h2>
        </div>
    </div>
  )
}

export default Checkout