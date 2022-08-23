
import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './reducer';
import { useNavigate } from "react-router-dom";
import axios from './axios';

function Payment() {

    const navigate = useNavigate();
    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies submits
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log('the secret is >>>', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET',
            })

            navigate('/orders',{replace:true})
        })
    }

    const handleChange = event => {
        // listen for changes inside the CardElment
        // display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');

    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{cart?.length} items</Link>)
                </h1>

                {/* delivery adress */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price} 
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span> {processing ? <p>Processing</p> : 'Buy Now'} </span>
                                </button>

                            </div>

                            {/* errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment