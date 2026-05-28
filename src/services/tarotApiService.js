// src/services/tarotApiService.js
import axios from 'axios';

const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export const getTarotCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las cartas del tarot:", error);
    throw error;
  }
};

export const getCardById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al revelar la carta con id ${id}:`, error);
    throw error;
  }
};