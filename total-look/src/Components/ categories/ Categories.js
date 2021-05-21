import React from 'react'
import clothes from '../../assets/clothes.jpg'
import kids from '../../assets/kids.jpg'
import shoes from '../../assets/shoes.jpg'
import bolsas from '../../assets/bolsas.jpg'
import accesorios from '../../assets/accesorios.jpg'
import OneCategorie from './OneCategorie'
import add from '../../assets/add.png'
import './categories.css'

function Categories () {
    return (
        <>
            <h1 className="title-categories">CATEGORIAS</h1>
            <div className="Categories">
                <OneCategorie image={clothes} categorie="ROPA"/>
                <OneCategorie image={kids} categorie="NIÑOS"/>
                <OneCategorie image={shoes} categorie="ZAPATOS"/>
                <OneCategorie image={bolsas} categorie="BOLSAS"/>
                <OneCategorie image={accesorios} categorie="ACCESORIOS"/>
            </div>
            <div className="btn-categorie">
                <img className="add-categorie" src={add} alt="add"/>
            </div>

        </>
    );
}

export default Categories;