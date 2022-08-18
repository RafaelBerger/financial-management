import axios from "axios";

const BACKEND_URL = "http://localhost:8080";

export const getSomething = async () => {
  const response = await axios.get(BACKEND_URL);
  return response;
};
