import React, { Fragment } from 'react';


function Header(props) {
    const edad = 15;
    let mensaje;

    if (edad >= 18) {
        if (edad < 50) {
            mensaje = 'Eres mayor de edad y estas entre los 18 y 50';
        }
        else {
            mensaje = 'Eres muy cucho llaee';
        }
    }
    else {
        if (edad < 5) {
            mensaje = 'Tienes entre 0 y 5 años de edad'
        }
        else {
            mensaje = 'Eres menor de edad y estas entre los 6 a los 18 años';
        }
    }

    return (
        <Fragment>
            <h1>{props.titulo}</h1>
            <h1>Desde el header mostrando la edad {edad} {mensaje} y su telefono es {props.telefono}</h1>
            <ul>
                <li>Primera Lista su direccion es : {props.direccion} </li>
                <li>Segunda Lista con su profesion: {props.profesion}  </li>
                <li>Tercera Lista con edad de {props.edad} </li>
            </ul>
        </Fragment>
    )
}

export default Header;