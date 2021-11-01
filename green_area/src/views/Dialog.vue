<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="300">
      <v-card-title class="text-h5 grey lighten-2" v-text="this.tituloMensaje">
      </v-card-title>
      <center>
        <h1 class="white lighten-2">
          <v-icon x-large v-if="icono" color="green">
            mdi-star-check-outline
          </v-icon>
          <v-icon x-large v-else color="red"> mdi-close-box-outline </v-icon>
        </h1>
      </center>
      <v-card-text class="white lighten-2" v-text="this.mensaje"> </v-card-text>

      <v-divider class="white lighten-2"></v-divider>

      <v-card-actions class="white lighten-2">
        <v-spacer></v-spacer>
        <v-btn color="#F29544" text @click="dialog = false"> Ok </v-btn>
      </v-card-actions>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["tituloMensaje", "colorTitulo", "mensaje", "estadoDialog", "icono"],
  data() {
    return {
      dialog: this.estadoDialog,
    };
  },
  methods: {},
};
</script>

<style>
</style>