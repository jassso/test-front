import axios from "axios";
import { HTTP } from "./requestConfig";

export default axios.create({
  baseURL: HTTP.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
