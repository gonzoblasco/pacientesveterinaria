import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...stateInicial };

  handleChange = e => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });

      return;
    } else {
      this.setState({
        error: false
      });
    }

    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();

    this.props.crearNuevaCita(nuevaCita);

    this.setState({ ...stateInicial });
  };

  render() {
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="cart-title text-center mb-5">
            Llena el Formulario para crear una Nueva Cita
          </h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  className="form-control"
                  name="mascota"
                  onChange={this.handleChange}
                  placeholder="Nombre Mascota"
                  type="text"
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  className="form-control"
                  name="propietario"
                  onChange={this.handleChange}
                  placeholder="Nombre Dueño Mascota"
                  type="text"
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  type="date"
                  value={this.state.cita.fecha}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  type="time"
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            {/* form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  onChange={this.handleChange}
                  placeholder="Describe los Sintomas"
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            {/* form-group */}

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
