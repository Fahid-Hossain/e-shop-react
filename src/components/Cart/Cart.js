import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const cart = props.cart;
    // console.log(cart)
    //sum price which clicked for total price
    let total=0;
    for(const product of cart){
        total = total+product.price;
    }
    return (
        <div className="order">
            <h3>Order Summary</h3>
            <h5>items oredered:{props.cart.length}</h5>
            <h4>price:${total.toFixed(2)}</h4>
            
        </div>
    );
};

export default Cart;