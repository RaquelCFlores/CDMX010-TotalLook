import React from 'react'


function OneCategorie(props) {
    return(
        <div className="oneCategorie">
            <img className="image-categorie" src={props.image} alt="image"/>
            <div className="name-categorie" >
                <h2>{props.categorie}</h2>
            </div>
        </div>
    );
}

export default OneCategorie;