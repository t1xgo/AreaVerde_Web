<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <v-window v-model="step">
      <!-- ...............................................Seccion Principal........................................................-->

      <v-window-item :value="1">
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
                  <v-card-text
                    class="d-flex justify-space-between align-center"
                  >
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
                  <v-btn color="#546E7A" dark block tile @click="step++">
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
                :items="statistics"
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
      </v-window-item>
      <!-- ...............................................Seccion de administracion de recolectores........................................................-->
      <v-window-item :value="2">
        <v-row
          justify="center"
          align="center"
          class="ml-auto mr-auto p-auto collectors"
        >
          <v-col cols="12"  sm="12">
            <table id="collectorsTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Tpye</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="colls in collectors" :key="colls.id">
                  <td>{{ colls.id }}</td>
                  <td>{{ colls.name }}</td>
                  <td>{{ colls.type }}</td>
                </tr>
              </tbody>
            </table>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
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
      step: 1,
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
        { text: "Codigo verde", value: "Belen" },
        { text: "Codigo Negro", value: "Laureles" },
        { text: "Codigo blanco", value: "Poblado" },
      ],
      statistics: [
        {
          name: "Belen",
          Belen: 32,
          Laureles: 15,
          Poblado: 24,
        },
        {
          name: "Laureles",
          Belen: 13,
          Laureles: 28,
          Poblado: 37,
        },
        {
          name: "Poblado",
          Belen: 34,
          Laureles: 16,
          Poblado: 23,
        },
        {
          name: "Prado",
          Belen: 11,
          Laureles: 3,
          Poblado: 27,
        },
        {
          name: "Santo Domingo Savio",
          Belen: 36,
          Laureles: 16,
          Poblado: 19,
        },
        {
          name: "San Joaquín",
          Belen: 35,
          Laureles: 25,
          Poblado: 11,
        },
      ],
      collectors: [
        { id: "123", name: "EmVarias", type: "guasacaca" },
        { id: "456", name: "EmPocas", type: "cacaguasa" },
        { id: "789", name: "EmMuchas", type: "sacaguaca" },
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
.collectors {
  width: 100vh;
}
</style>
<style>
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
