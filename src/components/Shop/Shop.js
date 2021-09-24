import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"

const Shop = () => {
    // products data load useState
    const [products, setProducts] = useState([]);

    // search product useState
    // const [lfoundProduct,setFoundProduct]=useState([]);
    //useState for cart 
    const [cart,setCart]=useState([]);

    // useState for search data
    const [foundProducts,setFoundProducts]=useState([]);

    // products data load useEffect 
    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
                setFoundProducts(data)
            })
    }, [])

    // 
    const productHandler = (product)=>{
        // console.log("clicked")
        const productCart = [...cart,product]
        setCart(productCart)
    }

    // search Product handler 
    const searchHandler = (event)=>{
        const searchText = (event.target.value);
       const foundProduct =  products.filter(filterProduct=>filterProduct.name.toLowerCase().includes(searchText.toLowerCase()))

       setFoundProducts(foundProduct);

    }

    return (
        <div>
            <div className="search-container m-5">
            <form className="d-flex w-50 mx-auto">
        <input onChange={searchHandler} className="form-control me-2 border-primary" type="search" placeholder="Search what you find.." aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
            </div>
            <div className="shop-container">
                <div className="products">
                    {/* <h1>Products:{products.length}</h1> */}
                    {
                        foundProducts.map(product => <Products productHandler={productHandler} product={product} key={product.key} ></Products>)
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