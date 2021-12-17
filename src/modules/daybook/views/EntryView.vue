<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold"> {{ day }} </span>
      <span class="mx-1 fs-3"> {{ month }} </span>
      <span class="mx-1 fs-4 fw-light"> {{ year }} </span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea
      placeholder="Que hiciste el dia de hoy?"
      v-model="entry.text"
    ></textarea>
  </div>

  <Fab icon="fa-save" />
  <img :src="entry.picture" alt="entry-picture" class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters } from "vuex";
import getDate from "../helpers/getDate";

export default {
  props: {
    entryId: {
      type: String,
      required: true,
    },
  },

  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },

  data() {
    return {
      entry: {},
    };
  },

  computed: {
    ...mapGetters({
      entryById: "journal/getEntryById",
    }),
    day() {
      const { day } = getDate(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDate(this.entry.date);
      return month;
    },
    year() {
      const { yearDay } = getDate(this.entry.date);
      return yearDay;
    },
  },

  methods: {
    loadEntry() {
      const entry = this.entryById(this.entryId);
      if (!entry) return this.$router.push({ name: "no-entry" });
      this.entry = entry;
    },
  },

  created() {
    this.loadEntry();
  },

  watch: {
    entryId() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>
