export default {
  name: "Auth",
  component: () =>
    import(
      /* webpackChunkName: "Auth" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      name: "Login",
      path: "",
      component: () =>
        import(
          /* webpackChunkName: "Login" */ "@/modules/auth/views/Login.vue"
        ),
    },
    {
      name: "Register",
      path: "/register",
      component: () =>
        import(
          /* webpackChunkName: "Register" */ "@/modules/auth/views/Register.vue"
        ),
    },
  ],
};
