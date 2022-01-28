import axios from "axios";
const { VUE_APP_FIREBASE_API } = process.env;

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: VUE_APP_FIREBASE_API,
  },
});

export default authApi;
