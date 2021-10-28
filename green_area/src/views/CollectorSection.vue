<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h1>Tablero</h1>
    </v-subheader>
    <br />

    <v-col lg="7" cols="12">
      <v-alert dense text type="success">
        Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
      </v-alert>
    </v-col>

    <v-row align="center" justify="center">
      <v-col lg="6" cols="12" align="center" justify="center">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div><strong>Recogidos</strong> <br /></div>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col lg="6" cols="12" align="center" justify="center">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div><strong>Pendientes por recoger</strong> <br /></div>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between">
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-col
      sm="12"
      lg="5"
      cols="12"
      justify="center"
      align="center"
      class="text-center"
    >
    </v-col>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  name: "Dashboard",
  data() {
    return {
      activityLog: [
        {
          title: "Recogidos",
          icon: "mdi-account-group-outline",
          color: "green darken-2",
        },
        {
          title: "Pendientes por recoger",
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
        },
      ],
    };
  },
  methods: {
    onButtonClick(item) {
      console.log("click on " + item.no);
    },
  },
};
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
.dashboard {
  margin-left: 10px;
  padding: 10px;
}
</style>
