// -Debe mostrar los productos existentes en páginas de 9 elementos y se permite cualquier técnica de paginación, como el desplazamiento infinito o los botones de números de página.
// -Deberá de cumplir con el condicional para ocultar los botones de editar y eliminar productos y aparecerá el carrito de compras
// -Cuando el cliente presione el botón del carro de compras, se mostrará una ventana modal con el nombre del producto y los campos cantidad, color y tamaño (si corresponde) y el botón "Agregar al carrito".

import React from 'react'

function Product(props) {
    return(
        <>
            <div>
                <img src={props.p.img} alt="bolsa"/>
                <p>{props.p.name}</p>
                <p>$ {props.p.price}</p>
            </div>
        </>
    );   
}

export default Product;