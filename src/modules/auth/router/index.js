export default {
  name: "Auth",
  component: () =>
    import(
      /* webpackChunkName: "Auth" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [],
};
