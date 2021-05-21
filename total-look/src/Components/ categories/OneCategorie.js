import React from 'react'


function OneCategorie(props) {
    return(
        <div className="oneCategorie" onClick={()=>{(props.clothesFilter())}}>
            <img className="image-categorie" src={props.image} alt="imagen"/>
            <div className="name-categorie" >
                <h2>{props.categorie}</h2>
            </div>
        </div>
    );
}

export default OneCategorie;