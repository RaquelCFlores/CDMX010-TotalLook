import React from "react";
import { useHistory } from "react-router-dom";
import hotSale from '../../assets/hotsale.jpg';
import ropa from '../../assets/ropa.png';
import zapatos from '../../assets/zapatos.png';
import bolsas from '../../assets/bolsas.png';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Principal.css';

const Principal = () => {
    let history = useHistory();

    function handleClick() {
    history.push("/categories");
    }


    return(
        <div className='principal'>
            <Navbar />
            <h2>Ver promociones</h2>
            <img src={hotSale} className="hotSale" alt="oferta" />
            <h2 onClick={handleClick} >Ver todo</h2>
            <div className='categories'>
                <img src={ropa} className="categorie" alt="Ropa" />
                <img src={zapatos} className="categorie" alt="Zapatos" />
                <img src={bolsas} className="categorie" alt="Bolsas" />
            </div>
            <Footer/>
        </div>
    )
}

export default Principal