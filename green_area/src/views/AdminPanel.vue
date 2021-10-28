<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h1>Tablero</h1>
    </v-subheader>
    <br />
    <v-row>
      <v-col lg="7" cols="12">
        <v-alert dense text type="success">
          Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
        </v-alert>
        <v-row>
          <v-col
            lg="6"
            cols="12"
            v-for="(item, index) in activityLog"
            :key="index"
          >
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br />
                  <span>{{ item.time }}</span>
                </div>
                <v-avatar
                  size="60"
                  :color="item.color"
                  style="border: 3px solid #444"
                >
                  <span style="color: white">{{ item.amount }} +</span>
                </v-avatar>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between">
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        sm="12"
        lg="5"
        cols="12"
        justify="center"
        align="center"
        class="text-center"
      >
        <v-card class="elevation-6 mt-5 mb-10">
          <v-row justify="center" align="center" class="text-center">
            <v-col cols="12" sm="6">
              <v-card-title> Panel administrativo </v-card-title>
              <v-btn color="#546E7A" dark block tile>
                Administrar recolectores
              </v-btn>
              <br />
              <v-btn color="#546E7A" dark block tile>
                administrar reportes
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-data-table
            caption="Segumiento"
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          >
            <template>
              <v-btn color="success" outlined small shaped>View</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
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
          title: "Usuarios registrados ",
          amount: 53,
          icon: "mdi-account",
          color: "cyan lighten-3",
          time: "",
        },
        {
          title: "Desechos recogidos ",
          amount: 35,
          icon: "mdi-account-group-outline",
          color: "green darken-2",
          time: "En las ultimas dos semanas",
        },
        {
          title: "Recolectores Registrados",
          amount: 18,
          icon: "mdi-account-group-outline",
          color: "blue-grey darken-1",
          time: "",
        },
        {
          title: "Desechos pendientes por recoger",
          amount: 47,
          icon: "mdi-account-group-outline",
          color: "deep-orange darken-1",
          time: "En la ultima semana",
        },
      ],
      headers: [
        {
          text: "zona metropolitana",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Codigo verde", value: "calories" },
        { text: "Codigo Negro", value: "fat" },
        { text: "Codigo blanco", value: "carbs" },
      ],
      desserts: [
        {
          name: "Belen",
          calories: 32,
          fat: 15,
          carbs: 24,
          protein: 45,
          iron: "1%",
        },
        {
          name: "Laureles",
          calories: 13,
          fat: 28,
          carbs: 37,
          protein: 19,
          iron: "1%",
        },
        {
          name: "Poblado",
          calories: 34,
          fat: 16,
          carbs: 23,
          protein: 6,
          iron: "7%",
        },
        {
          name: "Prado",
          calories: 11,
          fat: 3,
          carbs: 27,
          protein: 43,
          iron: "8%",
        },
        {
          name: "Santo Domingo Savio",
          calories: 36,
          fat: 16,
          carbs: 19,
          protein: 33,
          iron: "16%",
        },
        {
          name: "San Joaquín",
          calories: 35,
          fat: 25,
          carbs: 11,
          protein: 33,
          iron: "0%",
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
