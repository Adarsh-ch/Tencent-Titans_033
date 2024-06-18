import axios, { AxiosResponse } from 'axios';
import { UserProfile } from 'firebase/auth';

const api = axios.create({
  baseURL: 'https://server-deploy-7sg1.onrender.com/'
});

export const fetchData = async (query : string) => {

  try {
    const response: AxiosResponse = await api.get(`${query}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error; 
  }
};

export const updateData = async(query : string,data : UserProfile) => {
  try {
    const response: AxiosResponse = await api.put(`${query}`,data);
    return response.data; 
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error; 
  }
}

export default api;
