import React, {useState, useEffect} from 'react'
import clothes from '../../assets/clothes.jpg'
import kids from '../../assets/kids.jpg'
import shoes from '../../assets/shoes.jpg'
import bolsas from '../../assets/bolsas.jpg'
import accesorios from '../../assets/accesorios.jpg'
import OneCategorie from './OneCategorie'
import add from '../../assets/add.png'
import './categories.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Categories () {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])
    
    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/clothes');
        const products = await data.json();
        setProducts(products);
    }

    const clothesFilter = () => {
        console.log("<<<<<<<<<<<<<< Campurando vento");
        const filtradoprueba = products.filter(p => p.type === "clothes");
        console.log(filtradoprueba, "<<<<<<<<<<<<<<");
    }

    
    
    return (
        <>
        <Navbar/>
        <h1 className="title-categories">CATEGORIAS</h1>
        <div className="Categories">
            <OneCategorie clothesFilter={clothesFilter} image={clothes} categorie="ROPA"/>
            <OneCategorie image={kids} categorie="NIÑOS"/>
            <OneCategorie image={shoes} categorie="ZAPATOS"/>
            <OneCategorie image={bolsas} categorie="BOLSAS"/>
            <OneCategorie image={accesorios} categorie="ACCESORIOS"/>
        </div>
        <div className="btn-categorie">
            <img className="add-categorie" src={add} alt="add"/>
        </div>
        <Footer/>
        </>
    );
}

export default Categories;