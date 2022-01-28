import axios from "axios";
const { VUE_APP_FIREBASE_URL } = process.env;

const journalApi = axios.create({
  baseURL: VUE_APP_FIREBASE_URL,
});

journalApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    auth: localStorage.getItem("idToken"),
  };

  return config;
});

export default journalApi;
