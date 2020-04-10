import React from 'react';
import './carrito.css';
import Producto from './Producto';


const Carrito = ({ carrito,agregarProducto }) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
            ?<p>No hay elementos en el carriñho</p>
            :
            carrito.map(p => (
                <Producto
                    key={p.id}
                    producto={p}
                    carrito = {carrito}
                    agregarProducto = {agregarProducto}
                />
            ))
        }
    </div>
);

export default Carrito;