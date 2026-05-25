// Endpoints del json-server local
import axios from "axios";

const API_URL = "http://localhost:3000/historial";

export async function getHistorial() {
  const response = await axios.get(API_URL);
  console.log(response.data)
  return response.data;
}

export async function deleteHistoryItem(id) {
    await axios.delete(`${API_URL}/${id}`);
}
