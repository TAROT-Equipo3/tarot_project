import axios from "axios";

// Esta es tu única "fuente de la verdad" para la URL
const API_URL = "http://localhost:3000/historial";

export async function getHistorial() {
  const response = await axios.get(API_URL);
  console.log(response.data)
  return response.data;
}

export async function deleteHistoryItem(id) {
    await axios.delete(`${API_URL}/${id}`);
}

// Reutilizamos el API_URL de arriba, sin volver a declararlo
export const updateHistoryName = async (id, updatedData) => {
  const response = await axios.patch(`${API_URL}/${id}`, updatedData);
  return response.data;
}