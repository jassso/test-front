import axios from "axios";

const investmentsRequest = async (dataObject) => {
  const URL = "http://localhost:8081/";
  const investMapping = "Invest";

  return await axios
    .post(URL.concat(investMapping), dataObject)
    .then((res) => res)
    .catch((err) => err);
};

export default investmentsRequest;
