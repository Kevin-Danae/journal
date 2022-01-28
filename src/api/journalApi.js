import axios from "axios";
const { VUE_APP_FIREBASE_URL } = process.env;

const journalApi = axios.create({
  baseURL: VUE_APP_FIREBASE_URL,
});

export default journalApi;
