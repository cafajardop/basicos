import React from 'react';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {

    const { nombre, precio, id } = producto;
    let mensaje;
    if (precio > 50)
        mensaje = 'No esta en oferta';
    else
        mensaje = 'Oferta llevelo perro catrehijufrutas';

    // Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(p => p.id === id)[0]; //filtro por el id 
        agregarProducto([ //creo funcion para agregar al carrito sin que se pierda el anterior valor
            ...carrito,///spray operator crea una copia del state y va agregando al carrito
            producto //segundo parametro que se le pasa
        ])
    }
    // Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(p => p.id !== id);
        /// Colocar los productos en el state
        agregarProducto(productos)
    }
    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <h5>{mensaje}</h5>
            {productos
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}   //arrow function 
                    >Comprar</button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={()=> eliminarProducto(id)}
                    >Eliminar</button>
                )
            }

        </div>
    );
}

export default Producto;