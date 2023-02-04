import React, { useState } from "react";
import "../styles/investments.css";
import Table from "../components/table";

const Investments = () => {
  const [formData, setFormData] = useState({
    invIni: "",
    aporAnual: "",
    porInAnual: "",
    anhoInv: "",
    porRend: "",
  });

  const [message, setMessage] = useState("");
  const [response, setReponse] = useState({
    ganancia: "1",
    monFin: "1",
  });

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const isValidForm = () => {
    const ln = /^[0-9]*$/;

    if (formData.invIni === "" || !ln.test(formData.invIni)) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }
    if (formData.aporAnual === "" || !ln.test(formData.aporAnual)) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }
    if (formData.porInAnual === "" || !ln.test(formData.porInAnual)) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }
    if (formData.anhoInv === "" || !ln.test(formData.anhoInv)) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }
    if (formData.porRend === "" || !ln.test(formData.porRend)) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      setMessage("");
    }
  };

  console.log("form", formData);

  return (
    <div className="formHome">
      <h3 style={{ marginTop: "15px" }}>
        Ingresa los siguientes datos para realizar el cálculo
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              name="invIni"
              value={formData.invIni}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Inverson Inicial"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              name="aporAnual"
              value={formData.aporAnual}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Aportacion Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              type="text"
              value={formData.porInAnual}
              name="porInAnual"
              onChange={handleInputChange}
              className="form-control"
              placeholder="Porcentaje de Incremento Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="anhoInv"
              value={formData.anhoInv}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Años de Inversion"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              type="text"
              className="form-control"
              name="porRend"
              value={formData.porRend}
              onChange={handleInputChange}
              placeholder="Porcentaje de rendimiento"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
        </div>
        <div className="errorForm form-group">{message}</div>
        <button className="btn btn-outline-dark" onClick={handleSubmit}>
          Calcular
        </button>
        {response.ganancia && response.monFin && (
          <span className="input-group-text" style={{ marginTop: "20px" }}>
            Ganancia por Inversion: ${response.ganancia}
          </span>
        )}
        {response.ganancia && response.monFin && (
          <span className="input-group-text" style={{ marginTop: "20px" }}>
            Monto Final: ${response.monFin}
          </span>
        )}
      </form>
      {response.ganancia && response.monFin && <Table />}
    </div>
  );
};

export default Investments;
