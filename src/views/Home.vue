<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <button @click="goToDaybook" class="btn btn-primary">primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">secondary</button>
  <button @click="goToDaybook" class="btn btn-success">success</button>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },

  mounted() {
    this.$router.push({ name: "no-entry" });
  },
};
</script>
