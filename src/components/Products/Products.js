import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Products = (props) => {
    const product = props.product;
    const { name, stock, seller, star, img, price } = product
    return (
        <div className="productsInfo">
            <div>
                <img src={img} alt="" />
            </div>
            <div>

                <div className="card text-center info" style={{ width: "40rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">by: {seller}</p>
                        <h4 className="card-text">${price}</h4>
                        <p className="card-text">only {stock} left in stock - order soon</p>
                        <Rating initialRating={star} readonly emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"></Rating>
                        <br />
                        <button onClick={() => props.productHandler(product)} type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;