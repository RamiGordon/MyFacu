import React, { Component } from 'react';
import Materia from './Materia';
import { Materias } from '../Materias';
import '../Styles/Tabla.css';

class Tabla extends Component {
    render() {
        console.log(Materias)
        const list = Materias.map((materia, i) => {
            return (<Materia mat={materia} key={i}/>)
        });
        return (
            <div className="content">
                <table className="tabla-content">
                    <thead>
                        <tr>
                            <th id="th-anio"><strong>Año</strong></th>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Promocion</strong></th>
                            <th><strong>Final</strong></th>
                            <th><strong>Nota</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        { list }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabla
