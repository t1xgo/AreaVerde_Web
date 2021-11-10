<template>
  <div class="dashboard">
    <transition name="fade" appear>
      <div id="popUpBox" v-if="showingReportsModal">
        <v-row class="ml-auto mr-auto">
          <v-col sm="12" cols="12">
            <div
              class="modal sul-box-inset-1 with-hover"
              justify="center"
              align="center"
              v-if="showingReportsModal"
            >
              <v-row class="ml-auto mr-auto">
                <v-col sm="12" cols="12">
                  <v-select
                    class="mt-10 sul-select"
                    :rules="rules"
                    :items="categorias"
                    label="Categoría"
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
                  <v-btn
                    v-if="step == 2"
                    class="modalButton"
                    @click="actualizarRecolector"
                  >
                    Actualizar
                  </v-btn>
                  <v-btn
                    v-else-if="step == 3"
                    class="modalButton"
                    @click="actualizarReporte(reporteEnEdicion)"
                  >
                    Aprobar
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
      <v-navigation-drawer v-model="drawer" color="#ebecf0" app>
        <div class="sul-box-raised-2 with-hover">
          <v-divider></v-divider>
          <v-list>
            <v-col cols="12" sm="12" justify="center" align-self="center">
              <v-list-item
                v-for="[icon, text] in links"
                :key="icon"
                link
                @click="sideBarAction(icon)"
              >
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-list>
        </div>
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
            <div class="sul-box-raised-1 with-hover">
              <v-alert dense text type="success">
                Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
              </v-alert>
            </div>
          </v-col>

          <v-col
            sm="12"
            lg="5"
            cols="12"
            justify="center"
            align="center"
            class="text-center"
          >
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col sm="10" cols="12">
            <v-card class="mt-5 mb-10" color="#ebecf0">
              <div class="sul-box-raised-2 with-hover">
                <v-row justify="center" align="center" class="text-center">
                  <v-col
                    cols="12"
                    sm="6"
                    justify="center"
                    align="center"
                    class="pb-10"
                  >
                    <h2 class="pb-10">Panel administrativo</h2>
                    <v-btn
                      class="modalButton mb-10"
                      block
                      tile
                      @click="step = 2"
                    >
                      Administrar recolectores
                    </v-btn>
                    <br />
                    <v-btn
                      class="modalButton"
                      color="#44475c"
                      block
                      tile
                      @click="step = 3"
                    >
                      administrar reportes
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col sm="10" cols="12">
            <v-card color="#ebecf0">
              <div class="sul-box-raised-2 with-hover py-10 mb-10">
                <v-data-table
                  caption="Segumiento"
                  :headers="headers"
                  :items="estadisticas"
                  :items-per-page="5"
                  class="elevation-1 px-10 py-5 my-10 mx-5 subtitle-1"
                >
                </v-data-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- ...............................................Seccion de administracion de recolectores........................................................-->
      <v-window-item :value="2">
        <v-row class="formRow ml-auto mr-auto">
          <v-col sm="12" cols="12">
            <v-card class="mt-5 mb-10">
              <div class="sul-box-inset-1 with-hover with-hover">
                <componenteDialog
                  v-if="this.dialogError == true"
                  :estadoDialog="true"
                  :tituloMensaje="'Error'"
                  :mensaje="
                    'Ocurrió un error creando el reclector, verifique que todos los campos estén ingresados y/o que la información sea valida'
                  "
                />
                <v-row justify="center" align="center">
                  <v-col cols="12" sm="6">
                    <v-card-text class="mt-12">
                      <h2 class="text-center">Agregar un recolector</h2>
                      <h4 class="text-center grey--text">
                        Por favor ingresa la información necesaria para poder
                        crear un nuevo recolector
                      </h4>
                      <v-form
                        ref="formReport"
                        class="pa-3 pt-4"
                        lazy-validation
                      >
                        <v-text-field
                          :rules="rules.doc"
                          class="sul-text-field mb-5"
                          label="Documento de identificación"
                          v-model="documento"
                          color="green"
                          autocomplete="false"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          :rules="rules.texto"
                          class="sul-text-field mb-5"
                          label="Nombre"
                          v-model="nombre"
                          color="green"
                          autocomplete="false"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          :rules="rules.celular"
                          class="sul-text-field mb-5"
                          label="Celular"
                          v-model="celular"
                          color="green"
                          autocomplete="false"
                          required
                        >
                        </v-text-field>
                        <v-text-field
                          :rules="rules.emailRules"
                          class="sul-text-field mb-5"
                          label="Correo"
                          v-model="correo"
                          color="green"
                          autocomplete="false"
                          required
                        >
                        </v-text-field>
                        <v-select
                          :rules="rules.required"
                          class="sul-select"
                          v-model="categoria"
                          :items="categorias"
                          label="Tipo"
                          outlined
                          color="green"
                          required
                        ></v-select>

                        <br />
                        <v-btn
                          color="green"
                          class="modalButton"
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
              </div>
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
      </v-window-item>

      <!-- ...............................................Seccion de administracion de reportes........................................................-->

      <v-window-item :value="3">
        <v-row class="my-5 py-10">
          <v-col sm="12" cols="12">
            <v-row align="center" justify="center">
              <v-col align="center" justify="center">
                
                <div
                  class="my-5 py-5"
                  v-for="report in reports"
                  :key="report.id_reporte"
                >
                  <v-card
                    color="#ebecf0"
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
                    <div class="sul-box-inset-1 with-hover py-10">
                      <v-img
                        :src="`${pathImg}${report.rutaimagen}`"
                        width="60%"
                        class="d-block ml-auto mr-auto"
                      ></v-img>

                      <v-row align="center" justify="center" class="mt-5">
                        <v-col
                          cols="12"
                          sm="12"
                          class="text-center px-auto"
                          align="center"
                          justify="center"
                        >
                          <h4
                            class="font-weight-regular subtitle-1 px-10 mb-10"
                          >
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
                      <v-btn
                        color="green"
                        class="px-3 mx-3 my-3 py-3 modalButton"
                        tile
                        @click="editarReporte(report)"
                      >
                        Cambiar tipo
                      </v-btn>
                      <v-btn
                        class="px-3 mx-3 my-3 py-3 modalButton"
                        tile
                        @click="actualizarReporte(report)"
                      >
                        Aprobar
                      </v-btn>
                      <v-btn
                        class="px-3 mx-3 my-3 py-3 modalButton"
                        tile
                        @click="eliminarReporte(report)"
                      >
                        Eliminar
                      </v-btn>
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- ...............................................Seccion Home........................................................-->
      <v-window-item :value="4">
        <v-row>
          <v-col cols="10"> <home></home> </v-col>
        </v-row>
      </v-window-item>
      <!-- ...............................................Seccion Feed........................................................-->
      <v-window-item :value="5">
        <feed></feed>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import home from "../components/LoggedHome.vue";
import feed from "../components/LoginFeed.vue";
import axios from "axios";
import Swal from "sweetalert2/src/sweetalert2.js";
export default {
  components: {
    home,
    feed,
  },
  reporteEnEdicion: "",
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

  beforeMount() {
    this.token = localStorage.getItem("token");
    this.cargarRecolectores();
    this.getReports();
    this.calcularEstadisticas();
  },
  data() {
    return {
      rules: {
        required: [(v) => !!v || "El campo es obligatorio"],
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailRules: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /[a-zA-Z0-9.]+@.+(..{2,3}){1,2}/.test(v) || "Correo invalido",
        ],
        doc: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /[0-9+]/.test(v) || "Ingrese solo numeros",
          (v) => v.length <= 20 || "Max 20 caracteres",
        ],
        texto: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(v) || "Ingrese solo letras",
        ],
        celular: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /[0-9+]/.test(v) || "Ingrese solo numeros",
          (v) => v.length == 10 || "Debe ingresar 10 caracteres",
        ],
      },
      //steps that are used to manage the windows
      step: 1,
      //Path static de imagenes
      pathImg: "http://localhost:3001/public/static/",
      //elements modal(popup) toggle management
      showingCollectorsModal: false,
      showingReportsModal: false,
      showingTestModal: false,
      //SideBar links
      links: [
        ["mdi-microsoft-windows", "Tablero"],
        ["mdi-home", "Inicio"],
        ["mdi-format-line-weight", "Feed"],
        ["mdi-logout", "Salir"],
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
          text: "Reportes",
          align: "start",
          sortable: false,
          value: "name",
          class: "white--text subtitle-1",
        },
        {
          text: "Codigo Blanco",
          value: "sinaprobar",
          class: "white--text subtitle-1",
        },
        {
          text: "Codigo Verde",
          value: "pendientes",
          class: "white--text subtitle-1",
        },
        {
          text: "Codigo Negro",
          value: "recogidos",
          class: "white--text subtitle-1",
        },
      ],
      //Table data
      estadisticas: [
        {
          name: "Sin aprobar",
          sinaprobar: 0,
          pendientes: 0,
          recogidos: 0,
        },
        {
          name: "Pendientes",
          sinaprobar: 0,
          pendientes: 0,
          recogidos: 0,
        },
        {
          name: "Recogidos",
          sinaprobar: 0,
          pendientes: 0,
          recogidos: 0,
        },
      ],
    };
  },
  methods: {
    sideBarAction(item) {
      if (item == "mdi-microsoft-windows") {
        this.step = 1;
      } else if (item == "mdi-home") {
        this.step = 4;
      } else if (item == "mdi-format-line-weight") {
        this.step = 5;
      }
    },
    reloadPage() {
      this.Cambiocategoria = "";
      window.location.reload();
    },
    async calcularEstadisticas() {
      let estados = [0, 1, 2];
      let categorias = [1, 2, 3];
      try {
        for (let i = 0; i < estados.length; i++) {
          let estado = estados[i];
          for (let j = 0; j < categorias.length; j++) {
            let categoria = categorias[j];
            let token = this.token;
            let response = await axios.get(
              `http://localhost:3001/estadisticasAdministrador/${estado}/${categoria}`,
              {
                headers: { token },
              }
            );
            let valor = response.data.content[0].count;
            if (i == 0) {
              if (j == 0) {
                this.estadisticas[0].sinaprobar = valor;
              } else if (j == 1) {
                this.estadisticas[0].pendientes = valor;
              } else {
                this.estadisticas[0].recogidos = valor;
              }
            } else if (i == 1) {
              if (j == 0) {
                this.estadisticas[1].sinaprobar = valor;
              } else if (j == 1) {
                this.estadisticas[1].pendientes = valor;
              } else {
                this.estadisticas[1].recogidos = valor;
              }
            } else {
              if (j == 0) {
                this.estadisticas[2].sinaprobar = valor;
              } else if (j == 1) {
                this.estadisticas[2].pendientes = valor;
              } else {
                this.estadisticas[2].recogidos = valor;
              }
            }
          }
        }
      } catch (error) {
        this.reports = [];
        console.error(error);
      }
    },
    eliminarReporte(report) {
      Swal.fire({
        icon: "question",
        title: "¿Está seguro?",
        text: `Desea eliminar este reporte?`,
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.eliminar(report);
        } else if (result.isDenied) {
          //Sin accion
        }
      });
    },
    async eliminar(report) {
      let token = this.token;
      try {
        await axios.delete(
          `http://localhost:3001/eliminarReporte/${report.id_reporte}`,
          {
            headers: { token },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Ok...",
          text: "Reporte eliminado",
        });
        this.reloadPage();
      } catch (error) {
        console.error(error);
      }
    },
    editarReporte(report) {
      this.showingReportsModal = true;
      this.reporteEnEdicion = report;
    },
    async getReports() {
      try {
        let token = localStorage.getItem("token");
        let url = `http://localhost:3001/getReports`;
        let reesponse = await axios.get(url, {
          headers: { token },
        });
        this.actualizarEstado(reesponse.data.content);
      } catch (error) {
        this.reports = [];
        console.error(error);
      }
    },
    actualizarEstado(reports) {
      for (let i = 0; i < reports.length; i++) {
        if (reports[i].estado == 0) {
          reports[i].estado = "En espera de ser aprobado";
        } else if (reports[i].estado == 1) {
          reports[i].estado = "En espera de recolección";
        } else if (reports[i].estado == 2) {
          reports[i].estado = "Recogido";
        }
        this.reports.push(reports[i]);
      }
    },
    async actualizarReporte(report) {
      if (this.Cambiocategoria != "" && this.Cambiocategoria != null) {
        //Cambiar categoria y estado
        if (this.Cambiocategoria == "Reciclable") {
          report.id_categoria = 1;
        } else if (this.Cambiocategoria == "Organico") {
          report.id_categoria = 2;
        } else if (this.Cambiocategoria == "No reciclable") {
          report.id_categoria = 3;
        }
        let token = this.token;
        try {
          await axios.put(
            "http://localhost:3001/estadoAprobadoCategoria",
            report,
            {
              headers: { token },
            }
          );
          this.showingReportsModal = false;
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: "Reporte actualizado",
          });
          this.reloadPage();
        } catch (error) {
          console.log(error);
        }
      } else {
        //Cambiar estado
        Swal.fire({
          icon: "question",
          title: "¿Está seguro?",
          text: `Desea mantener la categoria ${report.categoria}`,
          showDenyButton: true,
          confirmButtonText: "Si",
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.putEstado(report);
          } else if (result.isDenied) {
            //Sin accion
          }
        });
      }
    },
    async putEstado(report) {
      let token = this.token;
      try {
        await axios.put("http://localhost:3001/estadoAprobado", report, {
          headers: { token },
        });
        Swal.fire({
          icon: "success",
          title: "Ok...",
          text: "Reporte actualizado",
        });
        this.reloadPage();
      } catch (error) {
        console.log(error);
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
        try {
          await axios.put("http://localhost:3001/putrecolectores", recolector, {
            headers: { token },
          });
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: "Categoria actualizada",
          });
          this.reloadPage();
        } catch (error) {
          console.log(error);
        }
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
      try {
        let response = await axios.get(
          "http://localhost:3001/getrecolectores",
          {
            headers: { token },
          }
        );
        this.collectors = response.data.content;
      } catch (error) {
        console.log(error);
      }
    },
    async crearRecolecor() {
      if (this.$refs.formReport.validate()) {
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
        try {
          await axios.post(
            "http://localhost:3001/postrecolectores",
            recolector,
            {
              headers: { token },
            }
          );
          Swal.fire({
            icon: "success",
            title: "Ok...",
            text: "Categoria actualizada",
          });
          this.reloadPage();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Diligencie correctamente el formulario",
          });
          console.log(error);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "Diligencie correctamente el formulario",
        });
      }
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
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #4caf50;
  color: white;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #20bf55;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #ebecf0;
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
  background-color: #ebecf0;
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
  background-image: linear-gradient(to right, #20bf55, #7ee8fa);
  color: #44475c;
  font-size: 25px;
  font-weight: 2000;
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
