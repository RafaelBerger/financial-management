import axios from "axios";

const BACKEND_URL = "http://localhost:8080/";

export const getAllTasks = async () => {
  const response = await axios.get(`${BACKEND_URL}tasks`);
  return response.data;
};

export const getBalance = async () => {
  const response = await axios.get(`${BACKEND_URL}balance`);
  return response.data;
};

interface postArgs {
  descricao: string;
  dinheiro: number;
  positivo: boolean;
  data_registro: string;
}

export const postTasks = async (
  descricao: postArgs,
  dinheiro: postArgs,
  positivo: postArgs,
  data: postArgs
) => {
  const response = await axios.post(BACKEND_URL, {
    descriptions: descricao,
    money: dinheiro,
    positive: positivo,
    data_registro: data,
  });

  return response;
};

interface deleteTaskArgs {
  id: number;
}

export const deleteTask = async (id: deleteTaskArgs) => {
  const response = await axios.delete(BACKEND_URL + `${id}`);
  return response;
};
