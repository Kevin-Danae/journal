<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  name: "NoEntrySelected",
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab")),
  },

  methods: {
    createNewEntry() {
      this.$router.push({ name: "entry", params: { entryId: "new" } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
