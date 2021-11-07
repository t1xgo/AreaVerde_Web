<template>
  <div class="dashboard">
    <transition name="fade" appear>
      <div id="popUpBox" v-if="showingReportsModal">
        <v-row class="ml-auto mr-auto">
          <v-col sm="12" cols="12">
            <div
              class="modal sul-box-raised-2 with-hover"
              justify="center"
              align="center"
              v-if="showingReportsModal"
            >
              <v-row class="ml-auto mr-auto">
                <v-col sm="12" cols="12">
                  <v-select
                    class="mt-10"
                    :rules="rules"
                    :items="categorias"
                    label="tipo de recolector"
                    height="3em"
                    v-model="Cambiocategoria"
                    outlined
                    dense
                    color="green"
                    autocomplete="false"
                  >
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col sm="6" cols="6">
                  <v-btn class="modalButton" @click="actualizarRecolector">
                    Actualizar
                  </v-btn>
                </v-col>
                <v-col sm="6" cols="6">
                  <v-btn
                    class="modalButton"
                    @click="showingReportsModal = false"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </transition>
    <!-- ...............................................Side bar........................................................-->
    <nav>
      <v-navigation-drawer v-model="drawer" app>
        <v-img
          height="140"
          class="pa-4"
          src="https://preview.pixlr.com/images/800wm/1439/2/1439104804.jpg"
        >
          <div class="text-center">
            <v-avatar class="mb-4" color="grey darken-1" size="64">
              <v-img aspect-ratio="30" src="@/assets/img/logo.png" />
            </v-avatar>
            <h2 class="white--text">Area verde</h2>
          </div>
        </v-img>
        <v-divider></v-divider>
        <v-list>
          <v-list-item v-for="[icon, text] in links" :key="icon" link>
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

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
                  <v-btn color="#546E7A" dark block tile @click="step = 2">
                    Administrar recolectores
                  </v-btn>
                  <br />
                  <v-btn color="#546E7A" dark block tile @click="step = 3">
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
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- ...............................................Seccion de administracion de recolectores........................................................-->
      <v-window-item :value="2">
        <v-row class="formRow ml-auto mr-auto">
          <v-col sm="12" cols="12">
            <v-card class="elevation-6 mt-5 mb-10">
              <componenteDialog
                v-if="this.dialogError == true"
                :estadoDialog="true"
                :tituloMensaje="'Error'"
                :mensaje="'Ocurrió un error creando el reclector, verifique que todos los campos estén ingresados y/o que la información sea valida'"
              />
              <v-row justify="center" align="center">
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Agregar un recolector</h2>
                    <h4 class="text-center grey--text">
                      Por favor ingresa la información necesaria para poder
                      crear un nuevo recolector
                    </h4>
                    <v-form ref="formReport" class="pa-3 pt-4" lazy-validation>
                      <v-text-field
                        :rules="rules"
                        label="Documento de identificación"
                        v-model="documento"
                        outlined
                        dense
                        color="green"
                        autocomplete="false"
                      >
                      </v-text-field>
                      <v-text-field
                        :rules="rules"
                        label="Nombre"
                        v-model="nombre"
                        outlined
                        dense
                        color="green"
                        autocomplete="false"
                      >
                      </v-text-field>
                      <v-text-field
                        :rules="rules"
                        label="Celular"
                        outlined
                        v-model="celular"
                        dense
                        color="green"
                        autocomplete="false"
                      >
                      </v-text-field>
                      <v-text-field
                        :rules="emailRules"
                        label="Correo"
                        v-model="correo"
                        outlined
                        dense
                        color="green"
                        autocomplete="false"
                      >
                      </v-text-field>
                      <v-select
                        :rules="rules"
                        v-model="categoria"
                        :items="categorias"
                        label="Tipo"
                        outlined
                      ></v-select>

                      <br />
                      <v-btn
                        color="green"
                        dark
                        block
                        tile
                        @click="crearRecolecor()"
                      >
                        registrar
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          align="center"
          class="ml-auto mr-auto p-auto collectors"
        >
          <v-col
            cols="12"
            sm="12"
            class="d-md-flex"
            align="center"
            justify="center"
          >
            <div class="colTable">
              <table id="collectorsTable">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="colls in collectors"
                    :key="colls.id"
                    @click="RecolectorSele(colls)"
                  >
                    <td>{{ colls.cedula }}</td>
                    <td>{{ colls.recolector }}</td>
                    <td>{{ colls.categoria }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </v-col>
        </v-row>
        <v-button @click="showingReportsModal = true"> Touch me </v-button>
      </v-window-item>

      <!-- ...............................................Seccion de administracion de reportes........................................................-->

      <v-window-item :value="3">
        <v-row class="my-5">
          <v-col sm="12" cols="12">
            <v-row align="center" justify="center">
              <v-col
                v-for="report in reports"
                :key="report.id_reporte"
              >
                <v-card
                  class="
                    mx-12
                    rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
                    mt-n15
                    cardcont
                    codneg
                    text-center
                    my-5
                  "
                  shaped
                >
                  <v-img
                    :src="report.evidence"
                    width="60%"
                    class="d-block ml-auto mr-auto"
                  ></v-img>

                  <v-row align="center" justify="center" class="mt-5">
                    <v-col
                      cols="12"
                      sm="8"
                      class="d-md-flex text-center"
                      align="center"
                      justify="center"
                    >
                      <h4 class="font-weight-regular subtitle-1 text-center">
                        <strong> Descripción: </strong>
                        {{ report.descripcion }}
                        <br />
                        <br />
                        <strong> Ubicación: </strong>
                        {{ report.ubicacion }}
                        <br />
                        <br />
                        <strong> Estado: </strong>
                        {{ report.estado }}
                        <br />
                        <br />
                        <strong> Tipo: </strong>
                        {{ report.categoria }}
                      </h4>
                    </v-col>
                    <br />
                  </v-row>
                  <v-btn color="green" class="px-3 mx-3 my-3 py-3" dark tile>
                    Cambiar tipo
                  </v-btn>
                  <v-btn color="green" class="px-3 mx-3 my-3 py-3" dark tile>
                    Eliminar
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/src/sweetalert2.js";
export default {
  recolectorSeleccionado: "",
  Cambiocategoria: "",
  //collectors table data
  collectors: [],
  token: "",
  sideBar: "Sidebar",
  props: ["drawer"],
  name: "Dashboard",
  documento: "",
  nombre: "",
  celular: "",
  correo: "",
  categoria: "",
  rules: {
    required: [(v) => !!v || "El campo es obligatorio"],
    min: (v) => v.length >= 8 || "Min 8 characters",
    emailRules: [
      (v) => !!v || "El campo es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "Correo invalido",
    ],
  },
  beforeMount() {
    this.token = localStorage.getItem("token");
    this.cargarRecolectores();
    this.getReports();
  },
  data() {
    return {
      //steps that are used to manage the windows
      step: 1,
      //elements modal(popup) toggle management
      showingCollectorsModal: false,
      showingReportsModal: false,
      showingTestModal: false,
      //SideBar links
      links: [
        ["mdi-microsoft-windows", "Tablero"],
        ["mdi-account", "Perfil"],
        ["mdi-clipboard-list-outline", "Estadísticas"],
      ],
      //....................................................................
      categorias: ["Reciclable", "Organico", "No reciclable"],
      reports: [],
      //general information
      activityLog: [
        {
          title: "Usuarios registrados ",
          amount: 53,
          color: "cyan lighten-3",
          time: "",
        },
        {
          title: "Desechos recogidos ",
          amount: 35,
          color: "green darken-2",
          time: "En las ultimas dos semanas",
        },
        {
          title: "Recolectores Registrados",
          amount: 18,
          color: "blue-grey darken-1",
          time: "",
        },
        {
          title: "Desechos pendientes por recoger",
          amount: 47,
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
      //Table data
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
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },

    async getReports() {
      try {
        let token = localStorage.getItem("token");
        let url = `http://localhost:3001/getReports`;
        let reesponse = await axios.get(url, {
          headers: { token },
        });
        this.reports = reesponse.data.content;
      } catch (error) {
        this.reports = [];
        console.error(error);
      }
    },

    async actualizarRecolector() {
      if (
        this.recolectorSeleccionado.id_personal != undefined &&
        this.recolectorSeleccionado.id_personal != "" &&
        this.Cambiocategoria != undefined &&
        this.Cambiocategoria != ""
      ) {
        let token = this.token;
        let recolector = {
          id_personal: this.recolectorSeleccionado.id_personal,
          id_categoriarecolector: "",
        };
        if (this.Cambiocategoria == "Reciclable") {
          recolector.id_categoriarecolector = 1;
        } else if (this.Cambiocategoria == "Organico") {
          recolector.id_categoriarecolector = 2;
        } else if (this.Cambiocategoria == "No reciclable") {
          recolector.id_categoriarecolector = 3;
        }
        await axios.put("http://localhost:3001/putrecolectores", recolector, {
          headers: { token },
        });
        Swal.fire({
          icon: "success",
          title: "Ok...",
          text: "Categoria actualizada",
        });
        this.reloadPage();
      } else {
        console.log("Variables indefinidas");
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Recolector o Categoría indefinidos",
        });
      }
    },
    RecolectorSele(colls) {
      this.showingReportsModal = true;
      this.recolectorSeleccionado = colls;
    },
    async cargarRecolectores() {
      let token = this.token;
      let response = await axios.get("http://localhost:3001/getrecolectores", {
        headers: { token },
      });
      this.collectors = response.data.content;
    },
    async crearRecolecor() {
      let tipo;
      if (this.categoria == "Reciclable") {
        tipo = 1;
      } else if (this.categoria == "Organico") {
        tipo = 2;
      } else if (this.categoria == "No reciclable") {
        tipo = 3;
      }
      let recolector = {
        nombre: this.nombre,
        cedula: this.documento,
        celular: this.celular,
        correo: this.correo,
        id_categoriarecolector: tipo,
      };
      let token = this.token;
      await axios.post("http://localhost:3001/postrecolectores", recolector, {
        headers: { token },
      });
      this.reloadPage();
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
.codneg {
  border: 10px;
  border-color: black;
}
.cardcont {
  padding: 2%;
}
.formRow {
  width: 60%;
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
#popUpBox {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
}
.modal {
  position: absolute;
  top: 30%;
  left: 30%;
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}
.modalButton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #80ff72, #7ee8fa);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.modalButton:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
