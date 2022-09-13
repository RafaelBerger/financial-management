import axios from "axios";

const BACKEND_URL = "http://localhost:8080/";

export const getExpense = () => {
  const response = axios.get(`${BACKEND_URL}expense`);
  return response;
};
