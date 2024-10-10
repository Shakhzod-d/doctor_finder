import axios from 'axios';
import { BASE_URL } from './constants'; // Import the base URL constant

// Create an Axios instance
const createApiClient = (apiKey) => {
  const client = axios.create({
    baseURL: BASE_URL, // Use the base URL from constants
    headers: {
      'api-key': apiKey,
    },
  });

  return client;
};

export default createApiClient;