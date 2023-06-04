import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first5 = fakeData.slice(0, 20 );
    const [products, setProducts] = useState(first5);
    const [ cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            {/* Product Section */}
            <div className="product-container">
                {
                    products.map( product => <Product 
                        product={product}
                        handleAddProduct = {handleAddProduct}
                        ></Product>)
                }
            </div>
            {/* Cart Section */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;