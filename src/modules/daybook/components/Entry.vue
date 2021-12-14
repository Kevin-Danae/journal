<template>
  <div class="entry-container mb-3 pointer p-2">
    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">13</span>
      <span class="mx-1 fs-5">Diciembre</span>
      <span class="mx-1 fw-light">2021, Lunes.</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
      quisquam voluptas et eos iste modi odit, sapiente reprehenderit est harum
      dolorem error dolor ipsum saepe quasi architecto iusto illo.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45%);
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
