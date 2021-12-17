export default {
  name: "daybook",
  component: () => import("@/modules/daybook/layouts/DaybookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("@/modules/daybook/views/NoEntrySelected.vue"),
    },
    {
      path: ":entryId",
      name: "entry",
      component: () => import("@/modules/daybook/views/EntryView.vue"),
      props: (route) => {
        return {
          entryId: route.params.entryId,
        };
      },
    },
  ],
};
