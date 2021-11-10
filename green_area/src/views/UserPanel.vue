<template>
  <div class="dashboard">
    <!-- ...............................................Sidebar........................................................-->
    <nav>
      <v-navigation-drawer v-model="drawer" app>
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

    <!-- ...............................................Seccion principal........................................................-->

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
          <h1>Tablero</h1>
        </v-subheader>
        <br />
        <v-row>
          <v-col sm="6" cols="12">
            <div class="sul-box-raised-1 with-hover">
              <v-alert dense text type="success">
                Ingreso exitoso! Bienvenido a <strong>Area verde</strong>
              </v-alert>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col sm="12" cols="12">
            <v-card class="mt-5 mb-10 mx-10">
              <div class="sul-box-inset-1 with-hover">
                <v-row justify="center" align="center">
                  <v-col cols="12" sm="6">
                    <v-card-text class="mt-12">
                      <h2 class="text-center">Agregar un reporte</h2>
                      <h4 class="text-center grey--text">
                        Por favor ingresa la información necesaria para poder
                        hacer un reporte
                      </h4>
                      <v-form
                        ref="formReport"
                        v-model="valid"
                        class="pa-3 pt-4"
                        lazy-validation
                      >
                        <v-row align="center" justify="center">
                          <v-col
                            cols="12"
                            sm="8"
                            align="center"
                            justify="center"
                          >
                            <v-text-field
                              :rules="rules"
                              v-model="report.descripcion"
                              label="Descripción (opcional)"
                              color="green"
                              autocomplete="false"
                              class="my-5 sul-text-field"
                            >
                            </v-text-field>
                            <v-text-field
                              :rules="rules"
                              class="my-5 sul-text-field"
                              v-model="report.ubicacion"
                              label="Ubicación"
                              color="green"
                              autocomplete="false"
                            >
                            </v-text-field>

                            <v-select
                              :rules="rules"
                              v-model="report.id_categoria"
                              :items="categoria"
                              label="Categoría"
                              color="green"
                              outlined
                              class="sul-select"
                            ></v-select>

                            <v-btn
                              color="green"
                              class="my-3 pb-5 perpendButton"
                              dark
                            >
                              <v-file-input
                                :rules="rules"
                                hide-input
                                class="pt-4 pl-2"
                                v-model="report.rutaimagen"
                                color="green"
                                accept="image/png, image/jpeg, image/bmp"
                                prepend-inner-icon="mdi-camera"
                              ></v-file-input>
                            </v-btn>

                            <br />
                            <v-btn
                              @click="createReport()"
                              class="modalButton"
                              block
                              tile
                            >
                              Reportar
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="feedRow">
          <v-col
            sm="12"
            cols="12"
            v-for="report in reports"
            :key="report.id_reporte"
          >
            <v-card
              class="
            mx-12
            rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl
            mt-n15
            cardcont
            codver
            text-center
            py-7
            my-15
          "
              color="#ebecf0"
              shaped
            >
              <div class="sul-box-inset-1 with-hover">
                <v-row align="center" justify="center">
                  <v-col
                    cols="12"
                    sm="12"
                    class="d-md-flex"
                    align="center"
                    justify="center"
                  >
                    <img
                      :src="`${pathImg}${report.rutaimagen}`"
                      width="60%"
                      class="d-block ml-auto mr-auto pt-5"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col
                    cols="12"
                    sm="8"
                    class="text-center"
                    align="center"
                    justify="center"
                  >
                    <h4 class="font-weight-regular subtitle-1 text-center mb-5">
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
                      <strong> Categoria: </strong>
                      {{ report.categoria }}
                    </h4>
                  </v-col>
                  <br />
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- ...............................................Seccion Home........................................................-->
      <v-window-item :value="2">
        <v-row>
          <v-col cols="10"> <home></home> </v-col>
        </v-row>
      </v-window-item>
      <!-- ...............................................Seccion Feed........................................................-->
      <v-window-item :value="3">
        <feed></feed>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import home from "../components/LoggedHome.vue";
