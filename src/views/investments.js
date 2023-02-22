import React, { useState } from "react";
import "../styles/investments.css";
import Table from "../components/table";
import axios from "../utils/axiosConfig";
import useInvestmentsRequest from "../hooks/investmentsRequest";
import { COMMONERRORS, ENDPOINTS, METHODS } from "../utils/requestConfig";
import useForms from "../hooks/forms";

const Investments = () => {
  const [formValues, handleOnChange, reset, customValues] = useForms({
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
  const { loading, fetching } = useInvestmentsRequest();
  const loadingIcon = <div className="lds-hourglass"></div>;

  const alertError = (message) => (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );

  const handleReset = (e) => {
    e.preventDefault();
    setReponse({
      finalBalance: "",
      investmentEarnings: "",
      investments: {},
    });
    reset();
    setMessage("");
    setErrMessage("");
  };

  const isValidForm = () => {
    const ln = /^[0-9]*$/;

    if (
      formValues.initialInvestment === "" ||
      !ln.test(formValues.initialInvestment.trim()) ||
      formValues.initialInvestment.length <= 3
    ) {
      setMessage(COMMONERRORS.investmenError);
      return false;
    } else if (
      !ln.test(formValues.annualContributionIncreasement.trim()) ||
      !ln.test(formValues.annualContribution.trim())
    ) {
      setMessage(COMMONERRORS.investmenError);
      return false;
    } else if (
      formValues.yearsOfInvestment === "" ||
      formValues.yearsOfInvestment === "0" ||
      !ln.test(formValues.yearsOfInvestment.trim())
    ) {
      setMessage(COMMONERRORS.investmenError);
      return false;
    } else if (
      formValues.investmentReturn === "" ||
      !ln.test(formValues.investmentReturn.trim())
    ) {
      setMessage(COMMONERRORS.investmenError);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setReponse({
      ...response,
      finalBalance: "",
      investmentEarnings: "",
      investments: {},
    });
    setMessage("");
    setErrMessage("");
    const tempForm = {
      ...formValues,
      annualContribution:
        formValues.annualContribution === ""
          ? "0"
          : formValues.annualContribution,
      annualContributionIncreasement:
        formValues.annualContributionIncreasement === ""
          ? "0"
          : formValues.annualContributionIncreasement,
    };

    if (isValidForm()) {
      customValues(tempForm);
      fetching(
        {
          AxiosInstance: axios,
          method: METHODS.POST,
          url: ENDPOINTS.investmenURI,
          params: tempForm,
        },
        (responseData) => {
          if (responseData.status === 200) {
            setReponse(responseData.data);
          } else if ((responseData.name = "AxiosError")) {
            setErrMessage(alertError(responseData.message));
          }
        }
      );
    }
  };

  return (
    <div className="formHome">
      <h3 style={{ marginTop: "30px" }}>
        Ingresa los siguientes datos para realizar el cálculo
      </h3>
      <hr style={{ width: "700px" }} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              name="initialInvestment"
              value={formValues.initialInvestment}
              onChange={(e) => handleOnChange(e)}
              className="form-control"
              placeholder="Inverson Inicial"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              name="annualContribution"
              value={formValues.annualContribution}
              onChange={(e) => handleOnChange(e)}
              className="form-control"
              placeholder="Aportacion Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              name="annualContributionIncreasement"
              value={formValues.annualContributionIncreasement}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Porcentaje de Incremento Anual"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="mb-3">
            <input
              name="yearsOfInvestment"
              value={formValues.yearsOfInvestment}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Años de Inversion"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">%</span>
            <input
              className="form-control"
              name="investmentReturn"
              value={formValues.investmentReturn}
              onChange={handleOnChange}
              placeholder="Porcentaje de rendimiento"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
        </div>
        <div className="errorForm form-group">{message}</div>
        <div className="row">
          <button
            className="calc btn btn-outline-dark col-3"
            onClick={(e) => handleSubmit(e)}
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
      {!!loading && loadingIcon}
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
