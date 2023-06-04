import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    // console.log(props.handleAddProduct);
    return (
        <div className='product'>
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <h4 className='product-name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} product is available</small></p>
                <button className='add-to-cart'
                    onClick={ ()=> props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
                
            </div>
        </div>
    );
};

export default Product;