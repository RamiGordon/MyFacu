import React, { Component } from 'react';

class Materia extends Component {
  render() {
    const materia = this.props.mat;
    return (
        <tr>
            <td id="td-anio">{materia.año}</td>
            <td>{materia.nombre}</td>
            <td>{materia.promocion}</td>
            <td>{materia.final}</td>
            <td>{materia.nota}</td>
        </tr>
      
    )
  }
}

export default Materia;
