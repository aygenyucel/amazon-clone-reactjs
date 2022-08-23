import React from 'react';
import './Home.css';
import Product from './Product';
import { Link } from "react-router-dom";
import BackgroundSlider from 'react-background-slider';
import { images } from './constants';


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            
            {/* <BackgroundSlider 
                className= 'home__image'
                images={[images.home_img01, images.home_img02, images.home_img03]}
                duration={10} transition={2} 
            /> */}
            <Link to="/">
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/AISExports_UK_GW/Desktop/AIS_GW_DESKTOP_TALLHERO_3000x1200v9_guetzli._CB639670650_.jpg' alt=''/>
            </Link>
            
            
            <div className='home__row'>
                <Product
                    id= '12321341'
                    title='Marshall Minor III True Wireless Bluetooth Earphones, Earbuds - Black' 
                    price={119.00} 
                    image='https://m.media-amazon.com/images/I/51w+6SIsh-L._AC_SX679_.jpg' 
                    rating={5}
                />
                <Product
                    id="49538094"
                    title="HUAWEI Watch GT 2 (46 mm) Smart Watch, 1.39 Inch AMOLED Display with 3D Glass Screen, 2 Weeks Battery Life, GPS, 15 Sport Modes, 3D Glass Screen, Bluetooth Calling Smartwatch, Matte Black"
                    price={99.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61JFr5bI2jL._AC_SX679_.jpg"
                />
            </div>
            <div className='home__row'>
                <Product
                    id="4903850"
                    title="Lenovo Tab M10 10.1 Inch HD Tablet – (Quad Core 2.0GHz, 2GB RAM, 32GB eMMC, Android Pie) – Slate Black"
                    price={118.31}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71FARLZ939L._AC_SX679_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className='home__row'>
                <Product
                    id="90824567"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
            <div className='home__row'>
                <Product
                    id="495380964"
                    title="De'Longhi Caffe' Corso Fully Automatic Bean to Cup Coffee Machine,Cappuccino, Espresso Coffee Maker, ESAM2800.SB, Silver and Black, R132212012"
                    price={310.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51yuEKOScaL._AC_SX569_.jpg"
                />
                <Product
                    id="49538300"
                    title="ASUS TUF A15 FA507RM 15.6 WQHD 165Hz Gaming Laptop (AMD Ryzen 7-6800H, Nvidia GeForce RTX 3060, 16GB RAM, 1TB SSD, Windows 11)"
                    price={1099.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/614NlcmEUlL._AC_SX679_.jpg"
                />
                <Product
                    id="49538777"
                    title="Vango Farnham Family Tunnel Tent, River Blue, 500 [Amazon Exclusive]"
                    price={340.44}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/5126MfgvC5L._AC_SX679_.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home