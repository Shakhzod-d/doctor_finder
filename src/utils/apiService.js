import createApiClient from './apiClient';

import { API_KEY } from './constants'; // Import the API key constant

// Initialize the API client with your API key
const apiClient = createApiClient(API_KEY);

const ApiService = {
  getFaqs: async () => {
    const response = await apiClient.get('/faqs');
    return response.data;
  },

  getAppSettings: async () => {
    const response = await apiClient.get('/app-settings');
    return response.data;
  },

  getArticles: async () => {
    const response = await apiClient.get('/articles');
    return response.data;
  },

  getArticleDetails: async (id) => {
    const response = await apiClient.get(`/articles/${id}`);
    return response.data;
  },

  submitContactForm: async (name, mobile, email, message) => {
    const response = await apiClient.post('/contacts', { name, mobile, email, message });
    return response.data;
  },

  getListings: async (cityId) => {
    const response = await apiClient.get('/listings', { params: { city_id: cityId } });
    return response.data;
  },

  getListingsBySpecialist: async (cityId, specialistId) => {
    const response = await apiClient.get('/listings', {
      params: { city_id: cityId, specialist_id: specialistId },
    });
    return response.data;
  },

  getListingsByTreatment: async (cityId, treatmentId) => {
    const response = await apiClient.get('/listings', {
      params: { city_id: cityId, treatment_id: treatmentId },
    });
    return response.data;
  },

  searchListings: async (query, cityId) => {
    const response = await apiClient.get('/listings', { params: { search: query, city_id: cityId } });
    return response.data;
  },

  getCities: async (districtId) => {
    const response = await apiClient.get('/cities', { params: { district_id: districtId } });
    return response.data;
  },

  getDistricts: async (stateId) => {
    const response = await apiClient.get('/districts', { params: { state_id: stateId } });
    return response.data;
  },

  getStates: async () => {
    const response = await apiClient.get('/states');
    return response.data;
  },

  getSpecialists: async () => {
    const response = await apiClient.get('/specialists');
    return response.data;
  },

  getTreatments: async () => {
    const response = await apiClient.get('/treatments');
    return response.data;
  },

  getEducation: async () => {
    const response = await apiClient.get('/education');
    return response.data;
  },
};

export default ApiService;
