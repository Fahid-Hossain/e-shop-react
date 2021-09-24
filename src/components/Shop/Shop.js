import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"

const Shop = () => {
    // products data load useState
    const [products, setProducts] = useState([]);
    //useState for cart 
    const [cart,setCart]=useState([]);

    // products data load useEffect 
    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // 
    const productHandler = (product)=>{
        // console.log("clicked")
        const productCart = [...cart,product]
        setCart(productCart)
    }
    return (
        <div>
            <div className="search-container m-5">
            <form className="d-flex w-50 mx-auto">
        <input className="form-control me-2 border-primary" type="search" placeholder="Search what you find.." aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
            </div>
            <div className="shop-container">
                <div className="products">
                    {/* <h1>Products:{products.length}</h1> */}
                    {
                        products.map(product => <Products productHandler={productHandler} product={product} key={product.key} ></Products>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;