import React from "react";

const investmentsRequest = () => {
  const URL = "http://localhost:8080/";

  return axios
    .get(`${URL}Invest`)
    .then(res)
    .catch((err) => console.log(err));
};

export default investmentsRequest;
