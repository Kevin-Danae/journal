<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold"> {{ day }} </span>
      <span class="mx-1 fs-3"> {{ month }} </span>
      <span class="mx-1 fs-4 fw-light"> {{ year }} </span>
    </div>
    <div>
      <button class="btn btn-danger mx-2" @click="onDelete" v-if="entry.id">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <input type="file" @change="onSelectImage" />
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

  <Fab icon="fa-save" @on:click="savedEntry" />
  <img
    v-if="entry?.picture"
    :src="entry.picture"
    alt="entry-picture"
    class="img-thumbnail"
  />

  <img
    v-if="localImage"
    :src="localImage"
    alt="imagen local"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
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
      localImage: null,
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
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),

    loadEntry() {
      let entry;

      if (this.entryId === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.entryById(this.entryId);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },

    async savedEntry() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      if (this.entry.id) {
        await this.updateEntry(this.entry);
      } else {
        // crear nueva entrada
        const entryId = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { entryId } });
      }
      Swal.fire("Guardado", "Entrada guardada correctamente", "success");
    },

    async onDelete() {
      const { isConfirmed } = await Swal.fire({
        title: "Estas seguro?",
        text: "Una vez borrado no podras recuperar la entrada",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Si, borrar!",
        cancelButtonText: "No, cancelar!",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Eliminado", "", "success");
      }
    },

    onSelectImage(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.localImage = e.target.result;
      };
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
