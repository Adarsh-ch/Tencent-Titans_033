import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001'
});

export const fetchProperties = async (query : string) => {

  try {
    const response: AxiosResponse = await api.get(`/properties${query}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error; 
  }
};

export default api;
