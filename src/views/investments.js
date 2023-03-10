import React, { useEffect, useState } from "react";
import "../styles/investments.css";
import Table from "../components/table";
import investmentsRequest from "../actions/investmentsRequest";

const Investments = () => {
  const [formData, setFormData] = useState({
    initialInvestment: "",
    annualContribution: "",
    yearsOfInvestment: "",
    annualContributionIncreasement: "",
    investmentReturn: "",
  });

  const [message, setMessage] = useState("");
  const [response, setReponse] = useState({
    finalBalance: "",
    investmentEarnings: "",
    investments: {},
  });
  const [errMessage, setErrMessage] = useState("");

  const alertError = (message) => (
    <div class="alert alert-danger" role="alert">
      {message}
    </div>
  );

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setReponse({
      ...response,
      finalBalance: "",
      investmentEarnings: "",
      investments: {},
    });
    setFormData({
      ...formData,
      initialInvestment: "",
      annualContribution: "",
      yearsOfInvestment: "",
      annualContributionIncreasement: "",
      investmentReturn: "",
    });
    setMessage("");
    setErrMessage("");
  };

  const isValidForm = () => {
    const ln = /^[0-9]*$/;

    if (
      formData.initialInvestment === "" ||
      !ln.test(formData.initialInvestment.trim()) ||
      formData.initialInvestment.length <= 3
    ) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    } else if (
      !ln.test(formData.annualContributionIncreasement.trim()) ||
      !ln.test(formData.annualContribution.trim())
    ) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    } else if (
      formData.yearsOfInvestment === "" ||
      formData.yearsOfInvestment === "0" ||
      !ln.test(formData.yearsOfInvestment.trim())
    ) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    } else if (
      formData.investmentReturn === "" ||
      !ln.test(formData.investmentReturn.trim())
    ) {
      setMessage(
        "No es posible procesar su solicitud con los datos proporcionados"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempForm = {
      ...formData,
      annualContribution:
        formData.annualContribution === "" ? "0" : formData.annualContribution,
      annualContributionIncreasement:
        formData.annualContributionIncreasement === ""
          ? "0"
          : formData.annualContributionIncreasement,
    };

    if (isValidForm()) {
      setFormData(tempForm);
      investmentsRequest(tempForm).then((result) => {
        if (result.status === 200) {
          setReponse(result.data);
        } else if (result.code === "ERR_NETWORK") {
          setErrMessage(alertError(result.message));
        }
      });
      setMessage("");
      setErrMessage("");
    }
  };

  return (
    <div className="formHome">
      <h3 style={{ marginTop: "30px" }}>
        Ingresa los siguientes datos para realizar el c??lculo
      </h3>
      <hr style={{ width: "700px" }} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              name="initialInvestment"
              value={formData.initialInvestment}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Inverson Inicial"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              name="annualContribution"
              value={formData.annualContribution}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Aportacion Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              name="annualContributionIncreasement"
              value={formData.annualContributionIncreasement}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Porcentaje de Incremento Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="mb-3">
            <input
              name="yearsOfInvestment"
              value={formData.yearsOfInvestment}
              onChange={handleInputChange}
              className="form-control"
              placeholder="A??os de Inversion"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              className="form-control"
              name="investmentReturn"
              value={formData.investmentReturn}
              onChange={handleInputChange}
              placeholder="Porcentaje de rendimiento"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
        </div>
        <div className="errorForm form-group">{message}</div>
        <div className="row">
          <button
            className="calc btn btn-outline-dark col-3"
            onClick={handleSubmit}
          >
            Calcular
          </button>
          <button
            className="calc btn btn-secondary col-3"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
      {errMessage}

      {response.finalBalance && response.investmentEarnings && (
        <>
          <hr style={{ width: "700px" }} />
          <span className="input-group-text" style={{ marginTop: "20px" }}>
            Ganancia por Inversion: ${response.finalBalance}
          </span>
        </>
      )}
      {response.finalBalance && response.investmentEarnings && (
        <span className="input-group-text" style={{ marginTop: "20px" }}>
          Monto Final: ${response.investmentEarnings}
        </span>
      )}
      {response.finalBalance && response.investmentEarnings && (
        <Table dataParent={response.investments} />
      )}
    </div>
  );
};

export default Investments;
