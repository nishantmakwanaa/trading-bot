const API_BASE_URL = '/api/v1';

export const API_ENDPOINTS = {
  ANALYZE_SCREEN: `${API_BASE_URL}/analyze`,
  GET_PATTERNS: `${API_BASE_URL}/patterns`,
  GET_PATTERN: (id: string) => `${API_BASE_URL}/patterns/${id}`,
  GET_ANALYSES: `${API_BASE_URL}/analyses`,
  GET_ANALYSIS: (id: string) => `${API_BASE_URL}/analyses/${id}`,
  GET_ALERTS: `${API_BASE_URL}/alerts`,
  CREATE_ALERT: `${API_BASE_URL}/alerts`,
  DELETE_ALERT: (id: string) => `${API_BASE_URL}/alerts/${id}`,
  GET_SETTINGS: `${API_BASE_URL}/settings`,
  UPDATE_SETTINGS: `${API_BASE_URL}/settings`,
};