import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';


function Product({id, title, image, price, rating }) {

  const [{cart}, dispatch] = useStateValue();

  //state: basically state of the global store
  //dispatch: how me manupulate the data


  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  //now, whenever we click add to basket button, the type of action and item added the basket.
  //(first it goes stateprovider, then goes reducer and check the action type(which is add to cart in this case,
  //and added state.cart to action.item))

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            
            <p className='product__price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className='product__rating'>
              {Array(rating).fill().map((_, i) => (
                <StarIcon className='product__ratingStarIcon' />
              ))}
            </div>

        </div>

        <img src= {image} alt='' />

        <button onClick={addToCart}>Add to Basket</button>
    </div>
  )
}

export default Product