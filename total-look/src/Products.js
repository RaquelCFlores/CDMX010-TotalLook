import React, {useState, useEffect} from 'react'
import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Navbar/Navbar.js';
import Product from './Product.js'

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])
    
    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/clothes');
        const products = await data.json();
        setProducts(products);
    }

    return(
        <>
            <div>
                <Navbar/>
                {products.map((p) => (
                    <Product p={p}/>
                ))}
                <Footer/>
            </div>
        </>
    );
}

export default Products;