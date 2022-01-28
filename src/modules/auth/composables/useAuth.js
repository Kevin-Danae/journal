import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    return await store.dispatch("auth/createUser", user);
  };

  const loginUser = async (user) => {
    return await store.dispatch("auth/loginUser", user);
  };

  const checkStatus = async () => {
    const resp = await store.dispatch("auth/checkAuth");
    return resp;
  };

  const logout = () => {
    store.commit("auth/logout");
    store.commit("journal/clearEntries");
  };

  return {
    checkStatus,
    createUser,
    loginUser,

    authStatus: computed(() => store.getters["auth/currentState"]),
    username: computed(() => store.getters["auth/username"]),
    logout,
  };
};

export default useAuth;