import feed from "../components/LoginFeed.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  beforeMount() {
    this.loadReports();
  },

  components: {
    home,
    feed,
  },
  name: "Dashboard",
  data() {
    return {
      step: 1,
      dialogError: false,
      //Data spinner categorías
      categoria: ["Reciclable", "Organicos", "No reciclables"],
      //Path static de imagenes
      pathImg: "http://localhost:3001/public/static/",

      //JSON Report para crearlo
      report: {
        descripcion: "",
        id_categoria: "",
        id_usuario: "",
        ubicacion: "",
        rutaimagen: null,
        estado: 0,
      },

      //JSON reports para listarlos
      reports: [],
      links: [
        ["mdi-microsoft-windows", "Tablero"],
        ["mdi-home", "Inicio"],
        ["mdi-format-line-weight", "Feed"],
        ["mdi-logout", "Salir"],
      ],

      //Reglas formReport
      rules: {
        required: [(v) => !!v || "El campo es obligatorio"],
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailRules: [
          (v) => !!v || "El campo es obligatorio",
          (v) => /.+@.+\..+/.test(v) || "Correo invalido",
        ],
      },
    };
  },

  methods: {
    sideBarAction(item) {
      if (item == "mdi-microsoft-windows") {
        this.step = 1;
      } else if (item == "mdi-home") {
        this.step = 2;
      } else if (item == "mdi-format-line-weight") {
        this.step = 3;
      }
    },
    cleanCampos() {
      (this.report.descripcion = ""),
        (this.report.ubicacion = ""),
        (this.report.rutaimagen = "");
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

    async loadReports() {
      try {
        let token = localStorage.getItem("token");
        let id = localStorage.getItem("user-id");
        let url = `http://localhost:3001/getReports/${id}`;
        let reesponse = await axios.get(url, {
          headers: { token },
        });
        this.actualizarEstado(reesponse.data.content);
        //this.reports = reesponse.data.content;
      } catch (error) {
        this.reports = [];
        console.error(error);
      }
    },

    async sendFiles(id) {
      try {
        //let url = `http://localhost:3001/createReport/1/archivos`;
        let url = `http://localhost:3001/createReport/${id}/archivos`;
        let formData = new FormData();
        formData.append("imagen", this.report.rutaimagen);
        let { data } = await axios.post(url, formData);
        if (data.ok == true) {
          console.log("Subido");
          return await formData.get("imagen");
        } else {
          this.dialogError = true;
          console.log("Error subiendo archivos");
          return "";
        }
      } catch (error) {
        this.dialogError = true;
        console.log(error);
        return "";
      }
    },

    async createReport() {
      if (this.$refs.formReport.validate()) {
        try {
          if (this.report.id_categoria == "Reciclable") {
            this.report.id_categoria = "1";
          } else if (this.report.id_categoria == "Organicos") {
            this.report.id_categoria = "2";
          } else if (this.report.id_categoria == "No reciclables") {
            this.report.id_categoria = "3";
          }
          let id = localStorage.getItem("user-id");
          let report = Object.assign({}, this.report);
          report.id_usuario = id;
          this.sendFiles(id);
          report.rutaimagen = report.rutaimagen.name;
          let response = await axios.post(
            "http://localhost:3001/createReport/",
            report
          );
          this.cleanCampos();
          if (response.data.ok == true) {
            Swal.fire({
              icon: "success",
              title: "Ok...",
              text: "El reporte se creó correctamente",
            });
            window.location.reload();
          } else {
            Swal.fire({
              icon: "error",
              title: "Ups...",
              text: "Error creando el reporte",
            });
          }
        } catch (error) {
          Swal.fire({
            type: "error",
            title: "Ups...",
            text: error,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.codneg {
  border: 10px;
  border-color: black;
}
.cardcont {
  padding: 2%;
}
.feedRow {
  padding-top: 10%;
}
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
.perpendButton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  background-image: linear-gradient(to right, #20bf55, #7ee8fa);
  color: #44475c;
  font-size: 25px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.perpendButton:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>
