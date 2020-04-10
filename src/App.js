import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {
  const fechaActual = new Date().getFullYear();

  //Crear un listado productos y mostrar con el State
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 100 },
    { id: 2, nombre: 'Camisa Angular', precio: 80 },
    { id: 3, nombre: 'Camisa Node.js', precio: 50 },
    { id: 4, nombre: 'Camisa VueJS', precio: 40 },
  ]);

  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);
  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
        edad={30}
        direccion='Cl 89 # 84b-15'
        telefono='3184043192'
        profesion='Ingeniero de Software'
      />

      <h1>Lista de Prodcutos</h1>
      {productos.map(p => (
        <Producto
          key={p.id}
          producto={p}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto = {agregarProducto}
      />
      <Footer
        fechaFooter={fechaActual}
      />
    </Fragment>
  );
}

export default App;
