import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce( (total, product) => total + product.price, 0 );
    
    let totalPrice = 0
    for(let x= 0; x < cart.length; x++ ){
        const product = cart[x];
        totalPrice = totalPrice +product.price;
    }

    return (
        <div>
            <h3>This is cart section</h3>
            <p>Total items: {cart.length}</p>
            <p>
                {
                    cart.map( cartProduct => <li>{cartProduct.key} - ${cartProduct.price} </li>)
                }
            </p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;